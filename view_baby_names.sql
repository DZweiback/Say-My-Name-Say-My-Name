CREATE VIEW `view_baby_names` AS
    SELECT 
        `b`.`State` AS `State`,
        `b`.`Gender` AS `Gender`,
        `b`.`Year` AS `Year`,
        `b`.`Name` AS `Baby_Name`,
        `b`.`Count` AS `Count`
    FROM
        (`baby_names_by_state` `b`
        JOIN `movies` `m` ON ((`b`.`Year` = `m`.`year`)))