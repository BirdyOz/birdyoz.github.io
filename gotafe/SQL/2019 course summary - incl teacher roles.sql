SELECT ec.fullname,
       ec.id,
       array_to_string(array_agg(CASE
                                     WHEN uce.roleshortname = 'trainerdeveloper' THEN uce.username
                                 END), ', ') AS course_developers,
       array_to_string(array_agg(CASE
                                     WHEN uce.roleshortname = 'gotafetrainer' THEN uce.username
                                 END), ', ') AS gotafe_trainers,
       ec.category1,
       ec.category2,
       ec.category3,
       ec.category4,
       ec.visible,
       ec.totalactivestudents_1day,
       ec.totalactivestudents_7days,
       ec.totalactivestudents_30days,
       ec.totalactivestudents_thisyear,
       ec.totalstudents
FROM public.e_course ec
JOIN public.e_user_course_enrolments uce ON ec.id = uce.courseid
GROUP BY ec.id,
         ec.fullname,
         ec.category1,
         ec.category2,
         ec.category3,
         ec.category4,
         ec.visible,
         ec.totalstudents,
         ec.totalactivestudents_7days,
         ec.totalactivestudents_1day,
         ec.totalactivestudents_30days,
         ec.totalactivestudents_thisyear
LIMIT 10