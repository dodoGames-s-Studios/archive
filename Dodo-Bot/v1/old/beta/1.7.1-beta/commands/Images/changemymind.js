module.exports = {
  name: "changemymind",
  code: `$attachment[https://vacefron.nl/api/changemymind?text=$uri[$message;encode];changemymind.png]
  $onlyIf[$message!=;the change my mind master didn't approve you being giving him nothing]
$onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]
`
}
