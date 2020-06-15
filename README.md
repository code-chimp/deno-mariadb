# Deno + MariaDB

Evaluating working with an ORM and a real data store.

[![Deno](https://img.shields.io/badge/powered%20by-Deno-green?logo=deno)](https://deno.land)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue?logo=typescript)](https://github.com/code-chimp/deno-template)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)
[![LICENSE](https://img.shields.io/github/license/code-chimp/deno-template)](https://github.com/code-chimp/deno-template/blob/master/LICENSE)
[![code-chimp](https://img.shields.io/badge/made%20by-code--chimp-yellowgreen)](https://github.com/code-chimp)

## Prerequisite

- Install [Deno][1]

## Development Data Store

The `data-scripts` directory contains some convenience scripts to create a preconfigured MariaDB instance in Docker

```bash
./data-scripts/setup.sh
./data-scripts/teardown.sh
```

or on Windows

```powershell
.\data-scripts\setup.ps1
.\data-scripts\teardown.ps1
```

## Run with the [Velociraptor][2] script runner

- Install [Velociraptor][2]
- restore cache from lock file

    ```bash
    vr restore-cache
    ```

- Run project

    ```bash
    vr start
    ```

## Run with WebStorm

While the Velociraptor runner is handy, if you use WebStorm it is probably more convenient
to use the built in `Run/Debug Configurations` functionality. Here is how to duplicate the
Velociraptor scripts in pure WebStorm:

1. Install the Deno plugin<br />
![Settings > Plugins](./docs/00_install-plugin.png)

1. Activate Deno for the current project<br />
![Settings > Languages & Frameworks > Deno](./docs/01_activate-deno.png)

1. Open the configurations dialog from the toolbar<br />
![add configurations button](./docs/02_add-configuration.png)

1. And click the plus (+) sign to pick a template for our new configuration<br />
![add new configurations button](./docs/03_add-new.png)

1. There should now be a Deno option that was installed by the plugin<br />
![add new configurations button](./docs/04_deno-option.png)

1. The default Deno template is set up for the ```deno run``` command and really only needs
you to tell it where to find the **main** file for the project (e.g. **index.ts**,
**server.ts**, etc.)<br />
![empty deno template](./docs/05_empty-template.png)

1. We can add some environment variables for Deno to pick up<br />
![edit environment variables](./docs/06_environment-variables.png)

1. For example the `DENO_DIR` is set for per-project caching, plus we can define the port that
 we would like the project to use running in development mode<br />
![finished environment variables](./docs/07_envvar-done.png)

1. Now it is easy to simply duplicate this configuration to create the others<br />
![duplicate configuration button](./docs/08_duplicate-config.png)

1. Alter the fields **Arguments**, **File**, and **Environment variables** to make a "create/update cache" config<br />
![create/update cache script](./docs/09_upsert-cache.png)

1. Duplicate "create/update cache" and adjust the **Arguments** to make a "restore cache" script

![restore cache script](./docs/10_restore-cache.png)

1. Done!

![Run/debug configurations menu](./docs/11_final.png)



[1]: <https://deno.land/#installation> "Deno Homepage"
[2]: <https://velociraptor.run/> "Velociraptor Script Runner"
