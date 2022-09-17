# command for creating new migration files:
#         make mig new=MyNewMigration

.PHONY: mig
mig:
	touch ./resources/migrations/`date '+%Y%m%d%H%M%S'`-$(new).up.sql
	touch ./resources/migrations/`date '+%Y%m%d%H%M%S'`-$(new).down.sql
