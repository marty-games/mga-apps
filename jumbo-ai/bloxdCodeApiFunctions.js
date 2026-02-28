var apiFunctions = {
  "getPosition": {
    "function": "getPosition(entityId)",
    "usage": "Get position of a player / entity.",
    "params": [
      "@param {EntityId} entityId"
    ],
    "returns": "@returns {[number, number, number]}"
  },
  "setPosition": {
    "function": "setPosition(entityId, x, y, z)",
    "usage": "Set position of a player / entity.",
    "params": [
      "@param {EntityId} entityId",
      "@param {number | number[]} x - Can also be an array, in which case y and z shouldn't be passed",
      "@param {number} [y]",
      "@param {number} [z]"
    ],
    "returns": "@returns {void}"
  },
  "getPlayerIds": {
    "function": "getPlayerIds()",
    "usage": "Get all the player ids.",
    "params": [],
    "returns": "@returns {PlayerId[]}"
  },
  "playerIsInGame": {
    "function": "playerIsInGame(playerId)",
    "usage": "Whether a player is currently in the game",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {boolean}"
  },
  "playerIsLoggedIn": {
    "function": "playerIsLoggedIn(playerId)",
    "usage": "",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {boolean}"
  },
  "getPlayerPartyWhenJoined": {
    "function": "getPlayerPartyWhenJoined(playerId)",
    "usage": "Returns the party that the player was in when they joined the game. The returned object contains the playerDbIds, as well",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {PNull<{ playerDbIds: PlayerDbId[] }>}"
  },
  "getNumPlayers": {
    "function": "getNumPlayers()",
    "usage": "Get the number of players in the room",
    "params": [],
    "returns": "@returns {number}"
  },
  "getBlockCoordinatesPlayerStandingOn": {
    "function": "getBlockCoordinatesPlayerStandingOn(playerId)",
    "usage": "Get the co-ordinates of the blocks the player is standing on as a list. For example, if the center of the player is at 0,0,0",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {number[][]}"
  },
  "getBlockTypesPlayerStandingOn": {
    "function": "getBlockTypesPlayerStandingOn(playerId)",
    "usage": "Get the types of block the player is standing on",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {any[]}"
  },
  "getUnitCoordinatesLifeformWithin": {
    "function": "getUnitCoordinatesLifeformWithin(lifeformId)",
    "usage": "Get the up to 12 unit co-ordinates the lifeform is located within",
    "params": [
      "@param {LifeformId} lifeformId"
    ],
    "returns": "@returns {number[][]} - List of x, y, z positions e.g. [[-1, 0, 0], [-1, 1, 0], [-1, 2, 0]]"
  },
  "showShopTutorial": {
    "function": "showShopTutorial(playerId)",
    "usage": "Show the shop tutorial for a player. Will not be shown if they have ever seen the shop tutorial in your game before.",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {void}"
  },
  "getShieldAmount": {
    "function": "getShieldAmount(entityId)",
    "usage": "Get the current shield of an entity.",
    "params": [
      "@param {EntityId} entityId"
    ],
    "returns": "@returns {number}"
  },
  "setShieldAmount": {
    "function": "setShieldAmount(lifeformId, newShieldAmount)",
    "usage": "Set the current shield of a lifeform.",
    "params": [
      "@param {LifeformId} lifeformId",
      "@param {number} newShieldAmount"
    ],
    "returns": "@returns {void}"
  },
  "getHealth": {
    "function": "getHealth(entityId)",
    "usage": "Get the current health of an entity.",
    "params": [
      "@param {PlayerId} entityId"
    ],
    "returns": "@returns {number}"
  },
  "applyHealthChange": {
    "function": "applyHealthChange(lifeformId, changeAmount, whoDidDamage, broadcastLifeformHurt)",
    "usage": "",
    "params": [
      "@param {LifeformId} lifeformId",
      "@param {number} changeAmount - Must be an integer. A positive amount will increase the entity's health. A negative amount will decrease the entity's shield first, then their health.",
      "@param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoDidDamage] - Optional - If damage done by another player",
      "@param {boolean} [broadcastLifeformHurt]"
    ],
    "returns": "@returns {boolean} - Whether the entity was killed"
  },
  "setHealth": {
    "function": "setHealth(entityId, newHealth, whoDidDamage, increaseMaxHealthIfNeeded)",
    "usage": "Set the current health of an entity.",
    "params": [
      "@param {EntityId} entityId",
      "@param {PNull<number>} newHealth - Can be null to make the player not have health",
      "@param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoDidDamage] - Optional",
      "@param {boolean} [increaseMaxHealthIfNeeded] - Optional"
    ],
    "returns": "@returns {boolean} - Whether this change in health killed the player"
  },
  "applyMeleeHit": {
    "function": "applyMeleeHit(hittingEId, hitEId, dirFacing, bodyPartHit, overrides)",
    "usage": "Make it as if hittingEId hit hitEId",
    "params": [
      "@param {LifeformId} hittingEId",
      "@param {LifeformId} hitEId",
      "@param {number[]} dirFacing",
      "@param {PNull<LifeformBodyPart>} [bodyPartHit]",
      "@param { {"
    ],
    "returns": "@returns {boolean}"
  },
  "attemptApplyDamage": {
    "function": "attemptApplyDamage({\n    eId,\n    hitEId,\n    attemptedDmgAmt,\n    withItem,\n    bodyPartHit = undefined,\n    attackDir = undefined,\n    showCritParticles = false,\n    reduceVerticalKbVelocity = true,\n    horizontalKbMultiplier = 1,\n    verticalKbMultiplier = 1,\n    broadcastEntityHurt = true,\n    attackCooldownSettings = null,\n    hittingSoundOverride = null,\n    ignoreOtherEntitySettingCanAttack = false,\n    isTrueDamage = false,\n    damagerDbId = null,\n    })",
    "usage": "Apply damage to a lifeform.",
    "params": [
      "@param {PlayerAttemptDamageOtherPlayerOpts} {"
    ],
    "returns": "@returns {boolean} - whether the attack damaged the lifeform"
  },
  "forceRespawn": {
    "function": "forceRespawn(playerId, respawnPos)",
    "usage": "Force respawn a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} [respawnPos]"
    ],
    "returns": "@returns {void}"
  },
  "killLifeform": {
    "function": "killLifeform(lifeformId, whoKilled)",
    "usage": "Kill a lifeform.",
    "params": [
      "@param {LifeformId} lifeformId",
      "@param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional"
    ],
    "returns": "@returns {void}"
  },
  "getCurrentKillstreak": {
    "function": "getCurrentKillstreak(playerId)",
    "usage": "Gets the player's current killstreak",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {number}"
  },
  "clearKillstreak": {
    "function": "clearKillstreak(playerId)",
    "usage": "Clears the player's current killstreak",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {void}"
  },
  "isAlive": {
    "function": "isAlive(lifeformId)",
    "usage": "Whether a lifeform is alive or dead (or on the respawn screen, in a player's case).",
    "params": [
      "@param {LifeformId} lifeformId"
    ],
    "returns": "@returns {boolean}"
  },
  "broadcastMessage": {
    "function": "broadcastMessage(message, style)",
    "usage": "Send a message to everyone",
    "params": [
      "@param {string | CustomTextStyling} message - The text contained within the message. Can use `Custom Text Styling`.",
      "@param { { fontWeight?: number | string; color?: string } } [style] - An optional style argument. Can contain values for fontWeight and color of the message."
    ],
    "returns": "@returns {void}"
  },
  "sendMessage": {
    "function": "sendMessage(playerId, message, style)",
    "usage": "Send a message to a specific player",
    "params": [
      "@param {PlayerId} playerId - Id of the player",
      "@param {string | CustomTextStyling} message - The text contained within the message. Can use `Custom Text Styling`.",
      "@param { { fontWeight?: number | string; color?: string } } [style] - An optional style argument. Can contain values for fontWeight and color of the message."
    ],
    "returns": "@returns {void}"
  },
  "sendFlyingMiddleMessage": {
    "function": "sendFlyingMiddleMessage(playerId, message, distanceFromAction)",
    "usage": "Send a flying middle message to a specific player",
    "params": [
      "@param {PlayerId} playerId - Id of the player",
      "@param {CustomTextStyling} message - The text contained within the message. Can use `Custom Text Styling`.",
      "@param {number} distanceFromAction - The distance from the action that has caused this message to be displayed,"
    ],
    "returns": "@returns {void}"
  },
  "setClientOption": {
    "function": "setClientOption(playerId, option, value)",
    "usage": "Modify a client option at runtime and send to the client if it changed",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PassedOption} option - The name of the option",
      "@param {ClientOptions[PassedOption]} value - The new value of the option"
    ],
    "returns": "@returns {void}"
  },
  "getClientOption": {
    "function": "getClientOption(playerId, option)",
    "usage": "Returns the current value of a client option",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PassedOption} option"
    ],
    "returns": "@returns {ClientOptions[PassedOption]}"
  },
  "setClientOptions": {
    "function": "setClientOptions(playerId, optionsObj)",
    "usage": "Modify client options at runtime",
    "params": [
      "@param {PlayerId} playerId",
      "@param {Partial<ClientOptions>} optionsObj - An object which contains key value pairs of new settings. E.g {canChange: true, speedMultiplier: false}"
    ],
    "returns": "@returns {void}"
  },
  "setClientOptionToDefault": {
    "function": "setClientOptionToDefault(playerId, option)",
    "usage": "Sets a client option to its default value. This will be the value stored in your game's defaultClientOptions, otherwise Bloxd's default.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {ClientOption} option"
    ],
    "returns": "@returns {void}"
  },
  "setTargetedPlayerSettingForEveryone": {
    "function": "setTargetedPlayerSettingForEveryone(targetedPlayerId, settingName, settingValue, includeNewJoiners)",
    "usage": "Set every player's other-entity setting to a specific value for a particular player.",
    "params": [
      "@param {PlayerId} targetedPlayerId",
      "@param {Setting} settingName",
      "@param {OtherEntitySettings[Setting]} settingValue",
      "@param {boolean} [includeNewJoiners]"
    ],
    "returns": "@returns {void}"
  },
  "setEveryoneSettingForPlayer": {
    "function": "setEveryoneSettingForPlayer(playerId, settingName, settingValue, includeNewJoiners)",
    "usage": "Set a player's other-entity setting for every lifeform in the game.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {Setting} settingName",
      "@param {OtherEntitySettings[Setting]} settingValue",
      "@param {boolean} [includeNewJoiners]"
    ],
    "returns": "@returns {void}"
  },
  "setOtherEntitySetting": {
    "function": "setOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName, settingValue)",
    "usage": "Set a player's other-entity setting for a specific entity.",
    "params": [
      "@param {PlayerId} relevantPlayerId",
      "@param {EntityId} targetedEntityId",
      "@param {Setting} settingName",
      "@param {OtherEntitySettings[Setting]} settingValue"
    ],
    "returns": "@returns {void}"
  },
  "setOtherEntitySettings": {
    "function": "setOtherEntitySettings(relevantPlayerId, targetedEntityId, settingsObject)",
    "usage": "Set many of a player's other-entity settings for a specific entity.",
    "params": [
      "@param {PlayerId} relevantPlayerId",
      "@param {EntityId} targetedEntityId",
      "@param {Partial<OtherEntitySettings>} settingsObject"
    ],
    "returns": "@returns {void}"
  },
  "getOtherEntitySetting": {
    "function": "getOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName)",
    "usage": "Get the value of a player's other-entity setting for a specific entity.",
    "params": [
      "@param {PlayerId} relevantPlayerId",
      "@param {EntityId} targetedEntityId",
      "@param {Setting} settingName"
    ],
    "returns": "@returns {OtherEntitySettings[Setting]}"
  },
  "playParticleEffect": {
    "function": "playParticleEffect(opts, clientPredictedBy)",
    "usage": "Play particle effect on all clients, or only on some clients if clientPredictedBy is specified",
    "params": [
      "@param {TempParticleSystemOpts} opts",
      "@param {PlayerId} [clientPredictedBy] - Play only on clients where client with playerId clientPredictedBy"
    ],
    "returns": "@returns {void}"
  },
  "getEntityName": {
    "function": "getEntityName(entityId)",
    "usage": "Get the in game name of an entity.",
    "params": [
      "@param {EntityId} entityId"
    ],
    "returns": "@returns {string}"
  },
  "getPlayerId": {
    "function": "getPlayerId(playerName)",
    "usage": "Given the name of a player, get their id",
    "params": [
      "@param {string} playerName"
    ],
    "returns": "@returns {PNull<PlayerId>}"
  },
  "getPlayerDbId": {
    "function": "getPlayerDbId(playerId)",
    "usage": "Given a player, get their permanent identifier that doesn't change when leaving and re-entering",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {PlayerDbId}"
  },
  "getPlayerIdFromDbId": {
    "function": "getPlayerIdFromDbId(dbId)",
    "usage": "Returns null if player not in lobby",
    "params": [
      "@param {PlayerDbId} dbId"
    ],
    "returns": "@returns {PNull<PlayerId>}"
  },
  "kickPlayer": {
    "function": "kickPlayer(playerId, reason)",
    "usage": "",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} reason"
    ],
    "returns": "@returns {void}"
  },
  "isBlockInLoadedChunk": {
    "function": "isBlockInLoadedChunk(x, y, z)",
    "usage": "Check if the block at a specific position is in a loaded chunk.",
    "params": [
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {boolean} - boolean"
  },
  "getBlock": {
    "function": "getBlock(x, y, z)",
    "usage": "Get the name of a block.",
    "params": [
      "@param {number | number[]} x - could be an array [x, y, z]. If so, the other params shouldn't be passed.",
      "@param {number} [y]",
      "@param {number} [z]"
    ],
    "returns": "@returns {BlockName} - blockName - will be a name contained in blockMetadata.ts or 'Air'"
  },
  "getBlockId": {
    "function": "getBlockId(x, y, z)",
    "usage": "Used to get the block id at a specific position.",
    "params": [
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {BlockId}"
  },
  "setBlock": {
    "function": "setBlock(x, y, z, blockName)",
    "usage": "Set a block. Valid names are those either contained in blockMetadata.ts or are 'Air'",
    "params": [
      "@param {number | number[]} x - Can be an array",
      "@param {number | BlockName} y - Should be blockname if first param is array",
      "@param {number} [z]",
      "@param {BlockName} [blockName]"
    ],
    "returns": "@returns {void}"
  },
  "attemptWorldChangeBlock": {
    "function": "attemptWorldChangeBlock(initiatorDbId, x, y, z, blockName, extraInfo)",
    "usage": "Initiate a block change \"by the world\".",
    "params": [
      "@param {PNull<PlayerDbId>} initiatorDbId",
      "@param {number} x",
      "@param {number} y",
      "@param {number} z",
      "@param {BlockName} blockName",
      "@param {WorldBlockChangedInfo} [extraInfo]"
    ],
    "returns": "@returns {\"preventChange\" | \"preventDrop\" | void} - \"preventChange\" if the change was prevented, \"preventDrop\" if the change was allowed but without dropping any items, and undefined if the change was allowed with an item drop"
  },
  "getBlockSolidity": {
    "function": "getBlockSolidity(x, y, z)",
    "usage": "Returns whether a block is solid or not.",
    "params": [
      "@param {number | number[]} x",
      "@param {number} [y]",
      "@param {number} [z]"
    ],
    "returns": "@returns {boolean}"
  },
  "setBlockRect": {
    "function": "setBlockRect(pos1, pos2, blockName)",
    "usage": "Helper function that sets all blocks in a rectangle to a specific block.",
    "params": [
      "@param {number[]} pos1 - array [x, y, z]",
      "@param {number[]} pos2 - array [x, y, z]",
      "@param {BlockName} blockName"
    ],
    "returns": "@returns {void}"
  },
  "setBlockWalls": {
    "function": "setBlockWalls(pos1, pos2, blockName, hasFloor, hasCeiling)",
    "usage": "Create walls by providing two opposite corners of the cuboid",
    "params": [
      "@param {number[]} pos1 - array [x, y, z]",
      "@param {number[]} pos2 - array [x, y, z]",
      "@param {BlockName} blockName",
      "@param {boolean} [hasFloor]",
      "@param {boolean} [hasCeiling]"
    ],
    "returns": "@returns {void}"
  },
  "getChunk": {
    "function": "getChunk(pos)",
    "usage": "Only use this instead of getBlock if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)",
    "params": [
      "@param {number[]} pos - The returned chunk contains pos"
    ],
    "returns": "@returns {PNull<GameChunk>} - null if the chunk is not loaded in a persisted world. ReturnedObject.blockData is an ndarray that can be accessed"
  },
  "getEmptyChunk": {
    "function": "getEmptyChunk()",
    "usage": "Only use chunk helpers if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)",
    "params": [],
    "returns": "@returns {GameChunk}"
  },
  "getMetaInfo": {
    "function": "getMetaInfo(blockName)",
    "usage": "Splits the block name by '|'. If no meta info, metaInfo is ''",
    "params": [
      "@param {BlockName | null | undefined} blockName"
    ],
    "returns": "@returns {ItemMetaInfo}"
  },
  "blockNameToBlockId": {
    "function": "blockNameToBlockId(blockName, allowInvalidBlock)",
    "usage": "Get the numeric id of a block used in the ndarrays returned from getChunk",
    "params": [
      "@param {BlockName} blockName",
      "@param {boolean} [allowInvalidBlock] - Don't throw an error if the block name is invalid."
    ],
    "returns": "@returns {PNull<number>}"
  },
  "blockIdToBlockName": {
    "function": "blockIdToBlockName(blockId)",
    "usage": "Goes from block id to block name. The reverse of blockNameToBlockId",
    "params": [
      "@param {BlockId} blockId"
    ],
    "returns": "@returns {BlockName}"
  },
  "blockCoordToChunkId": {
    "function": "blockCoordToChunkId(pos)",
    "usage": "Get the unique id of the chunk containing pos in the current map",
    "params": [
      "@param {number[]} pos"
    ],
    "returns": "@returns {string}"
  },
  "chunkIdToBotLeftCoord": {
    "function": "chunkIdToBotLeftCoord(chunkId)",
    "usage": "Get the co-ordinates of the block in the chunk with the lowest x, y, and z co-ordinates",
    "params": [
      "@param {string} chunkId"
    ],
    "returns": "@returns {[number, number, number]}"
  },
  "sendTopRightHelper": {
    "function": "sendTopRightHelper(playerId, icon, text, opts)",
    "usage": "(this UI element hasn't been properly thought through in combination with other elements like killfeed, uirequests, etc)",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} icon - Can be any icon from font-awesome.",
      "@param {string} text - The text to send.",
      "@param { {"
    ],
    "returns": "@returns {void}"
  },
  "isMobile": {
    "function": "isMobile(playerId)",
    "usage": "Whether the player is on a mobile device or a computer.",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {boolean}"
  },
  "createItemDrop": {
    "function": "createItemDrop(x, y, z, itemName, amount, mergeItems, attributes, timeTillDespawn, dropperId)",
    "usage": "Create a dropped item.",
    "params": [
      "@param {number} x",
      "@param {number} y",
      "@param {number} z",
      "@param {string} itemName - Name of the item. Valid names can be found in blockMetadata.ts and itemMetadata.ts",
      "@param {PNull<number>} [amount] - The amount of the item to include in the drop - so when the player picks up the item drop, they get this many of the item.",
      "@param {boolean} [mergeItems] - Whether to merge the item into a nearby item of same type, if one exists. Defaults to false.",
      "@param {ItemAttributes} [attributes] - Attributes of the item being dropped",
      "@param {number} [timeTillDespawn] - Time till the item automatically despawns in milliseconds. Max of 5 mins.",
      "@param {PNull<LifeformId>} [dropperId] - Who dropped the item."
    ],
    "returns": "@returns {PNull<EntityId>} - the id you can pass to setCantPickUpItem, or null if the item drop limit was reached"
  },
  "setCantPickUpItem": {
    "function": "setCantPickUpItem(playerId, itemId)",
    "usage": "Prevent a player from picking up an item. itemId returned by createItemDrop",
    "params": [
      "@param {PlayerId} playerId",
      "@param {EntityId} itemId"
    ],
    "returns": "@returns {void}"
  },
  "deleteItemDrop": {
    "function": "deleteItemDrop(itemId)",
    "usage": "Delete an item drop by item drop entity ID",
    "params": [
      "@param {EntityId} itemId"
    ],
    "returns": "@returns {void}"
  },
  "getInitialItemMetadata": {
    "function": "getInitialItemMetadata(itemName)",
    "usage": "Get the metadata about a block or item before stats have been modified by any client options",
    "params": [
      "@param {string} itemName"
    ],
    "returns": "@returns {Partial<BlockMetadataItem & NonBlockMetadataItem>}"
  },
  "getItemStat": {
    "function": "getItemStat(lifeformId, itemName, stat)",
    "usage": "Get stat info about a block or item",
    "params": [
      "@param {PNull<LifeformId>} lifeformId",
      "@param {string} itemName",
      "@param {K} stat"
    ],
    "returns": "@returns {AnyMetadataItem[K]}"
  },
  "setCameraDirection": {
    "function": "setCameraDirection(playerId, direction)",
    "usage": "Set the direction the player is looking.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} direction - a vector of the direction to look, format [x, y, z]"
    ],
    "returns": "@returns {void}"
  },
  "setPlayerOpacity": {
    "function": "setPlayerOpacity(playerId, opacity)",
    "usage": "Set a player's opacity",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} opacity"
    ],
    "returns": "@returns {void}"
  },
  "setPlayerOpacityForOnePlayer": {
    "function": "setPlayerOpacityForOnePlayer(playerIdWhoViewsOpacityPlayer, playerIdOfOpacityPlayer, opacity)",
    "usage": "Set the level of viewable opacity by one player on another player",
    "params": [
      "@param {PlayerId} playerIdWhoViewsOpacityPlayer - The player who sees that with opacity",
      "@param {PlayerId} playerIdOfOpacityPlayer - The player/player model who is given opacity",
      "@param {number} opacity"
    ],
    "returns": "@returns {void}"
  },
  "now": {
    "function": "now()",
    "usage": "Obtain Date.now() value saved at start of current game tick",
    "params": [],
    "returns": "@returns {number}"
  },
  "checkValid": {
    "function": "checkValid(entityId)",
    "usage": "Check your game (and, optionally, a entity) is still valid and executing.",
    "params": [
      "@param {PNull<EntityId>} [entityId]"
    ],
    "returns": "@returns {boolean}"
  },
  "setCanChangeBlock": {
    "function": "setCanChangeBlock(playerId, x, y, z)",
    "usage": "Let a player change a block at a specific co-ordinate. Useful when client option canChange is false.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {void}"
  },
  "setCantChangeBlock": {
    "function": "setCantChangeBlock(playerId, x, y, z)",
    "usage": "Prevents a player from changing a block at a specific co-ordinate. Useful when client option canChange is true.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {void}"
  },
  "setCanChangeBlockType": {
    "function": "setCanChangeBlockType(playerId, blockName)",
    "usage": "Lets a player Change a block type. Valid names are those contained within blockMetadata.ts and 'Air'",
    "params": [
      "@param {PlayerId} playerId",
      "@param {BlockName} blockName"
    ],
    "returns": "@returns {void}"
  },
  "setCantChangeBlockType": {
    "function": "setCantChangeBlockType(playerId, blockName)",
    "usage": "Stops a player from Changeing a block type. Valid names are those contained within blockMetadata.ts and 'Air'",
    "params": [
      "@param {PlayerId} playerId",
      "@param {BlockName} blockName"
    ],
    "returns": "@returns {void}"
  },
  "resetCanChangeBlockType": {
    "function": "resetCanChangeBlockType(playerId, blockName)",
    "usage": "Remove any previous can/cant change block type settings for a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {BlockName} blockName"
    ],
    "returns": "@returns {void}"
  },
  "setCanChangeBlockRect": {
    "function": "setCanChangeBlockRect(playerId, pos1, pos2)",
    "usage": "Make it so a player can Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} pos1 - Arg as [x, y, z]",
      "@param {number[]} pos2 - Arg as [x, y, z]"
    ],
    "returns": "@returns {void}"
  },
  "setCantChangeBlockRect": {
    "function": "setCantChangeBlockRect(playerId, pos1, pos2)",
    "usage": "Make it so a player cant Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} pos1 - Arg as [x, y, z]",
      "@param {number[]} pos2 - Arg as [x, y, z]"
    ],
    "returns": "@returns {void}"
  },
  "resetCanChangeBlockRect": {
    "function": "resetCanChangeBlockRect(playerId, pos1, pos2)",
    "usage": "Remove any previous can/cant change block rect settings for a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} pos1",
      "@param {number[]} pos2"
    ],
    "returns": "@returns {void}"
  },
  "setWalkThroughType": {
    "function": "setWalkThroughType(playerId, blockName, disable)",
    "usage": "Allow a player to walk through a type of block. For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {BlockName} blockName",
      "@param {boolean} [disable] - If you've enabled a player to walk through a block and want to make the block solid for them again, pass this with true. Otherwise you only need to pass playerId and blockName"
    ],
    "returns": "@returns {void}"
  },
  "setWalkThroughRect": {
    "function": "setWalkThroughRect(playerId, pos1, pos2, updateType)",
    "usage": "Allow a player to walk through (or not walk through) voxels that are located within a given rectangle.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number[]} pos1 - The one corner of the cuboid. Format [x, y, z]",
      "@param {number[]} pos2 - The top right corner of the cuboid. Format [x, y, z]",
      "@param {WalkThroughType} updateType - The type of update. Whether to make a rect solid, or able to be walked through."
    ],
    "returns": "@returns {void}"
  },
  "giveItem": {
    "function": "giveItem(playerId, itemName, itemAmount, attributes)",
    "usage": "Give a player an item and a certain amount of that item.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} itemName",
      "@param {number} [itemAmount]",
      "@param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has."
    ],
    "returns": "@returns {number}"
  },
  "inventoryIsFull": {
    "function": "inventoryIsFull(playerId)",
    "usage": "Whether the player has space in their inventory to get new blocks",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {boolean}"
  },
  "setItemSlot": {
    "function": "setItemSlot(playerId, itemSlotIndex, itemName, itemAmount, attributes, tellClient)",
    "usage": "Put an item in a specific index. Default hotbar is indexes 0-9",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} itemSlotIndex - 0-indexed",
      "@param {string} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.",
      "@param {PNull<number>} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.",
      "@param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.",
      "@param {boolean} [tellClient] - whether to tell client about it - results in desync between client and server if client doesnt locally perform the same action"
    ],
    "returns": "@returns {void}"
  },
  "removeItemName": {
    "function": "removeItemName(playerId, itemName, amount)",
    "usage": "Remove an amount of item from a player's inventory",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} itemName",
      "@param {number} amount"
    ],
    "returns": "@returns {void}"
  },
  "getItemSlot": {
    "function": "getItemSlot(playerId, itemSlotIndex)",
    "usage": "Get the item at a specific index",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} itemSlotIndex"
    ],
    "returns": "@returns {PNull<InvenItem>}"
  },
  "hasItem": {
    "function": "hasItem(playerId, itemName)",
    "usage": "Whether a player has an item",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} itemName"
    ],
    "returns": "@returns {boolean} - bool"
  },
  "getInventoryItemAmount": {
    "function": "getInventoryItemAmount(playerId, itemName)",
    "usage": "The amount of an itemName a player has.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string} itemName"
    ],
    "returns": "@returns {number} - number"
  },
  "clearInventory": {
    "function": "clearInventory(playerId)",
    "usage": "Clear the players inventory",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {void}"
  },
  "setSelectedInventorySlotI": {
    "function": "setSelectedInventorySlotI(playerId, newI)",
    "usage": "Force the player to have the ith inventory slot selected. E.g. newI 0 makes the player have the 0th inventory slot selected",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} newI - integer from 0-9"
    ],
    "returns": "@returns {void}"
  },
  "getSelectedInventorySlotI": {
    "function": "getSelectedInventorySlotI(playerId)",
    "usage": "Get a player's currently selected inventory slot",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {number}"
  },
  "getHeldItem": {
    "function": "getHeldItem(playerId)",
    "usage": "Get the currently held item of a player",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {PNull<InvenItem>}"
  },
  "getInventoryFreeSlotCount": {
    "function": "getInventoryFreeSlotCount(playerId)",
    "usage": "Get the amount of free slots in a player's inventory.",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {number} - number"
  },
  "canOpenStandardChest": {
    "function": "canOpenStandardChest(playerId, chestX, chestY, chestZ)",
    "usage": "Checks if a player is able to open a chest at a given location,",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} chestX",
      "@param {number} chestY",
      "@param {number} chestZ"
    ],
    "returns": "@returns {PNull<boolean>}"
  },
  "giveStandardChestItem": {
    "function": "giveStandardChestItem(chestPos, itemName, itemAmount, playerId, attributes)",
    "usage": "Give a standard chest an item and a certain amount of that item.",
    "params": [
      "@param {number[]} chestPos",
      "@param {string} itemName",
      "@param {number} [itemAmount]",
      "@param {PlayerId} [playerId] - The player who is interacting with the chest.",
      "@param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has."
    ],
    "returns": "@returns {number}"
  },
  "getStandardChestFreeSlotCount": {
    "function": "getStandardChestFreeSlotCount(chestPos)",
    "usage": "Get the amount of free slots in a standard chest",
    "params": [
      "@param {number[]} chestPos"
    ],
    "returns": "@returns {PNull<number>} - number"
  },
  "getStandardChestItemAmount": {
    "function": "getStandardChestItemAmount(chestPos, itemName)",
    "usage": "The amount of an itemName a standard chest has.",
    "params": [
      "@param {number[]} chestPos",
      "@param {string} itemName"
    ],
    "returns": "@returns {number} - number"
  },
  "getStandardChestItemSlot": {
    "function": "getStandardChestItemSlot(chestPos, idx)",
    "usage": "Get the item at a chest slot. Null if empty otherwise format {name: itemName, amount: amountOfItem}",
    "params": [
      "@param {number[]} chestPos",
      "@param {number} idx"
    ],
    "returns": "@returns {PNull<InvenItem>}"
  },
  "getStandardChestItems": {
    "function": "getStandardChestItems(chestPos)",
    "usage": "Get all the items from a standard chest in order. Use this instead of repetitive calls to getStandardChestItemSlot",
    "params": [
      "@param {number[]} chestPos"
    ],
    "returns": "@returns {PNull<InvenItem>[]}"
  },
  "setStandardChestItemSlot": {
    "function": "setStandardChestItemSlot(chestPos, idx, itemName, itemAmount, playerId, attributes)",
    "usage": "",
    "params": [
      "@param {number[]} chestPos",
      "@param {number} idx - 0-indexed",
      "@param {string} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.",
      "@param {number} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.",
      "@param {PlayerId} [playerId] - The player who is interacting with the chest.",
      "@param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has."
    ],
    "returns": "@returns {void}"
  },
  "getMoonstoneChestItemSlot": {
    "function": "getMoonstoneChestItemSlot(playerId, idx)",
    "usage": "Get the item in a player's moonstone chest slot. Null if empty",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} idx"
    ],
    "returns": "@returns {PNull<InvenItem>}"
  },
  "getMoonstoneChestItems": {
    "function": "getMoonstoneChestItems(playerId)",
    "usage": "Get all the items from a moonstone chest in order. Use this instead of repetitive calls to getMoonstoneChestItemSlot",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {PNull<InvenItem>[]}"
  },
  "setMoonstoneChestItemSlot": {
    "function": "setMoonstoneChestItemSlot(playerId, idx, itemName, itemAmount, metadata)",
    "usage": "Moonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} idx - 0-indexed",
      "@param {string} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.",
      "@param {number} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.",
      "@param {ItemAttributes} [metadata] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has."
    ],
    "returns": "@returns {void}"
  },
  "setBlockData": {
    "function": "setBlockData(x, y, z, data)",
    "usage": "Store data about a block in a performant manner. Data is cleared when block changes.",
    "params": [
      "@param {number} x",
      "@param {number} y",
      "@param {number} z",
      "@param {object} data"
    ],
    "returns": "@returns {void}"
  },
  "getBlockData": {
    "function": "getBlockData(x, y, z)",
    "usage": "Get stored data about a block in a performant manner. Data is cleared when block changes.",
    "params": [
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {any}"
  },
  "getLobbyName": {
    "function": "getLobbyName()",
    "usage": "Get the name of the lobby this game is running in.",
    "params": [],
    "returns": "@returns {PNull<string>}"
  },
  "isPublicLobby": {
    "function": "isPublicLobby()",
    "usage": "Integer lobby names are public",
    "params": [],
    "returns": "@returns {boolean} - boolean"
  },
  "getLobbyType": {
    "function": "getLobbyType()",
    "usage": "Returns if the current lobby the game is running in is special - e.g. a discord guild or dm, or simply a standard lobby",
    "params": [],
    "returns": "@returns {LobbyType}"
  },
  "progressBarUpdate": {
    "function": "progressBarUpdate(playerId, toFraction, toDuration)",
    "usage": "Update the progress bar in the bottom right corner.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} toFraction - The fraction of the progress bar you want to be filled up.",
      "@param {number} [toDuration] - The time it takes for the bar to reach the given toFraction in ms."
    ],
    "returns": "@returns {void}"
  },
  "initiateMiddleScreenBar": {
    "function": "initiateMiddleScreenBar(playerId, duration, chargeExpiresAutomatically, horizontalBarRemOffset)",
    "usage": "This will initiate the MiddleScreenBar, starting at empty and filling up to full over the given duration.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} duration - ms over which the MiddleScreenBar fills up",
      "@param {boolean} [chargeExpiresAutomatically] - Defaults to true. If true, the bar will disappear upon reaching full. If false, the bar will remain at full until hidden with removeMiddleScreenBar",
      "@param {number} [horizontalBarRemOffset] - Offset the bar left or right (in css unit - rem)"
    ],
    "returns": "@returns {void}"
  },
  "removeMiddleScreenBar": {
    "function": "removeMiddleScreenBar(playerId)",
    "usage": "If there is any current middle screen bar running, this will hide it",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {void}"
  },
  "editItemCraftingRecipes": {
    "function": "editItemCraftingRecipes(playerId, itemName, recipesForItem)",
    "usage": "Edit the crafting recipes for a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {ItemName} itemName",
      "@param {RecipesForItem} recipesForItem"
    ],
    "returns": "@returns {void}"
  },
  "resetItemCraftingRecipes": {
    "function": "resetItemCraftingRecipes(playerId, itemName)",
    "usage": "Reset the crafting recipes for a given back to its original bloxd state",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PNull<string>} itemName - Resets all crafting recipes for the given player if null, otherwise resets the crafting recipes for the given item."
    ],
    "returns": "@returns {void}"
  },
  "removeItemCraftingRecipes": {
    "function": "removeItemCraftingRecipes(playerId, itemName)",
    "usage": "Removes crafting recipes",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PNull<string>} itemName - Removes all crafting recipes for the given player if null, otherwise removes the crafting recipes for the given item."
    ],
    "returns": "@returns {void}"
  },
  "isInsideRect": {
    "function": "isInsideRect(coordsToCheck, pos1, pos2, addOneToMax)",
    "usage": "Check if a position is within a cubic rectangle",
    "params": [
      "@param {number[]} coordsToCheck",
      "@param {number[]} pos1 - position of one corner",
      "@param {number[]} pos2 - position of opposite corner",
      "@param {boolean} [addOneToMax]"
    ],
    "returns": "@returns {boolean}"
  },
  "getEntitiesInRect": {
    "function": "getEntitiesInRect(minCoords, maxCoords)",
    "usage": "Get the entities in the rect between [minX, minY, minZ] and [maxX, maxY, maxZ]",
    "params": [
      "@param {number[]} minCoords",
      "@param {number[]} maxCoords"
    ],
    "returns": "@returns {EntityId[]}"
  },
  "getEntityType": {
    "function": "getEntityType(entityId)",
    "usage": "",
    "params": [
      "@param {EntityId} entityId"
    ],
    "returns": "@returns {EntityType}"
  },
  "createMobHerd": {
    "function": "createMobHerd()",
    "usage": "Create a mob herd. A mob herd represents a collection of mobs that move together.",
    "params": [],
    "returns": "@returns {MobHerdId}"
  },
  "attemptSpawnMob": {
    "function": "attemptSpawnMob(mobType, x, y, z, opts)",
    "usage": "Try to spawn a mob into the world at a given position. Returns null on failure.",
    "params": [
      "@param {TMobType} mobType",
      "@param {number} x",
      "@param {number} y",
      "@param {number} z",
      "@param {Partial<{"
    ],
    "returns": "@returns {PNull<MobId>} - null if the mob could not be spawned."
  },
  "despawnMob": {
    "function": "despawnMob(mobId)",
    "usage": "Dispose of a mob's state and remove them from the world without triggering \"on death\" flows.",
    "params": [
      "@param {MobId} mobId"
    ],
    "returns": "@returns {void}"
  },
  "getDefaultMobSetting": {
    "function": "getDefaultMobSetting(mobType, setting)",
    "usage": "Returns the current default value for a mob setting.",
    "params": [
      "@param {TMobType} mobType",
      "@param {TMobSetting} setting"
    ],
    "returns": "@returns {MobSettings<TMobType>[TMobSetting]}"
  },
  "setDefaultMobSetting": {
    "function": "setDefaultMobSetting(mobType, setting, value)",
    "usage": "Set the default value for a mob setting.",
    "params": [
      "@param {TMobType} mobType",
      "@param {TMobSetting} setting",
      "@param {MobSettings<TMobType>[TMobSetting]} value"
    ],
    "returns": "@returns {void}"
  },
  "getMobSetting": {
    "function": "getMobSetting(mobId, setting, returnDefaultIfNotOverriden)",
    "usage": "Get the current value of a mob setting for a specific mob.",
    "params": [
      "@param {MobId} mobId",
      "@param {TMobSetting} setting",
      "@param {boolean} [returnDefaultIfNotOverriden] - If true, return the default setting if not overridden."
    ],
    "returns": "@returns {MobSettings<MobType>[TMobSetting]}"
  },
  "setMobSetting": {
    "function": "setMobSetting(mobId, setting, value)",
    "usage": "Set the current value of a mob setting for a specific mob.",
    "params": [
      "@param {MobId} mobId",
      "@param {TMobSetting} setting",
      "@param {MobSettings<MobType>[TMobSetting]} value"
    ],
    "returns": "@returns {void}"
  },
  "getNumMobs": {
    "function": "getNumMobs()",
    "usage": "Get the number of mobs in the world.",
    "params": [],
    "returns": "@returns {number}"
  },
  "getMobIds": {
    "function": "getMobIds()",
    "usage": "Get the mob IDs of all mobs in the world.",
    "params": [],
    "returns": "@returns {MobId[]}"
  },
  "applyImpulse": {
    "function": "applyImpulse(eId, xImpulse, yImpulse, zImpulse)",
    "usage": "Apply an impulse to an entity",
    "params": [
      "@param {EntityId} eId",
      "@param {number} xImpulse",
      "@param {number} yImpulse",
      "@param {number} zImpulse"
    ],
    "returns": "@returns {void}"
  },
  "getVelocity": {
    "function": "getVelocity(eId)",
    "usage": "Get the velocity of an entity",
    "params": [
      "@param {EntityId} eId"
    ],
    "returns": "@returns {[number, number, number]}"
  },
  "setVelocity": {
    "function": "setVelocity(eId, x, y, z)",
    "usage": "Set the velocity of an entity",
    "params": [
      "@param {EntityId} eId",
      "@param {number} x",
      "@param {number} y",
      "@param {number} z"
    ],
    "returns": "@returns {void}"
  },
  "setEntityHeading": {
    "function": "setEntityHeading(entityId, newHeading)",
    "usage": "Set the heading for a server-auth entity.",
    "params": [
      "@param {EntityId} entityId",
      "@param {number} newHeading"
    ],
    "returns": "@returns {void}"
  },
  "setItemAmount": {
    "function": "setItemAmount(itemId, newAmount)",
    "usage": "Set the amount of an item in an item entity",
    "params": [
      "@param {EntityId} itemId",
      "@param {number} newAmount"
    ],
    "returns": "@returns {void}"
  },
  "setMaxPlayers": {
    "function": "setMaxPlayers(softMaxPlayers, maxPlayers)",
    "usage": "Update the max players and soft max players matchmaking will use",
    "params": [
      "@param {number} softMaxPlayers",
      "@param {number} maxPlayers"
    ],
    "returns": "@returns {void}"
  },
  "sendOverShopInfo": {
    "function": "sendOverShopInfo(playerId, info)",
    "usage": "Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {string | CustomTextStyling} info"
    ],
    "returns": "@returns {void}"
  },
  "openShop": {
    "function": "openShop(playerId, toggle, forceCategory)",
    "usage": "Open the shop UI for a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {boolean} [toggle] - Whether to close the shop if it's already open",
      "@param {string} [forceCategory] - If set, will change the shop to this category"
    ],
    "returns": "@returns {void}"
  },
  "applyEffect": {
    "function": "applyEffect(lifeformId, effectName, duration, customEffectInfo)",
    "usage": "Apply an effect to a lifeform.",
    "params": [
      "@param {LifeformId} lifeformId",
      "@param {string} effectName",
      "@param {number | null} duration",
      "@param { { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo> } customEffectInfo"
    ],
    "returns": "@returns {void}"
  },
  "getEffects": {
    "function": "getEffects(lifeformId)",
    "usage": "Get all the effects currently applied to a lifeform.",
    "params": [
      "@param {LifeformId} lifeformId"
    ],
    "returns": "@returns {string[]}"
  },
  "removeEffect": {
    "function": "removeEffect(lifeformId, name)",
    "usage": "Remove an effect from a lifeform.",
    "params": [
      "@param {LifeformId} lifeformId",
      "@param {string} name"
    ],
    "returns": "@returns {void}"
  },
  "changePlayerIntoSkin": {
    "function": "changePlayerIntoSkin(playerId, cosmeticType, cosmeticName)",
    "usage": "Change a part of a player's skin",
    "params": [
      "@param {PlayerId} playerId - Player to change",
      "@param {CosmeticType} cosmeticType - Type of cosmetic",
      "@param {CosmeticName} cosmeticName - Chosen cosmetic, will be made lowercase automatically"
    ],
    "returns": "@returns {void}"
  },
  "removeAppliedSkin": {
    "function": "removeAppliedSkin(playerId)",
    "usage": "Remove gamemode-applied skin from a player",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {void}"
  },
  "scalePlayerMeshNodes": {
    "function": "scalePlayerMeshNodes(playerId, nodeScales)",
    "usage": "Scale node of a player's mesh by 3d vector.",
    "params": [
      "@param {PlayerId} playerId",
      "@param {EntityMeshScalingMap} nodeScales"
    ],
    "returns": "@returns {void}"
  },
  "updateEntityNodeMeshAttachment": {
    "function": "updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation)",
    "usage": "Attach/detach mesh instances to/from an entity",
    "params": [
      "@param {EntityId} eId",
      "@param {EntityNamedNode} node - node to attach to",
      "@param {PNull<MeshType>} type - if null, detaches mesh from this node",
      "@param {MeshEntityOpts[MeshType]} [opts]",
      "@param {[number, number, number]} [offset]",
      "@param {[number, number, number]} [rotation]"
    ],
    "returns": "@returns {void}"
  },
  "setPlayerPose": {
    "function": "setPlayerPose(playerId, pose, poseOffset)",
    "usage": "Set the pose of the player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PlayerPose} pose",
      "@param {[number, number, number]} [poseOffset]"
    ],
    "returns": "@returns {void}"
  },
  "setPlayerPhysicsState": {
    "function": "setPlayerPhysicsState(playerId, physicsState)",
    "usage": "Set physics state of player (vehicle type and tier)",
    "params": [
      "@param {PlayerId} playerId",
      "@param {PlayerPhysicsStateData} physicsState"
    ],
    "returns": "@returns {void}"
  },
  "getPlayerPhysicsState": {
    "function": "getPlayerPhysicsState(playerId)",
    "usage": "Get physics state for player",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {PlayerPhysicsStateData}"
  },
  "addFollowingEntityToPlayer": {
    "function": "addFollowingEntityToPlayer(playerId, eId, offset, followsPlayerRotation)",
    "usage": "Add following entity to player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {EntityId} eId",
      "@param {number[]} [offset]",
      "@param {boolean} [followsPlayerRotation]"
    ],
    "returns": "@returns {void}"
  },
  "removeFollowingEntityFromPlayer": {
    "function": "removeFollowingEntityFromPlayer(playerId, entityEId)",
    "usage": "Remove following entity from player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {EntityId} entityEId"
    ],
    "returns": "@returns {void}"
  },
  "setCameraZoom": {
    "function": "setCameraZoom(playerId, zoom)",
    "usage": "Set camera zoom for a player",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} zoom"
    ],
    "returns": "@returns {void}"
  },
  "playSound": {
    "function": "playSound(playerId, soundName, volume, rate, posSettings)",
    "usage": "Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5.",
    "params": [
      "@param {PlayerId} playerId - hears the sound",
      "@param {string} soundName - Can also be a prefix. If so, a random sound with that prefix will be played",
      "@param {number} volume - 0-1. If it's too quiet and volume is 1, normalise your sound in audacity",
      "@param {number} rate - The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch",
      "@param { {"
    ],
    "returns": "@returns {void}"
  },
  "broadcastSound": {
    "function": "broadcastSound(soundName, volume, rate, posSettings, exceptPlayerId)",
    "usage": "See documentation for api.playSound",
    "params": [
      "@param {string} soundName",
      "@param {number} volume",
      "@param {number} rate",
      "@param { {",
      "@param {PlayerId} [exceptPlayerId]"
    ],
    "returns": "@returns {void}"
  },
  "playClientPredictedSound": {
    "function": "playClientPredictedSound(soundName, volume, rate, posSettings, predictedBy)",
    "usage": "See documentation for api.playSound",
    "params": [
      "@param {string} soundName",
      "@param {number} volume",
      "@param {number} rate",
      "@param { {",
      "@param {PlayerId} [predictedBy]"
    ],
    "returns": "@returns {void}"
  },
  "calcExplosionForce": {
    "function": "calcExplosionForce(eId, explosionType, knockbackFactor, explosionRadius, explosionPos, ignoreProjectiles)",
    "usage": "",
    "params": [
      "@param {EntityId} eId",
      "@param {ExplosionType} explosionType",
      "@param {number} knockbackFactor",
      "@param {number} explosionRadius",
      "@param {number[]} explosionPos",
      "@param {boolean} ignoreProjectiles"
    ],
    "returns": "@returns { { force: [number, number, number]; forceFrac: number; } }"
  },
  "getPlayerTargetInfo": {
    "function": "getPlayerTargetInfo(playerId)",
    "usage": "Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns { { position: [number, number, number]; normal: [number, number, number]; adjacent: [number, number, number] } }"
  },
  "getPlayerFacingInfo": {
    "function": "getPlayerFacingInfo(playerId)",
    "usage": "Get the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns { { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } }"
  },
  "raycastForBlock": {
    "function": "raycastForBlock(fromPos, dirVec)",
    "usage": "Raycast for a block in the world.",
    "params": [
      "@param {number[]} fromPos",
      "@param {number[]} dirVec"
    ],
    "returns": "@returns {BlockRaycastResult}"
  },
  "isPlayerCrouching": {
    "function": "isPlayerCrouching(playerId)",
    "usage": "Check whether a player is crouching",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns {boolean}"
  },
  "getAuraInfo": {
    "function": "getAuraInfo(playerId)",
    "usage": "Get the aura info for a player",
    "params": [
      "@param {PlayerId} playerId"
    ],
    "returns": "@returns { { level: number; totalAura: number; auraPerLevel: number } }"
  },
  "setTotalAura": {
    "function": "setTotalAura(playerId, totalAura)",
    "usage": "Sets the total aura for a player. Will not go over max level or under 0",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} totalAura"
    ],
    "returns": "@returns {void}"
  },
  "setAuraLevel": {
    "function": "setAuraLevel(playerId, level)",
    "usage": "Set the aura level for a player - shortcut for setTotalAura(level * auraPerLevel)",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} level"
    ],
    "returns": "@returns {void}"
  },
  "applyAuraChange": {
    "function": "applyAuraChange(playerId, auraDiff)",
    "usage": "Add (or remove if negative) aura to a player. Will not go over max level or under 0",
    "params": [
      "@param {PlayerId} playerId",
      "@param {number} auraDiff"
    ],
    "returns": "@returns {number} - The actual change in aura"
  },
  "setCallbackValueFallback": {
    "function": "setCallbackValueFallback(callbackName, defaultValue)",
    "usage": "Set a default value to be returned by your callback code if it throws an error.",
    "params": [
      "@param {string} callbackName",
      "@param {any} defaultValue"
    ]
  }
}