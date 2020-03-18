SELECT email,
       firstname,
       lastname,
       unit,
       username,
       REPLACE(SUBSTRING (coursefullname, '\((.*)\,'),'-',', ') AS qual,
       Min(logtime) AS logtime,
       Min(VERSION) AS VERSION,
       Array_to_string(Array_agg(DISTINCT (modulename || ' - ' || action)), ', ') AS actions,
       Array_to_string(Array_agg(DISTINCT ('https://gotafe.trainingvc.com.au/mod/' || modulename || '/view.php?id=' || cmid)), ' -- AND -- ') AS LOCATION
FROM
    (SELECT ucma.category1,
            ucma.category2,
            ucma.category3,
            ucma.category4,
            ucma.category5,
            ucma.category6,
            ucma.logtime,
            ucma.loginfo,
            ucma.action,
            ucma.userid,
            ucma.username,
            ucma.firstname,
            ucma.lastname,
            ucma.email,
            ucma.rolearchetype,
            ucma.courseid,
            ucma.courseshortname,
            ucma.coursefullname,
            ucma.moduleid,
            ucma.modulename,
            ucma.moduleidnumber,
            ucma.cmid,
            ucma.itemname,
            ucma.topicnumber,
            ucma.roleenrolled,
            (CASE
                 WHEN Strpos(ucma.moduleidnumber, '_') > 0 THEN Split_part(ucma.moduleidnumber, '_', 1)
                 ELSE ''
             END) AS unit,
            (CASE
                 WHEN Strpos(ucma.moduleidnumber, '_') > 1 THEN Split_part(ucma.moduleidnumber, '_', 2)
                 ELSE ''
             END) AS VERSION,
            (CASE
                 WHEN Strpos(ucma.moduleidnumber, '_') > 2 THEN Split_part(ucma.moduleidnumber, '_', 3)
                 ELSE ''
             END) AS attempt,
            (CASE
                 WHEN Strpos(ucma.moduleidnumber, '_') > 4 THEN Split_part(ucma.moduleidnumber, '_', 5)
                 ELSE ''
             END) AS assessment,
            ((modulename || ' - ' || action)) AS t
     FROM e_user_course_module_access ucma
     GROUP BY ucma.category1,
              ucma.category2,
              ucma.category3,
              ucma.category4,
              ucma.category5,
              ucma.category6,
              ucma.logtime,
              ucma.loginfo,
              ucma.action,
              ucma.userid,
              ucma.username,
              ucma.firstname,
              ucma.lastname,
              ucma.email,
              ucma.rolearchetype,
              ucma.courseid,
              ucma.courseshortname,
              ucma.coursefullname,
              ucma.moduleid,
              ucma.modulename,
              ucma.moduleidnumber,
              ucma.cmid,
              ucma.itemname,
              ucma.topicnumber,
              ucma.roleenrolled, (CASE
                                      WHEN Strpos(ucma.moduleidnumber, '_') > 0 THEN Split_part(ucma.moduleidnumber, '_', 1)
                                      ELSE ''
                                  END), (CASE
                                             WHEN Strpos(ucma.moduleidnumber, '_') > 1 THEN Split_part(ucma.moduleidnumber, '_', 2)
                                             ELSE ''
                                         END), (CASE
                                                    WHEN Strpos(ucma.moduleidnumber, '_') > 2 THEN Split_part(ucma.moduleidnumber, '_', 3)
                                                    ELSE ''
                                                END), (CASE
                                                           WHEN Strpos(ucma.moduleidnumber, '_') > 4 THEN Split_part(ucma.moduleidnumber, '_', 5)
                                                           ELSE ''
                                                       END)) query
WHERE (logtime BETWEEN '2019-01-01 00:00:00' AND '2020-12-31 23:59:59')
    AND moduleidnumber LIKE '%_SSP'
    AND (modulename || ' - ' || action) IN ('assign - submit for grading',
                                            'forum - add post',
                                            'forum - add discussion',
                                            'glossary - add entry',
                                            'glossary - update entry',
                                            'lesson - end',
                                            'quiz - attempt',
                                            'forum - update post')
    AND email LIKE '%@student.gotafe.vic.edu.au'
    AND Substr(username, 1, 1) IN ('0',
                                   '1',
                                   '2',
                                   '3',
                                   '4',
                                   '5',
                                   '6',
                                   '7',
                                   '8',
                                   '9')
    AND (roleenrolled != 0
         OR roleenrolled IS NULL)
GROUP BY email,
         firstname,
         lastname,
         unit,
         username,
         qual
ORDER BY unit,
         username