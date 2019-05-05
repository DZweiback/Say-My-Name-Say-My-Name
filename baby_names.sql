CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `DZweiback`@`%` 
    SQL SECURITY DEFINER
VIEW `baby_names` AS
    SELECT 
        `b`.`State` AS `State`,
        `b`.`Gender` AS `Gender`,
        `b`.`Year` AS `Year`,
        `b`.`Name` AS `Name`,
        `b`.`Count` AS `Count`
    FROM
        `baby_names_by_state` `b`