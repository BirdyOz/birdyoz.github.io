SELECT ec.fullname,
       array_to_string(array_agg(DISTINCT(uce.username)), ', ') AS designers
FROM e_course ec
JOIN e_user_course_enrolments uce ON ec.id = uce.courseid
WHERE ec.id = '7545'
    AND uce.roleshortname = 'trainerdeveloper'
GROUP BY ec.fullname