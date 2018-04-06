boards-app

Ce projet a constitué une bonne initiation à Ember, même si je ne pense pas avoir encore saisi toutes les subtilités du framework
This project was a good introduction to Ember, althought I don't really master it yet

Liste non-exhaustive des choses qui me gênent dans l'application que je rends :
		 - Un manque de factorisation du code, avec des fichiers new.hbs et update.hbs qui sont pratiquement identiques pour plusieurs entités. J'aurais préféré faire ce qui a été fait avec les 		projets, c'est-à-dire un unique fichier frm.hbs regroupant toutes les fonctionnalités.

		 - Le drag-and-drop pour les stories qui n'a pas été implanté. Je ne l'ai pas fait par manque de temps. J'ai été, sur les derniers jours, bloqué longtemps sur certaines petites erreurs. Cela a été d'autant plus difficile de les trouver qu'elles sont arrivés à un moment où j'avais mal géré mon git, et donc où tout retour en arrière aurait été risqué.
 		- La gestion des dépendances entre modèles. Nous avons appris qu'en mongoDB, contrairement aux SGBD relationnels, les documents entiers sont copiés dans les documents auxquels ils 	appartiennent, et non pas seulement leur clé primaire. Le fait que ce soit l'id qui soit référencée à chaque fois m'a un peu perturbé. J'aurais préféré travailler avec une base MySQL.

		- Le lien vers les stories dans l'index qui ne fonctionne pas. Là encore, je n'ai pas traité le cas particulier par manque de temps. J'ai été étonné que, dans le sujet, il soit indiqué qu'il 	faille un lien pour créer une nouvelle story. En effet, à mon sens, une story ne peut être créée qu'à l'intérieur d'un projet.