CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `DZweiback`@`%` 
    SQL SECURITY DEFINER
VIEW `baby_names` AS
    SELECT 
        `baby_names_by_state`.`State` AS `State`,
        `baby_names_by_state`.`Gender` AS `Gender`,
        `baby_names_by_state`.`Year` AS `Year`,
        `baby_names_by_state`.`Name` AS `Name`,
        `baby_names_by_state`.`Count` AS `Count`
    FROM
        `baby_names_by_state`