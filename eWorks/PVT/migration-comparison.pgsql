-- Total user count
SELECT COUNT(*) AS usercount FROM mdl_user   -- old
SELECT COUNT(*) AS usercount FROM {user}     -- new

-- Active users (not deleted, not suspended)
SELECT COUNT(*) AS active_users
FROM mdl_user
WHERE deleted = 0 AND suspended = 0 -- old
SELECT COUNT(*) AS active_users
FROM {user}
WHERE deleted = 0 AND suspended = 0 -- new

SELECT COUNT(*) AS suspended_users
FROM mdl_user
WHERE suspended = 1 -- old
SELECT COUNT(*) AS suspended_users
FROM {user}
WHERE suspended = 1 -- new

-- Total courses
SELECT COUNT(*) AS coursecount FROM mdl_course
SELECT COUNT(*) AS coursecount FROM {course}

-- Total enrolments
SELECT COUNT(*) AS enrolments FROM mdl_user_enrolments
SELECT COUNT(*) AS enrolments FROM {user_enrolments}

-- Grade items
SELECT COUNT(*) AS gradeitems FROM mdl_grade_items
SELECT COUNT(*) AS gradeitems FROM {grade_items}

-- Grade records
SELECT COUNT(*) AS grades FROM mdl_grade_grades
SELECT COUNT(*) AS grades FROM {grade_grades}

-- Course completions
SELECT COUNT(*) AS completions FROM mdl_course_completions
SELECT COUNT(*) AS completions FROM {course_completions}

-- Assignments
SELECT COUNT(*) AS assignments FROM mdl_assign
SELECT COUNT(*) AS assignments FROM {assign}

-- Assignment submissions
SELECT COUNT(*) AS submissions FROM mdl_assign_submission
SELECT COUNT(*) AS submissions FROM {assign_submission}

-- Quizzes
SELECT COUNT(*) AS quizzes FROM mdl_quiz
SELECT COUNT(*) AS quizzes FROM {quiz}

-- Quiz attempts
SELECT COUNT(*) AS attempts FROM mdl_quiz_attempts
SELECT COUNT(*) AS attempts FROM {quiz_attempts}

-- Number of forums
SELECT COUNT(*) AS total_forums
FROM mdl_forum;
SELECT COUNT(*) AS total_forums
FROM {forum};

-- Number of forum posts
SELECT COUNT(*) AS total_posts
FROM mdl_forum_posts;
SELECT COUNT(*) AS total_posts
FROM {forum_posts};

-- Number of pages
SELECT COUNT(*) AS total_pages
FROM mdl_page;
SELECT COUNT(*) AS total_pages
FROM {page};

-- Number of book resources
SELECT COUNT(*) AS total_books
FROM mdl_book;
SELECT COUNT(*) AS total_books
FROM {book};

-- Number of book chapters
SELECT COUNT(*) AS total_chapters
FROM mdl_book_chapters;
SELECT COUNT(*) AS total_chapters
FROM {book_chapters};

-- Total number of files
SELECT COUNT(*) AS total_files
FROM mdl_files;
SELECT COUNT(*) AS total_files
FROM {files};

-- Users by authentication method
SELECT auth, COUNT(*) FROM mdl_user GROUP BY auth ORDER BY count DESC
SELECT auth, COUNT(*) FROM {user} GROUP BY auth ORDER BY count DESC

-- Courses by category
SELECT category, COUNT(*) FROM mdl_course GROUP BY category ORDER BY count DESC
SELECT category, COUNT(*) FROM {course} GROUP BY category ORDER BY count DESC

-- Enrolments per course
SELECT e.courseid, COUNT(ue.id) AS enrolcount
FROM mdl_user_enrolments ue
JOIN mdl_enrol e ON ue.enrolid = e.id
GROUP BY e.courseid
ORDER BY e.courseid

SELECT e.courseid, COUNT(ue.id) AS enrolcount
FROM {user_enrolments} ue
JOIN {enrol} e ON ue.enrolid = e.id
GROUP BY e.courseid
ORDER BY e.courseid

-- Submissions per assignment
SELECT assignment, COUNT(*) AS submissioncount
FROM mdl_assign_submission
GROUP BY assignment
ORDER BY assignment

SELECT assignment, COUNT(*) AS submissioncount
FROM {assign_submission}
GROUP BY assignment
ORDER BY assignment


-- Attempts per quiz
SELECT quiz, COUNT(*) AS attemptcount
FROM mdl_quiz_attempts
GROUP BY quiz
ORDER BY quiz

SELECT quiz, COUNT(*) AS attemptcount
FROM {quiz_attempts}
GROUP BY quiz
ORDER BY quiz

-- Grades per item
SELECT itemid, COUNT(*) AS gradecount
FROM mdl_grade_grades
GROUP BY itemid
ORDER BY itemid

SELECT itemid, COUNT(*) AS gradecount
FROM {grade_grades}
GROUP BY itemid
ORDER BY itemid

-- Completions per course
SELECT course, COUNT(*) AS completioncount
FROM mdl_course_completions
GROUP BY course
ORDER BY course

SELECT course, COUNT(*) AS completioncount
FROM {course_completions}
GROUP BY course
ORDER BY course