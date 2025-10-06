# andasy.hcl app configuration file generated for dtechel on Monday, 06-Oct-25 16:15:05 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "dtechel"

app {

  env = {}

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "dtechel"
  }

}
