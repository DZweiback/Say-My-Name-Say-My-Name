CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `DZweiback`@`%` 
    SQL SECURITY DEFINER
VIEW `baby_names` AS
    SELECT * FROM saymyname.baby_names_by_state;   