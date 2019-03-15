SELECT ec.fullname,
       array_to_string(array_agg(CASE WHEN uce.rolearchetype = 'editingteacher' THEN uce.username END), ', ') AS editing_teachers,
       array_to_string(array_agg(CASE WHEN uce.rolearchetype = 'teacher' THEN uce.username END), ', ') AS non_editing_teachers
FROM e_course ec
JOIN e_user_course_enrolments uce ON ec.id = uce.courseid
WHERE ec.id = '7545'
GROUP BY ec.fullname