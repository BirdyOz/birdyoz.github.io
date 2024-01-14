SELECT substring(bc.breadcrumb,'((NSIT|FAME|PAT|Westmead Feelings Program|PISA|LtP|General Capabilities|Disability Inclusion Profile|PISA|Graduate Certificate of Education|Online Teaching|Curriculum Review and Design|Data))') as teaching_area,
substring(bc.breadcrumb,1,4) as year,
substring(bc.breadcrumb,'[lL]earning [pP]eriod (.)') as learning_period,
c.fullname as course_name ,c.shortname,c.id AS course_id,to_timestamp(c.timecreated)::date as course_created, bc.breadcrumb,u.username,u.firstname,u.lastname,r.name as role,
to_timestamp(ra.timemodified)::date AS enrolled, to_timestamp(la.timeaccess)::date AS last_access, certs.date_issued as certificate_issued

FROM {role_assignments} AS ra
JOIN {role} AS r ON r.id = ra.roleid
JOIN {user} AS u ON u.id = ra.userid
JOIN {context} AS ctx ON (ctx.id = ra.contextid AND ctx.contextlevel = 50)
JOIN {course} AS c ON ctx.instanceid = c.id
LEFT JOIN {user_lastaccess} AS la ON (u.id = la.userid AND c.id = la.courseid)
JOIN {course_categories} AS cc ON c.category = cc.id
JOIN (SELECT t1.id AS id,
            string_agg(t2.name,' -> '
                       ORDER BY POSITION(CONCAT('/', t2.id, '/') IN CONCAT(t1.path, '/'))) AS breadcrumb
     FROM {course_categories} t1,
          {course_categories} t2
     WHERE POSITION(CONCAT('/', t2.id, '/') IN CONCAT(t1.path, '/'))<>0
     GROUP BY t1.id ) AS bc ON c.category = bc.id
LEFT JOIN (
    SELECT ci.userid AS user, cert.course AS course, to_timestamp(MAX(ci.timecreated))::date AS date_issued
    FROM {customcert_issues} AS ci
    JOIN {customcert} AS cert ON cert.id = ci.customcertid
    GROUP BY ci.userid, cert.course
    ) AS certs ON (c.id = certs.course AND u.id = certs.user)

WHERE cc.path like '/2278/%' OR cc.path like '/3268/%'
order by teaching_area ASC, year ASC, learning_period ASC,course_name ASC, lastname ASC, firstname ASC