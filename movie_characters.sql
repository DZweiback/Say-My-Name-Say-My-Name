CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `DZweiback`@`%` 
    SQL SECURITY DEFINER
VIEW `movie_characters` AS
    SELECT 
        `m`.`title` AS `movie_title`,
        `c`.`character` AS `character_name`,
        `c`.`name` AS `actor_name`,
        `m`.`year` AS `release_year`
    FROM
        (`characters` `c`
        JOIN `movies` `m` ON ((`c`.`movie_id` = `m`.`id`)))