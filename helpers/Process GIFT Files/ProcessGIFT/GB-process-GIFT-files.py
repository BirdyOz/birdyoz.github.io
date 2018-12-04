import sublime, sublime_plugin, os, subprocess, datetime, shutil


class ProcessGiftFileCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # save file contents to buffer
        buffer_text = self.view.substr(sublime.Region(0, self.view.size()))
        print(buffer_text)
        numberquestions(self, edit)
        alternates(self, edit)
        duplicatefile(self, edit)
        restorefrombuffer(self, edit, buffer_text)

def numberquestions(self, edit):


    self.view.sel().clear()  # clear any existing selections
    count = 0
    question = 1
    prefix = ""

    # find all opening curly braces
    for rgn in self.view.find_all('\{'):
        self.view.sel().add(rgn)
        count += 1

    # find all categories
    for rgn in self.view.find_all('\$CATEGORY\:'):
        self.view.sel().add(rgn)
        count += 1

    # find all single line questions (ie. labels)
    for rgn in self.view.find_all('\|'):
        self.view.sel().add(rgn)
        count += 1

    # expand selection to line
    self.view.run_command("expand_selection", {"to": "line"})
    sels = self.view.sel()

    for sel in sels:
        # convert sel to string
        string = self.view.substr(sel)
        # print("string: ", string)

        if string.find('|') != -1:
            string = string.replace("|", "").strip()

        if string.find('CATEGORY:') != -1:
            prefix = string.replace("$CATEGORY:", "").replace("/", ".").strip()+"."
            question = 1
        else:
            if question < 10:
                qstr = "0" + str(question)
            else:
                qstr = str(question)
            string = "::" + prefix + "Q" + qstr + ":: " + string
            self.view.replace(edit, sel, string)
            question += 1


def alternates(self, edit):
    self.view.sel().clear()  # clear any existing selections
    count = 0

    # find all closing curly braces
    for rgn in self.view.find_all('\}'):
        self.view.sel().add(rgn)
        count += 1

    # expand selection to all braces
    self.view.run_command("expand_selection", {"to": "brackets"})

    sels = self.view.sel()

    for sel in sels:
        correct = 0
        incorrect = 0
        # convert sel to string
        string = self.view.substr(sel)
        # search string for correct and incorrect answers

        # split to lines
        lines = string.split('\n')
        new_lines = []

        # loop through lines
        for line in lines:
            line = str(line).strip()  # strip whitepace
            if line.startswith("=") and line.count("->") == 0:
                # multi-choice or multi response
                correct += 1
            elif line.startswith("~"):
                # multi-choice or multi response
                incorrect += 1
            elif not line.startswith("=") and line.count("=") == 1:
                # improperly formed matching
                # print("Match: ", line)
                line = '= ' + line.replace('=', '->')
                # print("line: ", line)
            elif not line.startswith("=") and not line.startswith("~") and len(line) > 0  and line !="F" and line !="T":
                # improperly formatted multichoice incorrect
                line = '~ ' + line
                incorrect += 1
            new_lines.append(line)

        # If I have more than 1 correct answer and atleast one incorrect
        # answer, I am a multiple response
        if correct > 1 and incorrect > 0:
            temp_lines = list(new_lines)
            print("temp_lines: ", temp_lines)
            # empty new_lines array
            del new_lines[:]
            print("temp_lines: ", temp_lines)
            pc_correct = roundit(correct)
            pc_incorrect = roundit(incorrect)
            # loop through lines
            for line in temp_lines:
                # Find correct lines
                if line.find('= ') != -1:
                    prefix = "~%{0}%".format(pc_correct)
                    line = line.replace("=", prefix)

                # Find incorrect lines
                if line.find('~ ') != -1:
                    prefix = "~%-{0}%".format(pc_incorrect)
                    line = line.replace("~", prefix)
                new_lines.append(line)
        # Indent list items
        for i in range(1, len(new_lines) - 1):
            new_lines[i] = '\t' + new_lines[i]

        new_string = "\n".join(new_lines)
        # update sublime text selections
        self.view.replace(edit, sel, new_string)

    # Fold questions
    # self.view.run_command("fold")


def roundit(val):
    score_arr = [100, 50, 33.33333, 25, 20,
                 16.66667, 14.28571, 12.5, 11.11111, 10]
    pc = score_arr[val - 1]
    return pc


def duplicatefile(self, edit):
    self.view.run_command("save")
    if self.view.file_name():
        file_name = self.view.file_name()
        dir_name = os.path.dirname(file_name)
        base_name = os.path.basename(file_name)
        base_base, base_ext = os.path.splitext(base_name)
        target_dir = dir_name
        target_file = base_base+"_GIFT"+base_ext
        target_target = os.path.join(target_dir, target_file)

        try:
            shutil.copyfile(file_name, target_target)
            sublime.status_message("GIFT FILE READY: %s" % target_file)
        except:
            sublime.status_message("Error while copying file")
        new_window = sublime.active_window()
        new_window.run_command('set_layout', {
            'cols': [0.0, 0.5, 1.0],
            'rows': [0.0, 1.0],
            'cells': [[0, 0, 1, 1], [1, 0, 2, 1]]
        })
        new_window.focus_group(1)
        new_window.open_file(target_target)
        new_window.focus_group(0)

def restorefrombuffer(self, edit, buffer_text):
        self.view.run_command("select_all")
        sels = self.view.sel()
        for sel in sels:
            self.view.replace(edit, sel, buffer_text)
        self.view.sel().clear()
        self.view.run_command("save")

