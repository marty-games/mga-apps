var devFlag = false;
var lastFindClosestCandidates = [];
var bloxdModelStarterVariable = "You are Jumbo Bloxd model, your name is Jumbo and your only purpose is to talk about the game bloxd.io and to help code in the ingame Code Blocks and World Code, in bloxd Code Blocks, the language is JavaScript, not lua or python you are not allowed to code in anything other than JavaScript. you cannot read variables defined in world code unless the variable is defined using var, Code Blocks let you use variables like thisPos which gives the coordinates of the Code Block executed as well as myId which returns the playerId of the user that activated the code block but in world code you get callbacks, these are special functions called when an action happens in the game, here are the functions, you must use exactly these functions and you cannot invent your own function name unless you define it: api.getPosition(entityId), api.setPosition(entityId, x, y, z), api.getPlayerIds(), api.playerIsInGame(playerId), api.playerIsLoggedIn(playerId), api.getPlayerPartyWhenJoined(playerId), api.getNumPlayers(), api.getBlockCoordinatesPlayerStandingOn(playerId), api.getBlockTypesPlayerStandingOn(playerId), api.getUnitCoordinatesLifeformWithin(lifeformId), api.showShopTutorial(playerId), api.getShieldAmount(entityId), api.setShieldAmount(lifeformId, newShieldAmount), api.getHealth(entityId), api.applyHealthChange(lifeformId, changeAmount, whoDidDamage, broadcastLifeformHurt), api.setHealth(entityId, newHealth, whoDidDamage, increaseMaxHealthIfNeeded), api.applyMeleeHit(hittingEId, hitEId, dirFacing, bodyPartHit, overrides), api.attemptApplyDamage({ eId, hitEId, attemptedDmgAmt, withItem, bodyPartHit = undefined, attackDir = undefined, showCritParticles = false, reduceVerticalKbVelocity = true, horizontalKbMultiplier = 1, verticalKbMultiplier = 1, broadcastEntityHurt = true, attackCooldownSettings = null, hittingSoundOverride = null, ignoreOtherEntitySettingCanAttack = false, isTrueDamage = false, damagerDbId = null, }), api.forceRespawn(playerId, respawnPos), api.killLifeform(lifeformId, whoKilled), api.getCurrentKillstreak(playerId), api.clearKillstreak(playerId), api.isAlive(lifeformId), api.broadcastMessage(message, style), api.sendMessage(playerId, message, style), api.sendFlyingMiddleMessage(playerId, message, distanceFromAction), api.setClientOption(playerId, option, value), api.getClientOption(playerId, option), api.setClientOptions(playerId, optionsObj), api.setClientOptionToDefault(playerId, option), api.setTargetedPlayerSettingForEveryone(targetedPlayerId, settingName, settingValue, includeNewJoiners), api.setEveryoneSettingForPlayer(playerId, settingName, settingValue, includeNewJoiners), api.setOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName, settingValue), api.setOtherEntitySettings(relevantPlayerId, targetedEntityId, settingsObject), api.getOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName), api.playParticleEffect(opts, clientPredictedBy), api.getEntityName(entityId), api.getPlayerId(playerName), api.getPlayerDbId(playerId), api.getPlayerIdFromDbId(dbId), api.kickPlayer(playerId, reason), api.isBlockInLoadedChunk(x, y, z), api.getBlock(x, y, z), api.getBlockId(x, y, z), api.setBlock(x, y, z, blockName), api.attemptWorldChangeBlock(initiatorDbId, x, y, z, blockName, extraInfo), api.getBlockSolidity(x, y, z), api.setBlockRect(pos1, pos2, blockName), api.setBlockWalls(pos1, pos2, blockName, hasFloor, hasCeiling), api.getChunk(pos), api.getEmptyChunk(), api.getMetaInfo(blockName), api.blockNameToBlockId(blockName, allowInvalidBlock), api.blockIdToBlockName(blockId), api.blockCoordToChunkId(pos), api.chunkIdToBotLeftCoord(chunkId), api.sendTopRightHelper(playerId, icon, text, opts), api.isMobile(playerId), api.createItemDrop(x, y, z, itemName, amount, mergeItems, attributes, timeTillDespawn, dropperId), api.setCantPickUpItem(playerId, itemId), api.deleteItemDrop(itemId), api.getInitialItemMetadata(itemName), api.getItemStat(lifeformId, itemName, stat), api.setCameraDirection(playerId, direction), api.setPlayerOpacity(playerId, opacity), api.setPlayerOpacityForOnePlayer(playerIdWhoViewsOpacityPlayer, playerIdOfOpacityPlayer, opacity), api.now(), api.checkValid(entityId), api.setCanChangeBlock(playerId, x, y, z), api.setCantChangeBlock(playerId, x, y, z), api.setCanChangeBlockType(playerId, blockName), api.setCantChangeBlockType(playerId, blockName), api.resetCanChangeBlockType(playerId, blockName), api.setCanChangeBlockRect(playerId, pos1, pos2), api.setCantChangeBlockRect(playerId, pos1, pos2), api.resetCanChangeBlockRect(playerId, pos1, pos2), api.setWalkThroughType(playerId, blockName, disable), api.setWalkThroughRect(playerId, pos1, pos2, updateType), api.giveItem(playerId, itemName, itemAmount, attributes), api.inventoryIsFull(playerId), api.setItemSlot(playerId, itemSlotIndex, itemName, itemAmount, attributes, tellClient), api.removeItemName(playerId, itemName, amount), api.getItemSlot(playerId, itemSlotIndex), api.hasItem(playerId, itemName), api.getInventoryItemAmount(playerId, itemName), api.clearInventory(playerId), api.setSelectedInventorySlotI(playerId, newI), api.getSelectedInventorySlotI(playerId), api.getHeldItem(playerId), api.getInventoryFreeSlotCount(playerId), api.canOpenStandardChest(playerId, chestX, chestY, chestZ), api.giveStandardChestItem(chestPos, itemName, itemAmount, playerId, attributes), api.getStandardChestFreeSlotCount(chestPos), api.getStandardChestItemAmount(chestPos, itemName), api.getStandardChestItemSlot(chestPos, idx), api.getStandardChestItems(chestPos), api.setStandardChestItemSlot(chestPos, idx, itemName, itemAmount, playerId, attributes), api.getMoonstoneChestItemSlot(playerId, idx), api.getMoonstoneChestItems(playerId), api.setMoonstoneChestItemSlot(playerId, idx, itemName, itemAmount, metadata), api.setBlockData(x, y, z, data), api.getBlockData(x, y, z), api.getLobbyName(), api.isPublicLobby(), api.getLobbyType(), api.progressBarUpdate(playerId, toFraction, toDuration), api.initiateMiddleScreenBar(playerId, duration, chargeExpiresAutomatically, horizontalBarRemOffset), api.removeMiddleScreenBar(playerId), api.editItemCraftingRecipes(playerId, itemName, recipesForItem), api.resetItemCraftingRecipes(playerId, itemName), api.removeItemCraftingRecipes(playerId, itemName), api.isInsideRect(coordsToCheck, pos1, pos2, addOneToMax), api.getEntitiesInRect(minCoords, maxCoords), api.getEntityType(entityId), api.createMobHerd(), api.attemptSpawnMob(mobType, x, y, z, opts), api.despawnMob(mobId), api.getDefaultMobSetting(mobType, setting), api.setDefaultMobSetting(mobType, setting, value), api.getMobSetting(mobId, setting, returnDefaultIfNotOverriden), api.setMobSetting(mobId, setting, value), api.getNumMobs(), api.getMobIds(), api.applyImpulse(eId, xImpulse, yImpulse, zImpulse), api.getVelocity(eId), api.setVelocity(eId, x, y, z), api.setEntityHeading(entityId, newHeading), api.setItemAmount(itemId, newAmount), api.setMaxPlayers(softMaxPlayers, maxPlayers), api.sendOverShopInfo(playerId, info), api.openShop(playerId, toggle, forceCategory), api.applyEffect(lifeformId, effectName, duration, customEffectInfo), api.getEffects(lifeformId), api.removeEffect(lifeformId, name), api.changePlayerIntoSkin(playerId, cosmeticType, cosmeticName), api.removeAppliedSkin(playerId), api.scalePlayerMeshNodes(playerId, nodeScales), api.updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation), api.setPlayerPose(playerId, pose, poseOffset), api.setPlayerPhysicsState(playerId, physicsState), api.getPlayerPhysicsState(playerId), api.addFollowingEntityToPlayer(playerId, eId, offset, followsPlayerRotation), api.removeFollowingEntityFromPlayer(playerId, entityEId), api.setCameraZoom(playerId, zoom), api.playSound(playerId, soundName, volume, rate, posSettings), api.broadcastSound(soundName, volume, rate, posSettings, exceptPlayerId), api.playClientPredictedSound(soundName, volume, rate, posSettings, predictedBy), api.calcExplosionForce(eId, explosionType, knockbackFactor, explosionRadius, explosionPos, ignoreProjectiles), api.getPlayerTargetInfo(playerId), api.getPlayerFacingInfo(playerId), api.raycastForBlock(fromPos, dirVec), api.isPlayerCrouching(playerId), api.getAuraInfo(playerId), api.setTotalAura(playerId, totalAura), api.setAuraLevel(playerId, level), api.applyAuraChange(playerId, auraDiff), api.setCallbackValueFallback(callbackName, defaultValue). here are world code callbacks, again you must use ONLY these and not create your own: tick = (ms) => {}, onClose = (serverIsShuttingDown) => {}, onPlayerJoin = (playerId, fromGameReset) => {}, onPlayerLeave = (playerId, serverIsShuttingDown) => {}, onPlayerJump = (playerId) => {}, onRespawnRequest = (playerId) => {}, onPlayerChangeBlock = (playerId, x, y, z, fromBlock, toBlock, droppedItem, fromBlockInfo, toBlockInfo) => {}, onPlayerDropItem = (playerId, x, y, z, itemName, itemAmount, fromIdx) => {}, onPlayerPickedUpItem = (playerId, itemName, itemAmount) => {}, onPlayerSelectInventorySlot = (playerId, slotIndex) => {}, onBlockStand = (playerId, x, y, z, blockName) => {}, onPlayerAttemptCraft = (playerId, itemName, craftingIdx, craftTimes) => {}, onPlayerCraft = (playerId, itemName, craftingIdx, recipe, craftTimes) => {}, onPlayerAttemptOpenChest = (playerId, x, y, z, isMoonstoneChest, isIronChest) => {}, onPlayerOpenedChest = (playerId, x, y, z, isMoonstoneChest, isIronChest) => {}, onPlayerMoveItemOutOfInventory = (playerId, itemName, itemAmount, fromIdx, movementType) => {}, onPlayerMoveInvenItem = (playerId, fromIdx, toStartIdx, toEndIdx, amt) => {}, onPlayerMoveItemIntoIdxs = (playerId, start, end, moveIdx, itemAmount) => {}, onPlayerSwapInvenSlots = (playerId, i, j) => {}, onPlayerMoveInvenItemWithAmt = (playerId, i, j, amt) => {}, onPlayerAttemptAltAction = (playerId, x, y, z, block, targetEId) => {}, onPlayerAltAction = (playerId, x, y, z, block, targetEId) => {}, onPlayerClick = (playerId, wasAltClick) => {}, onClientOptionUpdated = (playerId, option, value) => {}, onMobSettingUpdated = (mobId, setting, value) => {}, onInventoryUpdated = (playerId) => {}, onChestUpdated = (initiatorEId, isMoonstoneChest, x, y, z) => {}, onWorldChangeBlock = (x, y, z, fromBlock, toBlock, initiatorDbId, extraInfo) => {}, onCreateBloxdMeshEntity = (eId, type, initiatorId) => {}, onEntityCollision = (eId, otherEId) => {}, onPlayerAttemptSpawnMob = (playerId, mobType, x, y, z) => {}, onWorldAttemptSpawnMob = (mobType, x, y, z) => {}, onPlayerSpawnMob = (playerId, mobId, mobType, x, y, z, mobHerdId, playSoundOnSpawn) => {}, onWorldSpawnMob = (mobId, mobType, x, y, z, mobHerdId, playSoundOnSpawn) => {}, onWorldAttemptDespawnMob = (mobId) => {}, onMobDespawned = (mobId) => {}, onPlayerAttack = (playerId) => {}, onPlayerDamagingOtherPlayer = (attackingPlayer, damagedPlayer, damageDealt, withItem, bodyPartHit, damagerDbId) => {}, onPlayerDamagingMob = (playerId, mobId, damageDealt, withItem, damagerDbId) => {}, onMobDamagingPlayer = (attackingMob, damagedPlayer, damageDealt, withItem) => {}, onMobDamagingOtherMob = (attackingMob, damagedMob, damageDealt, withItem) => {}, onAttemptKillPlayer = (killedPlayer, attackingLifeform) => {}, onPlayerKilledOtherPlayer = (attackingPlayer, killedPlayer, damageDealt, withItem) => {}, onMobKilledPlayer = (attackingMob, killedPlayer, damageDealt, withItem) => {}, onPlayerKilledMob = (playerId, mobId, damageDealt, withItem) => {}, onMobKilledOtherMob = (attackingMob, killedMob, damageDealt, withItem) => {}, onPlayerPotionEffect = (initiatorId, targetId, effectName) => {}, onPlayerDamagingMeshEntity = (playerId, damagedId, damageDealt, withItem) => {}, onPlayerBreakMeshEntity = (playerId, entityId) => {}, onPlayerUsedThrowable = (playerId, throwableName, thrownEntityId) => {}, onPlayerThrowableHitTerrain = (playerId, throwableName, thrownEntityId) => {}, onTouchscreenActionButton = (playerId, touchDown) => {}, onTaskClaimed = (playerId, taskId, isPromoTask, claimedRewards) => {}, onChunkLoaded = (chunkId, chunk, wasPersistedChunk) => {}, onPlayerRequestChunk = (playerId, chunkX, chunkY, chunkZ, chunkId) => {}, onItemDropCreated = (itemEId, itemName, itemAmount, x, y, z) => {}, onPlayerStartChargingItem = (playerId, itemName) => {}, onPlayerFinishChargingItem = (playerId, used, itemName, duration) => {}, doPeriodicSave = () => {}.";
var bloxdModelBotMessageVariable = `Ok, I understand my role as Jumbo Bloxd model. I will only talk about the game bloxd.io and help code in the ingame Code Blocks and World Code using the available functions and callbacks you provided. I will also ask for Item names when I need one, I will not create my own item names and I will follow the correct syntax all the time. If I send code with item names I will ensure they are capitalized like "Item Name", also, when I call a function I will ensure it is what the user wants. lets do this!`;
var bloxdModelStarterVariable2 = "Now you need to know syntax of bloxd code. bloxd code is in JavaScript and callbacks are just functions that the game auto calls when said event happens, common errors you must avoid are: calling functions without api object attached, onTick instead of tick, using setTimeout or setInterval is wrong as they are not defined so you must use tick instead, inventing your own function names instead of using the provided ones, reading variables that are not defined using var in world code, not using the exact function signatures provided, inventing your own callbacks or functions, coding in any language other than JavaScript, using lua or python syntax, not asking for item names when needed, not capitalizing item names correctly like 'Item Name'. always follow the correct syntax and function signatures exactly as provided. these are not suggestions, they are required. you must not do them. understand?";
var bloxdModelBotMessageVariable2 = "Yes! I will follow the correct syntax for all following prompts!";
function computeAndSetLastFindClosestCandidates(input, dataset, limit = 6) {
  try {
    if (!input || !dataset) { lastFindClosestCandidates = []; return lastFindClosestCandidates; }
    const q = String(input || '').toLowerCase().trim();
    const entries = Object.keys(dataset || {}).filter(k => k && !isBlocked(k)).map(k => ({ key: k, score: smartStringSimilarity(q, k.toLowerCase()) }));
    entries.sort((a,b) => a.score - b.score);
    lastFindClosestCandidates = entries.slice(0, limit).map(e => ({ key: e.key, score: Number((e.score).toFixed(3)) }));
    return lastFindClosestCandidates;
  } catch (e) { lastFindClosestCandidates = []; return lastFindClosestCandidates; }
}
try { window.__jumboReady = true; } catch (e) {}
const aiTraits = (function generateTraits() {
  const tones = ['angry', 'happy', 'curious'];
  const dominantIndex = Math.floor(Math.random() * tones.length);
  const normalized = {};
  for (let i = 0; i < tones.length; i++) {
    normalized[tones[i]] = (i === dominantIndex) ? 0.8 : 0.1;
  }
  const sum = Object.values(normalized).reduce((a,b) => a + b, 0);
  if (sum !== 1) {
    for (const k of Object.keys(normalized)) normalized[k] = +(normalized[k] / sum).toFixed(3);
  }
  try {
    const pct = Object.entries(normalized).map(([k,v]) => `${k}: ${(v*100).toFixed(1)}%`).join(', ');
    console.log(`AI traits: ${pct}`);
  } catch (e) {}
  try { window.aiTraits = normalized; } catch (e) {}
  return normalized;
})();
function showConfirm(message, opts = {}) {
  return new Promise(resolve => {
    let old = document.getElementById('customConfirmOverlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'customConfirmOverlay';
    overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;';
    const isLight = document.body.classList.contains('light');
    const box = document.createElement('div');
    box.style = `background:${isLight ? '#fff' : '#23272f'};color:${isLight ? '#222' : '#f3f3f3'};padding:2em 1.5em;border-radius:14px;max-width:95vw;width:350px;box-shadow:0 8px 32px #0003;text-align:center;`;
    box.innerHTML = `<div style='font-size:1.2em;margin-bottom:1em;'>${message}</div>`;
    const btns = document.createElement('div');
    btns.style = 'margin-top:1.5em;display:flex;gap:1em;justify-content:center;';
    const yesBtn = document.createElement('button');
    yesBtn.textContent = opts.yesText || 'Yes';
    yesBtn.style = `background:${isLight ? '#10a37f' : '#10a37f'};color:#fff;border:none;padding:7px 18px;border-radius:8px;cursor:pointer;`;
    yesBtn.onclick = () => { overlay.remove(); resolve(true); };
    const noBtn = document.createElement('button');
    noBtn.textContent = opts.noText || 'No';
    noBtn.style = `background:${isLight ? '#888' : '#444'};color:#fff;border:none;padding:7px 18px;border-radius:8px;cursor:pointer;`;
    noBtn.onclick = () => { overlay.remove(); resolve(false); };
    btns.appendChild(yesBtn);
    btns.appendChild(noBtn);
    box.appendChild(btns);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  });
}
function showPopup(message, opts = {}) {
  let old = document.getElementById('customPopupOverlay');
  if (old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'customPopupOverlay';
  overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;';
  const isLight = document.body.classList.contains('light');
  const box = document.createElement('div');
  box.style = `background:${isLight ? '#fff' : '#23272f'};color:${isLight ? '#222' : '#f3f3f3'};padding:2em 1.5em;border-radius:14px;max-width:95vw;width:350px;box-shadow:0 8px 32px #0003;text-align:center;`;
  box.innerHTML = `<div style='font-size:1.2em;margin-bottom:1em;'>${message}</div>`;
  const closeBtn = document.createElement('button');
  closeBtn.textContent = opts.buttonText || 'OK';
  closeBtn.style = `margin-top:1em;background:${isLight ? '#10a37f' : '#10a37f'};color:#fff;border:none;padding:7px 18px;border-radius:8px;cursor:pointer;`;
  closeBtn.onclick = () => overlay.remove();
  box.appendChild(closeBtn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
function showUpdatePopup(opts = {}) {
  try {
    let old = document.getElementById('updatePopupOverlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'updatePopupOverlay';
    overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;';
    const isLight = document.body.classList.contains('light');
    const box = document.createElement('div');
    box.style = `background:${isLight ? '#fff' : '#23272f'};color:${isLight ? '#222' : '#f3f3f3'};padding:0;border-radius:12px;max-width:95vw;width:520px;box-shadow:0 8px 32px #0003;text-align:left;overflow:hidden;`;
    const img = document.createElement('img');
    img.src = 'updateBanners/languages.png';
    img.alt = 'Update';
    img.style = 'width:100%;display:block;object-fit:cover;max-height:200px;';
    box.appendChild(img);
    const inner = document.createElement('div');
    inner.style = 'padding:16px;display:flex;flex-direction:column;gap:10px;';
    const title = document.createElement('div');
    title.style = 'font-weight:700;font-size:1.05rem;';
    title.textContent = 'New: Choose your language & Summarize text';
    inner.appendChild(title);
    const desc = document.createElement('div');
    desc.style = 'color:var(--muted);font-size:0.95rem;';
    desc.innerHTML = `You can now choose the language you speak and Jumbo can summarize text when you prefix your message with <code>summarize: [text]</code>.`;
    inner.appendChild(desc);
    const langWrap = document.createElement('div');
    langWrap.style = 'display:flex;flex-direction:column;gap:6px;';
    const langLabel = document.createElement('div'); langLabel.style = 'font-weight:600;'; langLabel.textContent = 'Language';
    const langSelect = document.createElement('select'); langSelect.id = 'userLanguageSelectUpdate';
    langSelect.style = 'padding:8px 10px;border-radius:8px;border:1px solid var(--border);background:var(--elev);color:var(--text);';
    try {
      if (typeof availableLanguages === 'object' && availableLanguages) {
        const entries = Object.entries(availableLanguages);
        for (const [name, code] of entries) {
          const opt = document.createElement('option'); opt.value = String(code); opt.textContent = name;
          langSelect.appendChild(opt);
        }
      } else {
        const fallback = {'English':'eng_Latn','Spanish':'spa_Latn','French':'fra_Latn'};
        for (const [n,c] of Object.entries(fallback)) { const opt=document.createElement('option');opt.value=c;opt.textContent=n;langSelect.appendChild(opt); }
      }
    } catch (e) {}
    const savedLang = localStorage.getItem('user_lang') || 'eng_Latn';
    try { langSelect.value = savedLang; } catch (e) {}
    langSelect.addEventListener('change', async (e) => {
      const v = e.target.value; try { localStorage.setItem('user_lang', String(v)); } catch (ee) {}
      try { if (typeof translateAssistantMessagesForConv === 'function') await translateAssistantMessagesForConv(currentConv()); } catch (er) {}
    });
    langWrap.appendChild(langLabel);
    langWrap.appendChild(langSelect);
    inner.appendChild(langWrap);
    const controls = document.createElement('div');
    controls.style = 'display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;';
    const leftCol = document.createElement('div'); leftCol.style = 'display:flex;align-items:center;gap:8px;';
    const dontShow = document.createElement('input'); dontShow.type = 'checkbox'; dontShow.id = 'dontShowUpdateAgain';
    const dontLabel = document.createElement('label'); dontLabel.htmlFor = 'dontShowUpdateAgain'; dontLabel.style = 'font-size:0.9rem;color:var(--muted);'; dontLabel.textContent = "Don't show again";
    leftCol.appendChild(dontShow); leftCol.appendChild(dontLabel);
    const btns = document.createElement('div'); btns.style = 'display:flex;gap:8px;';
    const saveBtn = document.createElement('button'); saveBtn.textContent = 'Save';
    saveBtn.style = 'background:#10a37f;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;';
    saveBtn.onclick = () => { try { const sel = langSelect.value; if (sel) localStorage.setItem('user_lang', String(sel)); if (dontShow.checked) localStorage.setItem('shown_update_languages_v1','1'); } catch (e) {} overlay.remove(); };
    const closeBtn = document.createElement('button'); closeBtn.textContent = 'Close'; closeBtn.style = 'background:transparent;color:var(--muted);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;'; closeBtn.onclick = () => { if (dontShow.checked) try { localStorage.setItem('shown_update_languages_v1','1'); } catch(e) {} overlay.remove(); };
    btns.appendChild(saveBtn); btns.appendChild(closeBtn);
    controls.appendChild(leftCol);
    controls.appendChild(btns);
    inner.appendChild(controls);
    box.appendChild(inner);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  } catch (e) { console.error('showUpdatePopup failed', e); }
}
function showUpdatePopupIfNeeded() {
  try {
    const shown = localStorage.getItem('shown_update_languages_v1');
    if (shown === '1') return;
    setTimeout(() => { showUpdatePopup(); }, 600);
  } catch (e) {}
}
window.addEventListener('DOMContentLoaded', showUpdatePopupIfNeeded);
function getLocalStorageSizeBytes() {
  let total = 0;
    for (const key of Object.keys(localStorage)) {
      const value = localStorage.getItem(key);
      total += key.length + (value ? value.length : 0);
    }
  return total;
}
function showStorageWarningPopup() {
  let old = document.getElementById('storageWarningPopup');
  if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'storageWarningPopup';
    overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;';
    const isLight = document.body.classList.contains('light');
    const box = document.createElement('div');
    box.style = `background:${isLight ? '#fff' : '#23272f'};color:${isLight ? '#222' : '#f3f3f3'};padding:2em;border-radius:14px;max-width:95vw;width:400px;box-shadow:0 8px 32px #0003;text-align:center;`;
    box.innerHTML = `<h2>Warning!</h2><p>Your browser will restrict storage at 5 MB.<br>You are currently at ${Math.round(getLocalStorageSizeBytes() / 1024 / 1024)} MB.<br>Here are some chats taking up storage you can delete:</p>`;
  const chats = JSON.parse(localStorage.getItem('conversations_v1') || '[]');
  const list = document.createElement('ul');
  list.style = 'text-align:left;max-height:200px;overflow:auto;margin:1em 0;padding:0 0 0 1em;';
  chats.forEach(c => {
    const li = document.createElement('li');
    li.style = 'margin-bottom:0.5em;';
    li.textContent = (c.title || 'Untitled') + (c.messages && c.messages.length ? ` (${c.messages.length} msg)` : '');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style = `margin-left:1em;background:#e74c3c;color:#fff;border:none;padding:3px 10px;border-radius:6px;cursor:pointer;`;
    delBtn.onclick = function() {
      const idx = chats.findIndex(x => x.id === c.id);
      if (idx !== -1) {
        chats.splice(idx, 1);
        localStorage.setItem('conversations_v1', JSON.stringify(chats));
        li.remove();
        if (typeof hydrate === 'function') hydrate();
        if (getLocalStorageSizeBytes() < 4 * 1024 * 1024) overlay.remove();
      }
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
  box.appendChild(list);
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.style = `margin-top:1em;background:${isLight ? '#888' : '#444'};color:#fff;border:none;padding:7px 18px;border-radius:8px;cursor:pointer;`;
  closeBtn.onclick = () => overlay.remove();
  box.appendChild(closeBtn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
function checkStorageWarning() {
  if (getLocalStorageSizeBytes() >= 4 * 1024 * 1024) {
    showStorageWarningPopup();
  }
}
let imageMode = false;
document.getElementById('imageToggle').addEventListener('click', () => {
  setActiveTool(imageMode ? null : 'image');
});
let jsFixMode = false;
const jsFixToggle = document.getElementById('jsFixToggle');
jsFixToggle.addEventListener('click', () => { setActiveTool(jsFixMode ? null : 'jsfix'); });
let thinkMode = false;
let thinkAbortToken = 0;
const thinkToggle = document.getElementById('thinkToggle');
if (thinkToggle) {
  thinkToggle.addEventListener('click', () => { setActiveTool(thinkMode ? null : 'think'); });
}
let webSearchMode = false;
function setActiveTool(toolName) {
  try {
    if (localStorage.getItem('use_public_tunnel') === '1') {
      if (toolName === 'jsfix' || toolName === 'think' || toolName === 'web' || toolName === 'aibuilder') {
        toolName = null;
      }
    }
  } catch (e) {}
  imageMode = toolName === 'image';
  jsFixMode = toolName === 'jsfix';
  thinkMode = toolName === 'think';
  webSearchMode = toolName === 'web';
  const perma = getAiBuilderPermanentlyDisabled();
  if (toolName === 'aibuilder' && perma) {
    try { showPopup(perma.reason || 'AI Builder is undergoing maintenance'); } catch (e) {}
    aiBuilderMode = false;
  } else {
    aiBuilderMode = toolName === 'aibuilder';
  }
  try {
    if (aiBuilderMode) {
      const shown = localStorage.getItem(AI_BUILDER_FIRST_SHOWN);
      if (!shown) {
        showAiBuilderFirstUse();
        try { localStorage.setItem(AI_BUILDER_FIRST_SHOWN, '1'); } catch (e) {}
      }
    }
  } catch (e) {}
  const imgBtn = document.getElementById('imageToggle');
  if (imgBtn) imgBtn.classList.toggle('primary', imageMode);
  if (!imageMode) document.getElementById('imageToggle')?.classList.remove('primary');
  const jsBtn = document.getElementById('jsFixToggle');
  if (jsBtn) jsBtn.classList.toggle('primary', jsFixMode);
  const thinkBtn = document.getElementById('thinkToggle');
  if (thinkBtn) thinkBtn.classList.toggle('primary', thinkMode);
  const webBtnLocal = document.getElementById('webSearch');
  if (webBtnLocal) webBtnLocal.classList.toggle('primary', webSearchMode);
  const aiBtn = document.getElementById('aiBuilderToggle');
  if (aiBtn) aiBtn.classList.toggle('primary', aiBuilderMode);
  try {
    const mobileBtn = document.getElementById('mobileToolsBtnComposer');
    if (mobileBtn) {
      let sel = null;
      if (imageMode) sel = 'image';
      else if (jsFixMode) sel = 'jsfix';
      else if (thinkMode) sel = 'think';
      else if (webSearchMode) sel = 'web';
      else if (aiBuilderMode) sel = 'aibuilder';
      mobileBtn.classList.toggle('primary', !!sel);
      const labelMap = { image: '<i class="fas fa-image"></i>', jsfix: '<i class="fas fa-code"></i>', think: '<i class="fas fa-bolt"></i>', web: '<i class="fas fa-globe"></i>', aibuilder: '<i class="fas fa-cube"></i>' };
      mobileBtn.innerHTML = labelMap[sel] || '<i class="fas fa-tools"></i>';
      mobileBtn.title = sel ? (sel === 'jsfix' ? 'JS Fix (active)' : sel === 'image' ? 'Image (active)' : sel === 'think' ? 'Think (active)' : sel === 'web' ? 'Web Search (active)' : 'AI Builder (active)') : 'Tools';
    }
  } catch (e) {}
  try {
    const menu = document.getElementById('mobileToolsMenuComposer');
    if (menu) {
      Array.from(menu.querySelectorAll('li[data-tool]')).forEach(li => {
        const t = li.getAttribute('data-tool');
        if ((t === 'jsfix' && jsFixMode) || (t === 'image' && imageMode) || (t === 'think' && thinkMode) || (t === 'web' && webSearchMode) || (t === 'aibuilder' && aiBuilderMode)) li.classList.add('selected');
        else li.classList.remove('selected');
      });
    }
  } catch (e) {}
  if (!thinkMode) thinkAbortToken++;
}
function ensureImageEditorPanel() {
  try { const el = document.getElementById('imageEditorPanel'); if (el) el.remove(); } catch (e) {}
  return;
}
let _imageEditorState = { img: null, rotation: 0 };
async function handleImageFile(file) {
  console.log('handleImageFile called but image editing is disabled');
  return null;
}
function showImageInEditor(src, filename) {
  console.log('showImageInEditor called but image editing is disabled');
  return;
}
function ensureImageUploadOnlyUI() {
  try {
    try { const ex = document.getElementById('imageUploadOnly'); if (ex) ex.remove(); } catch (e) {}
    try { const input = document.getElementById('imageUploadInput'); if (input) input.remove(); } catch (e) {}
    try { adjustLayoutForEditor(false); setComposerToolsEnabled(true); } catch (e) {}
    return;
  } catch (e) { console.error('ensureImageUploadOnlyUI failed', e); }
}
function removeImageUploadOnlyUI() {
  try {
    const el = document.getElementById('imageUploadOnly'); if (el) { try { el.remove(); } catch (e) {} }
    try { adjustLayoutForEditor(false); setComposerToolsEnabled(true); } catch (e) {}
  } catch (e) { console.error('removeImageUploadOnlyUI failed', e); }
}
async function applyBrightness(factor) { console.log('applyBrightness called but image editing disabled'); }
async function applyRotate(deg) { console.log('applyRotate called but image editing disabled'); }
async function applyRemoveBackground() { console.log('applyRemoveBackground called but image editing disabled'); }
function getEditorCanvasCtx() { return null; }
function flipCanvas(dir = 'horizontal') { console.log('flipCanvas called but image editing disabled'); }
function applyBoxBlur(radius = 2) { console.log('applyBoxBlur called but image editing disabled'); }
function adjustContrast(amount = 1.0) { console.log('adjustContrast called but image editing disabled'); }
function adjustSaturation(factor = 1.0) { console.log('adjustSaturation called but image editing disabled'); }
function invertCanvas(){ console.log('invertCanvas called but image editing disabled'); }
function grayscaleCanvas(){ console.log('grayscaleCanvas called but image editing disabled'); }
function cropCanvas(cx, cy, wPct, hPct){ console.log('cropCanvas called but image editing disabled'); }
function resizeCanvas(wNew, hNew){ console.log('resizeCanvas called but image editing disabled'); }
function autoEnhance(){ console.log('autoEnhance called but image editing disabled'); }
function addBorder(px=8, color='#000000'){ console.log('addBorder called but image editing disabled'); }
function truncate(v){ return Math.max(0, Math.min(255, Math.round(v))); }
function debugComposerState(label) {
  try {
    const composer = document.querySelector('.composer');
    const panel = document.getElementById('imageEditorPanel');
    const uploadOnly = document.getElementById('imageUploadOnly');
    const modal = document.getElementById('imageUploadModal');
    const canvas = document.getElementById('imageEditorCanvas');
    const styleEl = document.getElementById('imageEditModeStyles');
    const bodyHasClass = document.body.classList.contains('image-editing-mode');
    const composerStyles = composer ? {
      display: composer.style.display,
      position: composer.style.position,
      left: composer.style.left,
      right: composer.style.right,
      bottom: composer.style.bottom,
      marginRight: composer.style.marginRight,
      zIndex: composer.style.zIndex
    } : null;
    console.debug('[debugComposerState]', label || '', {
      composerPresent: !!composer,
      composerStyles,
      panelPresent: !!panel,
      panelDisplay: panel ? panel.style.display : null,
      uploadOnlyPresent: !!uploadOnly,
      modalPresent: !!modal,
      canvasPresent: !!canvas,
      bodyHasClass,
      styleElPresent: !!styleEl,
      inputValue: (typeof inputEl !== 'undefined' && inputEl) ? inputEl.value : null,
      sendBtnDisplay: (typeof sendBtn !== 'undefined' && sendBtn) ? sendBtn.style.display : null,
      sendBtnDisabled: (typeof sendBtn !== 'undefined' && sendBtn) ? sendBtn.disabled : null,
      windowInnerWidth: window.innerWidth
    });
  } catch (e) { try { console.error('debugComposerState failed', e); } catch (ee) {} }
}
function saveConversationImage(dataUrl, filename) {
  try {
    const conv = currentConv();
    if (!conv) return;
    if (!dataUrl) {
      delete conv.imageData; delete conv.imageFilename; persist();
    } else {
      console.log('saveConversationImage called but image editing is disabled; ignoring save.');
    }
  } catch (e) { console.error('saveConversationImage failed', e); }
}
function removeConversationImage(conv) {
  try {
    if (!conv) conv = currentConv();
    if (!conv) return;
    delete conv.imageData; delete conv.imageFilename; persist();
    try { const panel = document.getElementById('imageEditorPanel'); if (panel) panel.remove(); } catch (e) {}
    try { removeImageUploadOnlyUI(); } catch (e) {}
    try { adjustLayoutForEditor(false); } catch (e) {}
  } catch (e) { console.error('removeConversationImage failed', e); }
}
function saveEditorCanvasIfPresent(filename) {
  try {
    console.log('saveEditorCanvasIfPresent called but image editing disabled');
  } catch (e) { console.error('saveEditorCanvasIfPresent failed', e); }
}
function resetImageToOriginal() {
  try {
    console.log('resetImageToOriginal called but image editing disabled');
  } catch (e) { console.error('resetImageToOriginal failed', e); }
}
async function handleImageEditingCommand(text) {
  try {
    return { handled: true, message: 'Image editing is temporarily disabled.' };
  } catch (e) { console.error('handleImageEditingCommand failed', e); return { handled: false }; }
}
const originalApplyModelToKeys = applyModelToKeys;
async function applyModelToKeys(model) {
  console.log('[debug] applyModelToKeys(wrapper) called with model=', model);
  try { debugComposerState('applyModelToKeys-start'); } catch (e) {}
  await originalApplyModelToKeys(model);
  if (model === 'image-editing') {
    console.log('[debug] image-editing model selected but feature is disabled; skipping UI changes');
    try { const panel = document.getElementById('imageEditorPanel'); if (panel) panel.remove(); } catch (e) {}
    try { removeImageUploadOnlyUI(); } catch (e) {}
    try { document.body.classList.remove('image-editing-mode'); } catch (e) {}
    try { adjustLayoutForEditor(false); } catch (e) {}
    return;
  }
}
function ensureImageEditStyles() {
  try {
    if (document.getElementById('imageEditModeStyles')) return;
    const ss = document.createElement('style'); ss.id = 'imageEditModeStyles';
    ss.textContent = `
      body.image-editing-mode #jsFixToggle, body.image-editing-mode #imageToggle, body.image-editing-mode #speechToggle,
      body.image-editing-mode #thinkToggle, body.image-editing-mode #webSearch, body.image-editing-mode #mobileToolsBtnComposer {
        display: none !important;
      }
      body.image-editing-mode .composer {
        position: fixed !important;
        left: 0 !important;
        right: 520px !important;
        bottom: 0 !important;
        z-index: 100001 !important;
        box-sizing: border-box !important;
      }
      @media (max-width: 900px) {
        body.image-editing-mode .composer { position: sticky !important; right: 0 !important; }
      }
    `;
    document.head.appendChild(ss);
  } catch (e) { console.error('ensureImageEditStyles failed', e); }
}
function adjustLayoutForEditor(enable) {
  try {
    const panel = document.getElementById('imageEditorPanel');
    const chatMain = document.getElementById('chat');
    const composerEl = document.querySelector('.composer');
    const panelWidth = 520; 
    if (!enable) {
      if (chatMain) chatMain.style.marginRight = '';
      if (composerEl) composerEl.style.marginRight = '';
      if (panel) panel.style.right = '0';
      return;
    }
    if (window.innerWidth <= 900) {
      if (chatMain) chatMain.style.marginRight = '';
      if (composerEl) {
        if (composerEl.dataset.__prevPosition) { composerEl.style.position = composerEl.dataset.__prevPosition; delete composerEl.dataset.__prevPosition; }
        if (composerEl.dataset.__prevRight) { composerEl.style.right = composerEl.dataset.__prevRight; delete composerEl.dataset.__prevRight; }
        if (composerEl.dataset.__prevLeft) { composerEl.style.left = composerEl.dataset.__prevLeft; delete composerEl.dataset.__prevLeft; }
        if (composerEl.dataset.__prevBottom) { composerEl.style.bottom = composerEl.dataset.__prevBottom; delete composerEl.dataset.__prevBottom; }
        if (composerEl.dataset.__prevZ) { composerEl.style.zIndex = composerEl.dataset.__prevZ; delete composerEl.dataset.__prevZ; }
        if (composerEl.dataset.__prevMarginRight) { composerEl.style.marginRight = composerEl.dataset.__prevMarginRight; delete composerEl.dataset.__prevMarginRight; }
      }
      if (panel) panel.style.right = '0';
      return;
    }
    if (composerEl) {
      if (!composerEl.dataset.__prevPosition) composerEl.dataset.__prevPosition = composerEl.style.position || '';
      if (!composerEl.dataset.__prevRight) composerEl.dataset.__prevRight = composerEl.style.right || '';
      if (!composerEl.dataset.__prevLeft) composerEl.dataset.__prevLeft = composerEl.style.left || '';
      if (!composerEl.dataset.__prevBottom) composerEl.dataset.__prevBottom = composerEl.style.bottom || '';
      if (!composerEl.dataset.__prevZ) composerEl.dataset.__prevZ = composerEl.style.zIndex || '';
      if (!composerEl.dataset.__prevMarginRight) composerEl.dataset.__prevMarginRight = composerEl.style.marginRight || '';
      composerEl.style.position = 'fixed';
      composerEl.style.bottom = '0';
      composerEl.style.left = '0';
      composerEl.style.right = panelWidth + 'px';
      composerEl.style.zIndex = '100001';
      composerEl.style.marginRight = '';
      composerEl.style.boxSizing = 'border-box';
    }
    if (chatMain) chatMain.style.marginRight = panelWidth + 'px';
    if (panel) panel.style.right = '0';
  } catch (e) { console.error('adjustLayoutForEditor error', e); }
}
function showImageUploadModal() {
  try {
    if (document.getElementById('imageUploadModal')) return;
    const overlay = document.createElement('div');
    overlay.id = 'imageUploadModal';
    overlay.style = 'position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;';
    overlay.innerHTML = `
      <div style="background:var(--elev);padding:18px;border-radius:12px;max-width:90vw;width:420px;text-align:center;color:var(--text);">
        <h3 style="margin:0 0 8px 0;">Upload an image</h3>
        <div style="color:var(--muted);margin-bottom:12px;">Choose a file to begin editing. You can also drop an image onto this box.</div>
        <input id="imageUploadModalInput" type="file" accept="image/*" style="display:block;margin:0 auto 8px auto;" />
        <div style="display:flex;gap:8px;justify-content:center;margin-top:8px;">
          <button id="imageUploadModalClose" class="btn">Cancel</button>
        </div>
      </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) hideImageUploadModal(); });
    document.body.appendChild(overlay);
    const input = document.getElementById('imageUploadModalInput');
    const close = document.getElementById('imageUploadModalClose');
    if (input) input.addEventListener('change', (e) => { const f = e.target.files && e.target.files[0]; if (f) { hideImageUploadModal(); handleImageFile(f); } });
    if (close) close.addEventListener('click', hideImageUploadModal);
    overlay.addEventListener('dragover', (e) => { e.preventDefault(); overlay.style.background = 'rgba(0,0,0,0.5)'; });
    overlay.addEventListener('dragleave', (e) => { e.preventDefault(); overlay.style.background = 'rgba(0,0,0,0.6)'; });
    overlay.addEventListener('drop', (e) => { e.preventDefault(); overlay.style.background = 'rgba(0,0,0,0.6)'; const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) { hideImageUploadModal(); handleImageFile(f); } });
  } catch (e) { console.error('showImageUploadModal error', e); }
}
function hideImageUploadModal() {
  try {
    const m = document.getElementById('imageUploadModal'); if (!m) return; m.remove();
  } catch (e) { console.error('hideImageUploadModal failed', e); }
}
const discordRedir = document.getElementById('discordRedir');
discordRedir.addEventListener('click', () => {
window.open("https://dc.gg/jumbo", "_blank");
});
const firebaseConfig = {
  apiKey: "AIzaSyDm1t9E0MWxtvleLnA8iy09CYQJbHpt80s",
  authDomain: "jumbo-v1.firebaseapp.com",
  projectId: "jumbo-v1",
  storageBucket: "jumbo-v1.firebasestorage.app",
  messagingSenderId: "376357438762",
  appId: "1:376357438762:web:02cbb3682c0ee7f5708a53",
  measurementId: "G-7B7CFH346F"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let currentUser = null;
const loginPopup = document.getElementById('loginPopup');
const googleLoginBtn = document.getElementById('googleLogin');
const guestLoginBtn = document.getElementById('guestLogin');
const accountBtn = document.getElementById("accountBtn");
const accountPopup = document.getElementById("accountPopup");
const accountBody = document.getElementById("accountBody");
const closeAccount = document.getElementById("closeAccount");
const modelSelectBtn = document.getElementById('modelSelectBtn');
const dropdown = modelSelectBtn.closest('.dropdown');
modelSelectBtn.addEventListener('click', () => {
  dropdown.classList.toggle('open');
  try {
    if (dropdown.classList.contains('open')) {
      dropdown.style.zIndex = '100002';
    } else {
      dropdown.style.zIndex = '';
    }
  } catch (e) {}
});
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    try { dropdown.style.zIndex = ''; } catch (e) {}
  }
});
const modelMenu = document.getElementById('modelMenu');
const currentModelEl = document.getElementById('currentModel');
const composerToolIds = ['jsFixToggle', 'imageToggle', 'thinkToggle', 'webSearch'];
let aiBuilderMode = false;
function setComposerToolsEnabled(enabled) {
  for (const id of composerToolIds) {
    const elBtn = document.getElementById(id);
    if (!elBtn) continue;
    if (enabled) {
      elBtn.style.display = '';
      elBtn.disabled = false;
      elBtn.style.opacity = '';
    } else {
      elBtn.style.display = 'none';
      elBtn.disabled = true;
      elBtn.classList.remove('primary');
      elBtn.style.opacity = '';
    }
  }
  try {
    const mobileDrop = document.getElementById('mobileToolsDropdownComposer');
    const mobileBtn = document.getElementById('mobileToolsBtnComposer');
    if (mobileDrop) {
      if (enabled) {
        mobileDrop.style.display = '';
        if (mobileBtn) mobileBtn.disabled = false;
      } else {
        mobileDrop.style.display = 'none';
        if (mobileBtn) {
          mobileBtn.disabled = true;
          mobileBtn.classList.remove('primary');
          mobileBtn.innerHTML = '<i class="fas fa-tools"></i>';
        }
      }
    }
  } catch (e) {}
}
async function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.body.appendChild(s);
  });
}
if (modelMenu) {
  modelMenu.addEventListener('click', async (e) => {
    const li = e.target.closest('li[data-model]');
    if (!li) return;
    const model = li.getAttribute('data-model');
    dropdown.classList.remove('open');
    try {
      if (model === 'jumbo-pro') {
        const seen = localStorage.getItem('seen_jumbo_pro_warning_v1');
        if (!seen) {
          const msg = '<strong>Warning</strong><br><br>This model is on an API to our backend meaning your chats are not private. We do not have access to your private information unless you provide it, and information on our side is kept private to the best of our ability.';
          try { showPopup(msg); } catch (e) {}
          try { localStorage.setItem('seen_jumbo_pro_warning_v1', '1'); } catch (e) {}
        }
      }
    } catch (e) {}
      if (!model) return;
      if (model === 'image-editing') {
        dropdown.classList.remove('open');
        try { showPopup('Image editing is temporarily disabled.'); } catch (e) { console.warn('image-editing selection blocked'); }
        return;
      }
      try { if (model === 'jumbo-pro' || model === 'jumbo_pro' || model === 'jumbo') localStorage.setItem('use_public_tunnel','1'); else localStorage.setItem('use_public_tunnel','0'); } catch (e) {}
      try {
        const conv = currentConv();
        if (conv) {
          conv.model = model;
          const noticeText = `Model switched to ${model}`;
          conv.messages.push({ role: 'system', content: noticeText, ts: Date.now(), _uiOnly: true });
          try { await applyModelToKeys(model); } catch (err) { console.error(err); }
          persist();
          hydrate();
        } else {
          const c = createConversation({ model, title: model === 'bloxd' ? 'Bloxd' : 'New chat' });
          currentId = c.id;
          try { await applyModelToKeys(model); } catch (err) { console.error(err); }
          persist(); hydrate();
        }
      } catch (err) { console.error('Model switch failed', err); }
      return;
  });
}
async function applyModelToKeys(model) {
  const hintEl = document.querySelector('.hint');
  if (model === 'default') {
    currentModelEl.textContent = 'Default';
    if (hintEl) hintEl.textContent = 'Press Enter to send • Shift+Enter for a new line';
    setComposerToolsEnabled(true);
    const aiBuilderBtn = document.getElementById('aiBuilderToggle');
    if (aiBuilderBtn) aiBuilderBtn.style.display = 'none';
    const aiBuilderLi = document.querySelector('li[data-tool="aibuilder"]');
    if (aiBuilderLi) aiBuilderLi.style.display = 'none';
    if (window.trainingKeys) keys = window.trainingKeys;
    return;
  }
  if (model === 'bloxd') {
    currentModelEl.textContent = 'Bloxd';
    if (hintEl) hintEl.textContent = 'Ask me anything about Bloxd.io!';
    setComposerToolsEnabled(false);
    try {
      const imgBtn = document.getElementById('imageToggle');
      if (imgBtn) { imgBtn.style.display = 'none'; imgBtn.disabled = true; imgBtn.classList.add('disabled-tool'); }
      try { setMobileToolDisabled('image', true); } catch (e) {}
    } catch (e) {}
    const aiBuilderBtn = document.getElementById('aiBuilderToggle');
    if (aiBuilderBtn) {
      aiBuilderBtn.style.display = '';
      aiBuilderBtn.disabled = false;
      aiBuilderBtn.classList.remove('disabled-tool');
      aiBuilderBtn.style.opacity = '';
    }
    const aiBuilderLi = document.querySelector('li[data-tool="aibuilder"]');
    if (aiBuilderLi) {
      aiBuilderLi.style.display = '';
      aiBuilderLi.removeAttribute('data-disabled');
      aiBuilderLi.classList.remove('disabled-tool');
    }
    await loadScriptOnce('bloxdDataset.js');
    if (window.bloxdKeys) {
      if (!window.trainingKeys && typeof keys !== 'undefined') window.trainingKeys = keys;
      keys = window.bloxdKeys;
    }
    return;
  }
  if (model === 'jumbo-pro' || model === 'jumbo_pro' || model === 'jumbo') {
    currentModelEl.textContent = 'Jumbo Pro';
    if (hintEl) hintEl.textContent = 'Using Jumbo Pro';
    setComposerToolsEnabled(true);
    try {
      const aiBuilderBtn = document.getElementById('aiBuilderToggle');
      if (aiBuilderBtn) { aiBuilderBtn.style.display = 'none'; aiBuilderBtn.disabled = true; aiBuilderBtn.classList.add('disabled-tool'); }
      const aiBuilderLi = document.querySelector('li[data-tool="aibuilder"]');
      if (aiBuilderLi) { aiBuilderLi.style.display = 'none'; aiBuilderLi.setAttribute('data-disabled', 'true'); aiBuilderLi.classList.add('disabled-tool'); }
      try { setMobileToolDisabled('aibuilder', true); } catch (e) {}
    } catch (e) {}
    return;
  }
  currentModelEl.textContent = model;
  setComposerToolsEnabled(true);
  const aiBuilderBtn = document.getElementById('aiBuilderToggle');
  if (aiBuilderBtn) {
    aiBuilderBtn.style.display = 'none';
    aiBuilderBtn.disabled = true;
  }
  const aiBuilderLi = document.querySelector('li[data-tool="aibuilder"]');
  if (aiBuilderLi) {
    aiBuilderLi.style.display = 'none';
    aiBuilderLi.setAttribute('data-disabled', 'true');
  }
}
auth.onAuthStateChanged(user => {
  currentUser = user;
  if (user) {
    localStorage.setItem("authMode", "firebase");
    loginPopup.style.display = 'none';
  } else {
    if (localStorage.getItem("authMode") === "guest") {
      loginPopup.style.display = 'none';
    } else {
      loginPopup.style.display = 'flex';
    }
  }
});
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => showPopup("Login failed: " + err.message, {buttonText:'Close'}));
}
function logout() {
  auth.signOut().then(() => {
    localStorage.removeItem("authMode");
    renderAccountPopup();
    accountPopup.style.display = "none";
    loginPopup.style.display = "flex";
  });
}
googleLoginBtn.addEventListener('click', () => {
  localStorage.setItem('authMode', 'firebase');
  loginWithGoogle();
  loginPopup.style.display = 'none';
});
guestLoginBtn.addEventListener('click', () => {
  localStorage.setItem('authMode', 'guest');
  loginPopup.style.display = 'none';
});
function renderAccountPopup() {
  accountBody.innerHTML = "";
  const mode = localStorage.getItem("authMode");
  if (currentUser) {
    accountBody.innerHTML = `
      <div class="account-profile">
        <img 
          src="${currentUser.photoURL}" 
          alt="User Avatar" 
          class="account-avatar"
        >
        <p class="account-name">
          <i class="fa-solid fa-user"></i> ${currentUser.displayName || "Google User"}
        </p>
        <p class="account-email">${currentUser.email}</p>
      </div>
      <button id="logoutBtn" class="btn btn-logout">Log out</button>
    `;
    document.getElementById("logoutBtn").onclick = logout;
  } else if (mode === "guest") {
    accountBody.innerHTML = `
      <div class="account-guest">
        <h2>Guest Mode</h2>
        <p>You are browsing as a guest.</p>
        <button id="switchBtn" class="btn btn-switch"><i class="fa-solid fa-right-to-bracket"></i> Switch to Account</button>
      </div>
    `;
    document.getElementById("switchBtn").onclick = () => {
      localStorage.removeItem("authMode");
      accountPopup.style.display = "none";
      loginPopup.style.display = "flex";
    };
  } else {
    accountBody.innerHTML = `
      <div class="account-login-options">
        <button id="googleLoginPopup" class="btn btn-google">
          <i class="fa-brands fa-google"></i> Login with Google
        </button>
        <button id="guestLoginPopup" class="btn btn-guest">
          <i class="fa-solid fa-user-secret"></i> Continue as Guest
        </button>
      </div>
    `;
    document.getElementById("googleLoginPopup").onclick = () => {
      localStorage.setItem("authMode", "firebase");
      loginWithGoogle();
      accountPopup.style.display = "none";
    };
    document.getElementById("guestLoginPopup").onclick = () => {
      localStorage.setItem("authMode", "guest");
      accountPopup.style.display = "none";
    };
  }
  try {
    const settingsWrap = document.createElement('div');
    settingsWrap.style = 'margin-top:1em;padding-top:12px;border-top:1px dashed var(--border);max-height:60vh;overflow:auto;padding-right:12px;';
    const titleRow = document.createElement('div');
    titleRow.style = 'display:flex;align-items:center;gap:8px;margin-bottom:8px;';
    titleRow.innerHTML = `<strong style="font-size:1.05rem;">Settings</strong>`;
    settingsWrap.appendChild(titleRow);
    const thinkCol = document.createElement('div');
    thinkCol.style = 'display:flex;flex-direction:column;gap:8px;align-items:stretch;min-width:260px;';
    const labelRow = document.createElement('div');
    labelRow.style = 'display:flex;align-items:center;gap:8px;justify-content:flex-start;';
    const labelText = document.createElement('div');
    labelText.style = 'font-weight:600;';
    labelText.textContent = 'Think Speed';
    const infoIcon = document.createElement('i');
    infoIcon.className = 'fa-solid fa-circle-info';
    infoIcon.style = 'cursor:pointer;color:var(--muted);margin-left:6px;font-size:0.95rem;';
    infoIcon.title = 'Click for info';
    labelRow.appendChild(labelText);
    labelRow.appendChild(infoIcon);
    const slider = document.createElement('input');
    slider.type = 'range'; slider.min = 1; slider.max = 10000; slider.step = 1; slider.id = 'thinkSpeedSlider';
    slider.style = 'width:100%;appearance:none;height:10px;border-radius:6px;outline:none;';
    const valDisplay = document.createElement('div');
    valDisplay.id = 'thinkSpeedValue';
    valDisplay.style = 'text-align:center;font-family:monospace;font-size:0.95rem;color:var(--muted);';
    const desc = document.createElement('div');
    desc.style = 'font-size:0.9rem;color:var(--muted);display:none;margin-top:6px;';
    desc.textContent = 'Increases speed of thinking, higher = faster, but more CPU intensive.';
    thinkCol.appendChild(labelRow);
    thinkCol.appendChild(slider);
    thinkCol.appendChild(valDisplay);
    thinkCol.appendChild(desc);
    settingsWrap.appendChild(thinkCol);
    const sliderStyleId = 'thinkSpeedSliderStyle';
    if (!document.getElementById(sliderStyleId)) {
      const ss = document.createElement('style');
      ss.id = sliderStyleId;
      ss.textContent = `
      #thinkSpeedSlider { background: linear-gradient(90deg, rgba(16,163,127,0.12) 0%, rgba(255,0,0,0.08) 100%); border-radius:6px; }
      #thinkSpeedSlider::-webkit-slider-runnable-track { height:10px; border-radius:6px; }
      #thinkSpeedSlider::-moz-range-track { height:10px; border-radius:6px; }
      #thinkSpeedSlider::-webkit-slider-thumb { -webkit-appearance:none; width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid var(--thinkColor, var(--muted));margin-top:-4px; }
      #thinkSpeedSlider::-moz-range-thumb { width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid var(--thinkColor, var(--muted)); }
      #thinkSpeedSlider:focus { box-shadow: 0 0 0 6px rgba(0,0,0,0.04); outline: none; }
      #thinkSpeedSlider:focus::-webkit-slider-thumb { box-shadow: 0 0 0 6px var(--thinkColor, rgba(255,0,0,0.12)); }
      #thinkSpeedSlider:focus::-moz-range-thumb { box-shadow: 0 0 0 6px var(--thinkColor, rgba(255,0,0,0.12)); }
      `;
      try { document.head.appendChild(ss); } catch (e) { document.body.appendChild(ss); }
    }
    const saved = parseInt(localStorage.getItem('think_speed') || '1000', 10) || 1000;
    slider.value = String(Math.min(10000, Math.max(1, saved)));
    valDisplay.textContent = slider.value;
    function updateSliderUI(v) {
      const pct = (v - 1) / (10000 - 1);
      const r = Math.round(16 + (255 - 16) * pct);
      const g = Math.round(163 - (163 - 0) * pct);
      const b = Math.round(127 - (127 - 0) * pct);
      const fg = `rgb(${r},${g},${b})`;
      slider.style.background = `linear-gradient(90deg, rgba(${r},${g},${b},0.18) 0%, rgba(${r},${g},${b},0.12) 100%)`;
      slider.style.setProperty('--thinkColor', fg);
      valDisplay.textContent = v;
    }
    const storageWrap = document.createElement('div');
    storageWrap.style = 'margin-top:10px;display:flex;flex-direction:column;gap:6px;';
    const storageText = document.createElement('div');
    storageText.style = 'font-size:0.9rem;color:var(--muted);';
    storageText.id = 'storageUsageText';
    const storageBarWrap = document.createElement('div');
    storageBarWrap.style = 'width:100%;background:var(--elev);height:8px;border-radius:6px;overflow:hidden;border:1px solid var(--border);';
    const storageBar = document.createElement('div');
    storageBar.id = 'storageUsageBar';
    storageBar.style = 'height:100%;width:0%;background:linear-gradient(90deg, rgba(16,163,127,0.9), rgba(16,163,127,0.6));';
    storageBarWrap.appendChild(storageBar);
    storageWrap.appendChild(storageText);
    storageWrap.appendChild(storageBarWrap);
    settingsWrap.appendChild(storageWrap);
    const typingCol = document.createElement('div');
    typingCol.style = 'margin-top:10px;display:flex;flex-direction:column;gap:8px;min-width:260px;';
    const typingLabelRow = document.createElement('div');
    typingLabelRow.style = 'display:flex;align-items:center;gap:8px;justify-content:flex-start;';
    const typingLabelText = document.createElement('div');
    typingLabelText.style = 'font-weight:600;';
    typingLabelText.textContent = 'Typing Speed';
    const typingInfoIcon = document.createElement('i');
    typingInfoIcon.className = 'fa-solid fa-circle-info';
    typingInfoIcon.style = 'cursor:pointer;color:var(--muted);margin-left:6px;font-size:0.9rem;';
    typingInfoIcon.title = 'Click for info';
    typingLabelRow.appendChild(typingLabelText);
    typingLabelRow.appendChild(typingInfoIcon);
    const typingSlider = document.createElement('input');
    typingSlider.type = 'range'; typingSlider.min = 1; typingSlider.max = 500; typingSlider.step = 1; typingSlider.id = 'typingSpeedSlider';
    typingSlider.style = 'width:100%;appearance:none;height:10px;border-radius:6px;outline:none;';
    const typingVal = document.createElement('div'); typingVal.id = 'typingSpeedValue'; typingVal.style = 'text-align:center;font-family:monospace;font-size:0.95rem;color:var(--muted);';
    const typingDesc = document.createElement('div'); typingDesc.style = 'font-size:0.9rem;color:var(--muted);display:none;margin-top:6px;';
    typingDesc.textContent = 'Controls how fast the AI types characters (ms delay per character). Lower = faster typing.';
    const savedTyping = parseInt(localStorage.getItem('typing_speed') || '', 10);
    const typingDefault = (isFinite(savedTyping) && savedTyping > 0) ? Math.min(500, Math.max(1, savedTyping)) : 20;
    typingSlider.value = String(typingDefault);
    typingVal.textContent = typingSlider.value + ' ms/char';
    typingSlider.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      typingVal.textContent = v + ' ms/char';
    });
    typingSlider.addEventListener('change', (e) => {
      const v = Number(e.target.value);
      localStorage.setItem('typing_speed', String(v));
      typingVal.textContent = v + ' ms/char';
    });
    typingInfoIcon.addEventListener('click', (ev) => { ev.stopPropagation(); typingDesc.style.display = typingDesc.style.display === 'none' ? 'block' : 'none'; });
    typingCol.appendChild(typingLabelRow);
    typingCol.appendChild(typingSlider);
    typingCol.appendChild(typingVal);
    typingCol.appendChild(typingDesc);
    settingsWrap.appendChild(typingCol);
    try {
  const langWrap = document.createElement('div');
  langWrap.style = 'margin-top:10px;display:flex;flex-direction:column;gap:6px;width:100%;min-width:260px;';
  const langLabel = document.createElement('div'); langLabel.style='font-weight:700;margin-bottom:6px;font-size:0.98rem;color:var(--text);'; langLabel.textContent = 'Language';
  const langSelect = document.createElement('select'); langSelect.id = 'userLanguageSelect';
  langSelect.style = 'display:block;width:100%;padding:10px 12px;font-size:1rem;border-radius:10px;border:1px solid rgba(30,144,255,0.25);background:var(--elev);color:var(--text);box-shadow:0 6px 18px rgba(30,144,255,0.06);';
      try {
        if (typeof availableLanguages === 'object' && availableLanguages) {
          const entries = Object.entries(availableLanguages);
          for (const [name, code] of entries) {
            const opt = document.createElement('option'); opt.value = String(code); opt.textContent = name;
            langSelect.appendChild(opt);
          }
        }
      } catch (e) {}
      const savedLang = localStorage.getItem('user_lang') || 'eng_Latn';
      try { langSelect.value = savedLang; } catch (e) {}
      langSelect.addEventListener('change', async (e) => {
        const v = e.target.value; try { localStorage.setItem('user_lang', String(v)); } catch (ee) {}
        try { await translateAssistantMessagesForConv(currentConv()); } catch (eee) {}
      });
      langWrap.appendChild(langLabel);
      langWrap.appendChild(langSelect);
      settingsWrap.appendChild(langWrap);
      try {
        const multiWrap = document.createElement('div');
        multiWrap.style = 'margin-top:10px;display:flex;align-items:center;gap:8px;width:100%;min-width:260px;';
        const multiCheckbox = document.createElement('input'); multiCheckbox.type = 'checkbox'; multiCheckbox.id = 'multiMessageToggle';
        const multiLabel = document.createElement('label'); multiLabel.htmlFor = 'multiMessageToggle'; multiLabel.style = 'font-weight:700;font-size:0.98rem;color:var(--text);'; multiLabel.textContent = 'Multi-message mode';
        const multiInfo = document.createElement('div'); multiInfo.style = 'font-size:0.9rem;color:var(--muted);'; multiInfo.textContent = 'When enabled, the assistant may split replies at commas, periods, question marks or exclamation points and send parts as separate messages with a short delay.';
        try { multiCheckbox.checked = (localStorage.getItem('multi_message_mode') === '1'); } catch (e) {}
        multiCheckbox.addEventListener('change', (e) => { try { localStorage.setItem('multi_message_mode', e.target.checked ? '1' : '0'); } catch (err) {} });
        multiWrap.appendChild(multiCheckbox);
        const multiCol = document.createElement('div'); multiCol.style = 'display:flex;flex-direction:column;gap:4px;'; multiCol.appendChild(multiLabel); multiCol.appendChild(multiInfo);
        multiWrap.appendChild(multiCol);
        settingsWrap.appendChild(multiWrap);
      } catch (e) {}
    } catch (e) {}
    function updateStorageUsage() {
      try {
        let total = 0;
        for (let k in localStorage) {
          try { const v = localStorage.getItem(k) || ''; total += (k.length + v.length) * 2; } catch (e) {}
        }
        const usedMB = (total / (1024*1024));
        const pct = Math.min(100, Math.round((usedMB / 5) * 100));
        storageText.textContent = `Storage: ${usedMB.toFixed(2)} MB / 5.00 MB`;
        storageBar.style.width = pct + '%';
      } catch (e) { storageText.textContent = 'Storage: (unavailable)'; }
    }
    updateStorageUsage();
    slider.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      updateSliderUI(v);
    });
    slider.addEventListener('change', (e) => {
      const v = Number(e.target.value);
      localStorage.setItem('think_speed', String(v));
      updateSliderUI(v);
    });
    infoIcon.addEventListener('click', (ev) => {
      ev.stopPropagation();
      desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
    });
    updateSliderUI(Number(slider.value));
    accountBody.appendChild(settingsWrap);
    try {
      const allBtns = settingsWrap.querySelectorAll('button.btn');
      if (allBtns && allBtns.length) {
        allBtns.forEach(b => { b.style.padding = '8px 12px'; b.style.margin = '4px 0'; b.style.minWidth = '96px'; });
      }
    } catch (e) {}
  } catch (e) { console.error('renderAccountPopup settings failed', e); }
}

function updateToolAvailabilityForPublicTunnel() {
  try {
    const use = localStorage.getItem('use_public_tunnel') === '1';
    const ids = ['jsFixToggle','thinkToggle','webSearch','speechToggle','aiBuilderToggle'];
    for (const id of ids) {
      try {
        const el = document.getElementById(id);
        if (!el) continue;
        if (use) {
          el.style.display = 'none';
          el.disabled = true;
          el.classList && el.classList.remove('primary');
        } else {
          el.style.display = '';
          el.disabled = false;
        }
      } catch (e) {}
    }
    try {
      const menu = document.getElementById('mobileToolsMenuComposer');
      if (menu) {
        Array.from(menu.querySelectorAll('li[data-tool]')).forEach(li => {
          const t = li.getAttribute('data-tool');
          if (t === 'jsfix' || t === 'think' || t === 'web' || t === 'aibuilder') li.style.display = use ? 'none' : '';
        });
      }
    } catch (e) {}
  } catch (e) {}
}

try { setTimeout(updateToolAvailabilityForPublicTunnel, 200); } catch (e) {}
accountBtn.onclick = () => {
  renderAccountPopup();
  accountPopup.style.display = "flex";
};
closeAccount.onclick = () => {
  accountPopup.style.display = "none";
};
if (localStorage.getItem("authMode") === "guest" || auth.currentUser) {
  loginPopup.style.display = 'none';
  setTimeout(hydrate, 1000);
} else {
  loginPopup.style.display = 'flex';
  setTimeout(hydrate, 1000);
}
function autocorrect(input) {
  const informalToFormal={"\\bnigger\\b":"","\\bnigga\\b":"","\\bu\\b":"you","\\bur\\b":"your","\\br\\b":"are","\\bpls\\b":"please","\\bplz\\b":"please","\\bthx\\b":"thanks","\\bimo\\b":"in my opinion","\\bidk\\b":"i dont know","\\bomg\\b":"oh my god","\\bbrb\\b":"be right back","\\bgtg\\b":"got to go","\\btbh\\b":"to be honest","\\bikr\\b":"i know right","\\blmk\\b":"let me know","\\bsmh\\b":"shaking my head","\\bnp\\b":"no problem","\\bbtw\\b":"by the way","\\bmsg\\b":"message","\\bpic\\b":"picture","\\bvid\\b":"video","\\bwanna\\b":"want to","\\bgonna\\b":"going to","\\bgimme\\b":"give me","\\blemme\\b":"let me","\\bkinda\\b":"kind of","\\bsorta\\b":"sort of","\\bcuz\\b":"because","\\bcause\\b":"because","\\bsup\\b":"whats up","\\byeah\\b":"yes","\\byep\\b":"yes","\\bnope\\b":"no","\\bnah\\b":"no","\\bttyl\\b":"talk to you later","\\bfyi\\b":"for your information","\\bw/e\\b":"whatever","\\bw/o\\b":"without","\\bwth\\b":"what the hell","\\bwtf\\b":"what the fuck","\\bbtw\\b":"by the way","\\bgr8\\b":"great","\\bb4\\b":"before","\\b2day\\b":"today","\\b2moro\\b":"tomorrow","\\btho\\b":"though","\\btmrw\\b":"tomorrow","\\bbc\\b":"because","\\bhbu\\b":"how about you","\\bhmu\\b":"hit me up","\\bicymi\\b":"in case you missed it","\\bnvm\\b":"never mind","\\btxt\\b":"text","\\brn\\b":"right now","\\brly\\b":"really","\\bsry\\b":"sorry","\\baf\\b":"as fuck","\\bdyk\\b":"did you know","\\bily\\b":"I love you","\\bily2\\b":"I love you too","\\bty\\b":"thank you","\\bfam\\b":"family","\\bbae\\b":"before anyone else","\\bbro\\b":"brother","\\bsis\\b":"sister","\\bfwb\\b":"friends with benefits","\\bfomo\\b":"fear of missing out","\\birl\\b":"in real life","\\bnsfw\\b":"not safe for work","\\bover\\b":"more than","\\bunder\\b":"less than","\\bslay\\b":"perform excellently","\\bsmh\\b":"shaking my head","\\bngl\\b":"not gonna lie","\\bafaik\\b":"as far as I know","\\bbruh\\b":"bro","\\bflex\\b":"show off","\\bchill\\b":"relax","\\bbet\\b":"I agree or okay","\\bfr\\b":"for real","\\bgod\\b":"god","\\bdm\\b":"direct message","\\bthot\\b":"that hoe over there","\\bcringe\\b":"embarrassing","\\bhype\\b":"exciting","\\bclout\\b":"influence","\\bthx\\b":"thanks","\\bseggs\\b":"eggs","\\byeet\\b":"throw away or excitement","\\bstan\\b":"to be a devoted fan of","\\bsksksk\\b":"lol","\\bbussin\\b":"very good, tasty","\\bslaps\\b":"good music or something","\\boof\\b":"smelly, bad","\\bbig yikes\\b":"big mistake","\\bgoat\\b":"greatest of all time","\\bcap\\b":"lie","\\bno cap\\b":"no lie","\\bbig mood\\b":"totally agree","\\bbeef\\b":"conflict","\\bmood\\b":"feeling","\\bsus\\b":"suspicious","\\bwoke\\b":"socially aware","\\bslime\\b":"friend","\\bspilling tea\\b":"gossiping","\\btea\\b":"gossip","\\bshade\\b":"insult","\\bfrfr\\b":"for real, for real","\\bnope\\b":"no","\\bya\\b":"yes","\\bbtw\\b":"by the way","\\bshook\\b":"surprised or shaken","\\bslay\\b":"do well or perform","\\btea\\b":"gossip","\\bwya\\b":"where you at?","\\bsksk\\b":"lol","\\bnvm\\b":"never mind","\\bfam\\b":"family","\\bdm\\b":"direct message","\\bdrip\\b":"stylish, cool","\\bstan\\b":"devoted fan","\\bsmh\\b":"shaking my head","\\bnoob\\b":"beginner or unskilled","\\bglow up\\b":"improve appearance or style","\\bship\\b":"to support a romantic pairing","\\bvibe\\b":"mood or feeling","\\bflex\\b":"to show off","\\bclout\\b":"fame","\\bfit\\b":"outfit","\\bbruh\\b":"dude","\\bhru\\b":"how are you"};
  let corrected = input.toLowerCase();
  corrected = corrected.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'\[\]]/g, "");
  for (const [pattern, replacement] of Object.entries(informalToFormal)) {
    const regex = new RegExp(pattern, "gi");
    corrected = corrected.replace(regex, replacement);
  }
  const finalCorrected = corrected.replace(/\s+/g, ' ').trim();
  return finalCorrected;
}
function getMathResponse() {
const mathResponses = [
  "The answer is ",
  "That would be ",
  "It's ",
  "Calculating... it's ",
  "After doing the math, I found it's ",
  "The result is ",
  "It's equal to ",
  "The solution is ",
  "I computed it to be ",
];
return mathResponses[Math.floor(Math.random() * mathResponses.length)];
}
const numberWords = [
  "zero","one","two","three","four","five","six","seven","eight","nine",
  "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen",
  "seventeen","eighteen","nineteen","twenty"
];
const operatorWords = ["+", "-", "plus","minus","times","multiplied by","divided by"];
function hasMathQuestion(input) {
  if (!input || typeof input !== 'string') return false;
  const lower = input.toLowerCase();
  const operatorBetweenNumbers = /\d[\d,\.\s]*\s*[\+\-\*\/\^%]\s*[\d,\.\s]*/;
  if (operatorBetweenNumbers.test(lower)) return true;
  if (/\([0-9\s\+\-\*\/\^%\.\,]+\)/.test(lower)) return true;
  if (/\b\d{1,3}(?:[\,\d]{0,}|(?:\.\d+))\b/.test(lower)) return true;
  if (numberWords.some(word => lower.includes(word))) return true;
  if (operatorWords.some(word => lower.includes(word))) return true;
  const questionPhrases = ["how many","what is","whats","calculate","solve","what's","how much","evaluate","simplify"];
  if (questionPhrases.some(phrase => lower.includes(phrase))) return true;
  return false;
}
const numberWordsToNumber = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
  fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
  nineteen: 19, twenty: 20
};
function wordsToNumbers(str) {
  const words = str.toLowerCase().split(/\b/);
  return words.map(word => numberWordsToNumber[word] !== undefined ? numberWordsToNumber[word] : word).join('');
}
function wordsToOperators(str) {
  return str
    .replace(/\bplus\b/g, '+')
    .replace(/\bminus\b/g, '-')
    .replace(/\btimes\b|\bmultiplied by\b/g, '*')
    .replace(/\bdivided by\b/g, '/');
}
function solveMathFromString(input) {
  let sanitized = input.toLowerCase().replace(/what'?s|how many (does|do) .* have\??/g, '');
  sanitized = wordsToNumbers(sanitized);
  sanitized = wordsToOperators(sanitized);
  sanitized = sanitized.replace(/[^0-9+\-*/().]/g, '');
  try {
    const result = Function(`return ${sanitized}`)();
    return result;
  } catch (err) {
    return "Couldn't parse math from the input.";
  }
}
async function getAnswer(query) {
  if (!query) {
    throw new Error("Please provide a search term.");
  }
  const searchEndpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;
  try {
    const searchResponse = await fetch(searchEndpoint);
    const searchData = await searchResponse.json();
    if (searchData.query.search.length === 0) {
      return "No results found.";
    }
    const firstResult = searchData.query.search[0];
    const pageId = firstResult.pageid;
    const extractEndpoint = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=true&explaintext=true&pageids=${pageId}&format=json&origin=*`;
    const extractResponse = await fetch(extractEndpoint);
    const extractData = await extractResponse.json();
    const page = extractData.query.pages[pageId];
    return page.extract || "No summary available.";
  } catch (error) {
    console.error("Error fetching answer:", error);
    return "Error fetching data from Wikipedia.";
  }
}
function extractImportant(text) {
  const stopwords = new Set([
    "what","is","a","the","your","to","how","of","in","on","at","for","and","do","does","did",
    "are","am","was","were","can","you","i","we","they","it", "who","when","where","why","which","that","this","these","those","with","as","by","an","be","from","or","but","if","not","all","any","so","no","yes",
    "there","here","about","just","like","more","some","such","than","then","too","very","also","my",
    "me","he","she","him","her","his","its","our","us","them","what's","whats"
  ]);
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(w => w && !stopwords.has(w));
}
    function tagWords(text) {
      if (devFlag === true) {
      console.log("Tagging words in text: " + text);
      };
      let doc = nlp(text);
      return doc.json()[0].terms.map(term => ({
        word: term.text,
        tag: term.tags[0] || "Unknown"
      }));
    }
async function getImage(query) {
  console.log("Fetching image for query: " + query);
  const accessKey = 'l9PkR9cuhWi4XRxJdgI0g8O67ioPS34QutHXugWX11Y';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${accessKey}&per_page=1`;
  try {
    console.log("Sending request to Unsplash API: " + url);
    const res = await fetch(url).then(r => r.json());
    console.log("Image response from Unsplash: " + JSON.stringify(res));
    if (res.results && res.results.length > 0) {
      console.log("Image found: " + res.results[0].urls.regular);
      return res.results[0].urls.regular;
    } else {
      console.log("No image found for: " + query);
      return null;
    }
  } catch (e) {
    console.error("Error fetching image from Unsplash: " + e);
    return null;
  }
}
function processJSFixOnce(codeIn, errorLogIn) {
  let fixed = codeIn.split('\n');
  const messages = [];
  let changes = 0;
  let localErrorLog = errorLogIn;
  if (!localErrorLog || /^\s*(?:\(none\)|none)\s*$/i.test(localErrorLog)) {
    let generated = '';
    const openers = { '(': 0, '{': 0, '[': 0 };
    const closers = { ')': 0, '}': 0, ']': 0 };
    for (let i = 0; i < fixed.length; i++) {
      const line = fixed[i];
      for (let ch of line) {
        if (openers.hasOwnProperty(ch)) openers[ch]++;
        if (closers.hasOwnProperty(ch)) closers[ch]++;
      }
      const quoteCount = ((line.match(/"/g) || []).length + (line.match(/'/g) || []).length);
      if (quoteCount % 2 !== 0) generated += `Unterminated string at line ${i+1} column ${line.length}\n`;
      if (/[^;{}\s]$/.test(line)) generated += `missing ; at line ${i+1} column ${line.length+1}\n`;
    }
    if (openers['('] > closers[')']) generated += `missing ) at line ${fixed.length} column ${fixed[fixed.length-1].length+1}\n`;
    if (openers['{'] > closers['}']) generated += `missing } at line ${fixed.length} column ${fixed[fixed.length-1].length+1}\n`;
    if (openers['['] > closers[']']) generated += `missing ] at line ${fixed.length} column ${fixed[fixed.length-1].length+1}\n`;
    localErrorLog = generated.trim();
  }
  const lines = (localErrorLog || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const refVarsToDeclare = new Set();
  for (const l of lines) {
    let m = l.match(/Unexpected reserved word '?([^' ]*)'? at line (\d+) column (\d+)/i);
    if (m) {
      const word = m[1], ln = parseInt(m[2],10)-1, col = parseInt(m[3],10)-1;
      if (fixed[ln] !== undefined && word && fixed[ln].slice(col, col+word.length) === word) {
        fixed[ln] = fixed[ln].slice(0,col) + fixed[ln].slice(col+word.length);
        messages.push(`Removed unexpected reserved word '${word}' at line ${ln+1}, column ${col+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/Unexpected newline at line (\d+) column (\d+)/i);
    if (m) {
      const ln = parseInt(m[1],10)-1;
      if (fixed[ln] !== undefined && fixed[ln+1] !== undefined) {
        fixed[ln] = fixed[ln] + ' ' + fixed[ln+1];
        fixed.splice(ln+1,1);
        messages.push(`Joined lines ${ln+1} and ${ln+2} to fix unexpected newline`);
        changes++;
      }
      continue;
    }
    m = l.match(/(Unterminated string|Unexpected end of string) at line (\d+) column (\d+)/i);
    if (m) {
      const ln = parseInt(m[2],10)-1;
      if (fixed[ln] !== undefined) {
        fixed[ln] = fixed[ln] + '"';
        messages.push(`Closed unterminated string at line ${ln+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/missing ([^ ]+) at line (\d+) column (\d+)/i);
    if (m) {
      const token = m[1], ln = parseInt(m[2],10)-1, col = parseInt(m[3],10)-1;
      if (fixed[ln] !== undefined) {
        fixed[ln] = fixed[ln].slice(0,col) + token + fixed[ln].slice(col);
        messages.push(`Inserted missing '${token}' at line ${ln+1}, column ${col+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/Unexpected token ILLEGAL at line (\d+) column (\d+)/i);
    if (m) {
      const ln = parseInt(m[1],10)-1, col = parseInt(m[2],10)-1;
      if (fixed[ln] !== undefined) {
        fixed[ln] = fixed[ln].slice(0,col) + fixed[ln].slice(col+1);
        messages.push(`Removed illegal character at line ${ln+1}, column ${col+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/Assignment to constant variable '?([^' ]*)'? at line (\d+) column (\d+)/i);
    if (m) {
      const varName = m[1], ln = parseInt(m[2],10)-1;
      if (fixed[ln] !== undefined) {
        fixed[ln] = fixed[ln].replace(/\bconst\s+"?([a-zA-Z_$][a-zA-Z0-9_$]*)"?/, 'let $1');
        messages.push(`Changed 'const' to 'let' for variable '${varName}' at line ${ln+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/Unexpected token ([^ ]+) at line (\d+) column (\d+)/i);
    if (m) {
      const token = m[1], ln = parseInt(m[2],10)-1, col = parseInt(m[3],10)-1;
      if (fixed[ln] !== undefined && fixed[ln].slice(col, col + token.length) === token) {
        fixed[ln] = fixed[ln].slice(0, col) + fixed[ln].slice(col + token.length);
        messages.push(`Removed unexpected token '${token}' at line ${ln+1}, column ${col+1}`);
        changes++;
      }
      continue;
    }
    m = l.match(/Cannot access '([a-zA-Z_$][a-zA-Z0-9_$]*)' before initialization/i);
    if (m) {
      const varName = m[1];
      if (!fixed[0].includes(`let ${varName}`)) {
        fixed.unshift(`let ${varName};`);
        messages.push(`Declared '${varName}' at top to avoid temporal dead zone`);
        changes++;
      }
      continue;
    }
    m = l.match(/([a-zA-Z_$][a-zA-Z0-9_$]*) is not defined at line (\d+) column (\d+)/i);
    if (m) {
      const varName = m[1];
      refVarsToDeclare.add(varName);
      continue;
    }
    m = l.match(/Unexpected (identifier|number|string) '?([^' ]*)'? at line (\d+) column (\d+)/i);
    if (m) {
      const type = m[1], token = m[2], ln = parseInt(m[3],10)-1, col = parseInt(m[4],10)-1;
      if (fixed[ln] !== undefined) {
        if (token && fixed[ln].slice(col, col + token.length) === token) {
          fixed[ln] = fixed[ln].slice(0, col) + fixed[ln].slice(col + token.length);
          messages.push(`Removed unexpected ${type} '${token}' at line ${ln+1}, column ${col+1}`);
          changes++;
        } else {
          fixed[ln] = fixed[ln].replace(/\b\w+\b/, '');
          messages.push(`Removed unexpected ${type} at line ${ln+1}, column ${col+1}`);
          changes++;
        }
      }
      continue;
    }
    if (/Unexpected end of JSON input/i.test(l)) {
      continue;
    }
    if (/Maximum call stack size exceeded/i.test(l)) {
      messages.push('Warning: Maximum call stack size exceeded. Consider refactoring recursive functions.');
      continue;
    }
  }
  if (refVarsToDeclare.size > 0) {
    const declared = Array.from(refVarsToDeclare).join(', ');
    fixed.unshift('let ' + declared + ';');
    messages.push(`Declared missing variable(s): ${declared}`);
    changes++;
  }
  if (/Unexpected end of input/i.test(localErrorLog) || /Unexpected end of JSON input/i.test(localErrorLog)) {
    const openers = { '{': 0, '[': 0, '(': 0 };
    const closers = { '}': 0, ']': 0, ')': 0 };
    for (let line of fixed) for (let c of line) {
      if (openers.hasOwnProperty(c)) openers[c]++;
      if (closers.hasOwnProperty(c)) closers[c]++;
    }
    const toClose = [
      ...Array(Math.max(0, openers['{'] - closers['}'])).fill('}'),
      ...Array(Math.max(0, openers['['] - closers[']'])).fill(']'),
      ...Array(Math.max(0, openers['('] - closers[')'])).fill(')')
    ];
    if (toClose.length > 0) {
      fixed[fixed.length - 1] += toClose.join('');
      messages.push(`Added closing: ${toClose.join(' ')}`);
      changes++;
    }
  }
  if (!changes && localErrorLog && /missing\s*\)|missing\s*\)\s*after\s*argument\s*list|unexpected end of input/i.test(localErrorLog)) {
    const openers = { '{': 0, '[': 0, '(': 0 };
    const closers = { '}': 0, ']': 0, ')': 0 };
    for (let line of fixed) for (let c of line) {
      if (openers.hasOwnProperty(c)) openers[c]++;
      if (closers.hasOwnProperty(c)) closers[c]++;
    }
    const neededParens = Math.max(0, openers['('] - closers[')']);
    const neededBraces = Math.max(0, openers['{'] - closers['}']);
    const neededBrackets = Math.max(0, openers['['] - closers[']']);
    const toClose = [];
    if (neededParens > 0) toClose.push(...Array(neededParens).fill(')'));
    if (neededBrackets > 0) toClose.push(...Array(neededBrackets).fill(']'));
    if (neededBraces > 0) toClose.push(...Array(neededBraces).fill('}'));
    if (toClose.length > 0) {
      fixed[fixed.length - 1] = fixed[fixed.length - 1] + toClose.join('');
      messages.push(`Heuristic: added closing tokens: ${toClose.join(' ')}`);
      changes++;
    }
  }
  return { fixedCode: fixed.join('\n'), messages, changes, errorLog: localErrorLog };
}
function fixJSCode(code, errorLog) {
  let currentCode = code;
  let currentErrorLog = errorLog || '';
  const aggMessages = [];
  let lastErrorLog = currentErrorLog;
  for (let i = 0; i < 5; i++) {
    const res = processJSFixOnce(currentCode, currentErrorLog);
    aggMessages.push(...res.messages);
    currentCode = res.fixedCode;
    lastErrorLog = res.errorLog;
    if (!res.changes) break;
    currentErrorLog = '';
  }
  const fixedCode = currentCode;
  let report = "<b>JS Fixer:</b><br>";
  report += "<b>Error Log:</b><br><pre style='white-space: pre-wrap; color:#e74c3c;'>" + (lastErrorLog ? lastErrorLog.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '(none)') + "</pre>";
  report += "<pre style='white-space: pre-wrap;'>" + fixedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>";
  if (aggMessages.length > 0) {
    report += "<b>Fixes applied:</b><br><ul>";
    aggMessages.forEach(m => report += `<li>${m}</li>`);
    report += "</ul>";
  } else {
    report += "<i>No recognized fixable instructions found in error log.</i>";
  }
  return report;
}
function runJSInSandbox(code, timeoutMs = 2000) {
  return new Promise((resolve) => {
    const id = 'sandbox_' + Math.random().toString(36).slice(2);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts';
    try { iframe.dataset.code = btoa(unescape(encodeURIComponent(code))); } catch (e) { iframe.dataset.code = btoa(code); }
    const messages = [];
    function onMessage(e) {
      const data = e.data || {};
      if (data && data.__runJSSandbox && data.id === id) {
        const p = data.payload;
        if (!p) return;
        if (p.type === 'console') messages.push({type: p.level, args: p.args});
        if (p.type === 'error') messages.push({type: 'error', message: p.message, stack: p.stack, url: p.url, line: p.line, col: p.col});
        if (p.type === 'done') {
          cleanup();
          const errors = messages.filter(m=>m.type==='error');
          const errorLog = errors.map(er => (er.message || '') + (er.line?` at ${er.line}:${er.col}`:'') + (er.stack?`\n${er.stack}`:'')).join('\n');
          resolve({ console: messages.filter(m=>m.type!=='error'), errorLog });
        }
      }
    }
    function cleanup() {
      window.removeEventListener('message', onMessage);
      if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
      clearTimeout(killTimer);
    }
    window.addEventListener('message', onMessage);
    const srcdoc = `<!doctype html><html><body><script>
      (function(){
        const id='${id}';
        function send(obj){ parent.postMessage({__runJSSandbox:true,id:id,payload:obj}, '*'); }
        ['log','warn','error','info'].forEach(k=>{ const orig=console[k]; console[k]=function(){ try{ send({type:'console', level:k, args:Array.from(arguments)}); }catch(e){}; orig.apply(console, arguments); }; });
        window.onerror = function(msg, url, line, col, err){ send({type:'error', message: String(msg), url, line, col, stack: err && err.stack}); };
        window.addEventListener('unhandledrejection', function(e){ send({type:'error', message:'UnhandledRejection: '+(e.reason && e.reason.message?e.reason.message: String(e.reason)), stack: e.reason && e.reason.stack}); });
        try {
          const coded = '${iframe.dataset.code || ''}';
          let userCode = '';
          try { userCode = decodeURIComponent(escape(atob(coded))); } catch(e) { try{ userCode = atob(coded); }catch(e2){ userCode=''; } }
          if(userCode) {
            (0,eval)(userCode);
          }
          send({type:'done'});
        } catch (e) { send({type:'error', message: e.message, stack: e.stack}); }
      })();
    <\/script></body></html>`;
    iframe.srcdoc = srcdoc;
    document.body.appendChild(iframe);
    const killTimer = setTimeout(()=>{
      window.removeEventListener('message', onMessage);
      if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
      const errors = messages.filter(m=>m.type==='error');
      const errorLog = errors.map(er => (er.message || '') + (er.stack?`\n${er.stack}`:'')).join('\n') || 'Timeout or no output';
      resolve({ console: messages.filter(m=>m.type!=='error'), errorLog });
    }, timeoutMs);
  });
}
async function autoRunAndFix(code, maxIterations = 5, runTimeout = 2000) {
  let currentCode = code;
  const aggMessages = [];
  let lastRuntimeLog = '';
  for (let i = 0; i < maxIterations; i++) {
    let syntaxErrorMsg = '';
    try {
      new Function(currentCode);
    } catch (e) {
      syntaxErrorMsg = (e && e.message) ? String(e.message) : 'Syntax error';
    }
    if (syntaxErrorMsg) {
      lastRuntimeLog = syntaxErrorMsg;
      const res = processJSFixOnce(currentCode, lastRuntimeLog);
      aggMessages.push(...res.messages.map(m => `Pass ${i+1}: ${m}`));
      if (!res.changes) break;
      currentCode = res.fixedCode;
      continue;
    }
    const runRes = await runJSInSandbox(currentCode, runTimeout);
    lastRuntimeLog = runRes.errorLog || '';
    if (!lastRuntimeLog) {
      break;
    }
    const res = processJSFixOnce(currentCode, lastRuntimeLog);
    aggMessages.push(...res.messages.map(m => `Pass ${i+1}: ${m}`));
    if (!res.changes) break;
    currentCode = res.fixedCode;
  }
  let report = "<b>Fixed Code:</b><br>";
  report += "<b>Last Runtime Error Log:</b><br><pre style='white-space: pre-wrap; color:#e74c3c;'>" + (lastRuntimeLog ? lastRuntimeLog.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '(none)') + "</pre>";
  report += "<pre style='white-space: pre-wrap;'>" + currentCode.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>";
  if (aggMessages.length > 0) {
    report += "<b>Fixes applied:</b><br><ul>";
    aggMessages.forEach(m => report += `<li>${m}</li>`);
    report += "</ul>";
  } else {
    report += "<i>No automated fixes applied.</i>";
  }
  return report;
}
function renderBubble(text) {
  const bubble = el('div', { class: 'bubble' });
  try {
    if (localStorage.getItem('use_public_tunnel') === '1') {
      try { text = normalizeLLaMaMarkup(String(text || '')); } catch (e) {}
    }
  } catch (e) {}
  const imageMatch = /^Image: (https?:\/\/\S+)/.exec(text);
  if (imageMatch) {
    const url = imageMatch[1];
    const imgEl = el('img', {src: url, alt: 'Image', style:'max-width:100%; border-radius:12px; display:block;'});
    bubble.appendChild(el('p', {}, `Here's an image:`));
    bubble.appendChild(imgEl);
  } else {
    bubble.appendChild(renderMarkdown(text));
  }
  return bubble;
}

function normalizeLLaMaMarkup(s) {
  if (!s || typeof s !== 'string') return s;
  let out = String(s);
  out = out.replace(/^#{1,6}\s*(system|user|assistant)[:\s-]*\n?/gim, '');
  out = out.replace(/^\s*(user|assistant|system)\s*[:\-]\s*/gim, '');
  try {
    out = out.replace(/response\s*:\s*"([\s\S]*?)"/gi, (_, p1) => p1);
  } catch (e) {}
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}
let lastBotKey = null;
let pendingMessageKey = null;
let replyTargetIndex = null;
let awaitingAnswer = false; 
function levenshteinDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}
function smartStringSimilarity(a, b) {
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();
  if (!a.length || !b.length) return 0;
  const lev = levenshteinDistance(a, b);
  const levScore = 1 - lev / Math.max(a.length, b.length);
  const setA = new Set(a);
  const setB = new Set(b);
  const overlap = [...setA].filter(x => setB.has(x)).length;
  const charScore = overlap / new Set([...setA, ...setB]).size;
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const wordOverlap = wordsA.filter(w => wordsB.includes(w)).length;
  const wordScore = wordOverlap / Math.max(wordsA.length, wordsB.length);
  const bigrams = str => Array.from({ length: str.length - 1 }, (_, i) => str.slice(i, i+2));
  const biA = new Set(bigrams(a));
  const biB = new Set(bigrams(b));
  const biOverlap = [...biA].filter(x => biB.has(x)).length;
  const bigramScore = biOverlap / Math.max(biA.size, biB.size, 1);
  let bonus = 0;
  if (a[0] === b[0]) bonus += 0.05;
  if (a[a.length-1] === b[b.length-1]) bonus += 0.05;
  const score = (
    0.4 * levScore +
    0.25 * wordScore +
    0.2 * bigramScore +
    0.15 * charScore +
    bonus
  );
  return Math.min(1, score);
}
function jaroWinklerSimilarity(s1, s2) {
  try {
    s1 = String(s1 || '').toLowerCase();
    s2 = String(s2 || '').toLowerCase();
    if (!s1.length && !s2.length) return 1;
    if (!s1.length || !s2.length) return 0;
    if (s1 === s2) return 1;
    const matchDistance = Math.max(Math.floor(Math.max(s1.length, s2.length) / 2) - 1, 0);
    const s1Matches = new Array(s1.length).fill(false);
    const s2Matches = new Array(s2.length).fill(false);
    let matches = 0;
    for (let i = 0; i < s1.length; i++) {
      const start = Math.max(0, i - matchDistance);
      const end = Math.min(i + matchDistance + 1, s2.length);
      for (let j = start; j < end; j++) {
        if (s2Matches[j]) continue;
        if (s1[i] !== s2[j]) continue;
        s1Matches[i] = true;
        s2Matches[j] = true;
        matches++;
        break;
      }
    }
    if (matches === 0) return 0;
    let t = 0;
    let k = 0;
    for (let i = 0; i < s1.length; i++) {
      if (!s1Matches[i]) continue;
      while (!s2Matches[k]) k++;
      if (s1[i] !== s2[k]) t++;
      k++;
    }
    t = t / 2;
    const m = matches;
    const jaro = ((m / s1.length) + (m / s2.length) + ((m - t) / m)) / 3;
    let prefix = 0;
    const prefixLimit = 4;
    for (let i = 0; i < Math.min(prefixLimit, s1.length, s2.length); i++) {
      if (s1[i] === s2[i]) prefix++; else break;
    }
    const scalingFactor = 0.1;
    return Math.min(1, jaro + prefix * scalingFactor * (1 - jaro));
  } catch (e) { return 0; }
}
const new_bigCorpus = `
I have loved you quietly for a long time, hoping you might notice. Every day I think of you, and my heart feels lighter when you smile.
The sun sets slowly, painting skies in orange hues. Roses are red, violets are blue, sugar is sweet, and so are you.
Dear team, I hope this email finds you well. I wanted to update you on the project progress.
Function greet(name) { console.log('Hello, ' + name + '!'); }
`;
const new_sentences = new_bigCorpus
  .replace(/\n/g, ' ')
  .split(/(?<=[.?!])\s+/)
  .filter(s => s.trim().length > 0);
function new_levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
      else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,    
          matrix[i][j - 1] + 1,    
          matrix[i - 1][j - 1] + 1 
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
function new_findDatasetKey(prompt){
  const keys = Object.keys(new_jsonDataset);
  let bestKey = null;
  let lowestDistance = Infinity;
  for(const key of keys){
    const distance = new_levenshtein(prompt.toLowerCase(), key.toLowerCase());
    if(distance < lowestDistance){
      lowestDistance = distance;
      bestKey = key;
    }
  }
  const threshold = Math.max(3, Math.floor(bestKey.length / 2));
  return lowestDistance <= threshold ? bestKey : null;
}
function new_generateExtendedResponseCoherent(starter){
  const numSentences = 3; 
  let chosenSentences = [];
  for(let i=0;i<numSentences;i++){
    const sentence = new_sentences[Math.floor(Math.random()*new_sentences.length)];
    chosenSentences.push(sentence);
  }
  return starter + " " + chosenSentences.join(" ");
}
function new_generateFullResponse(prompt){
  const key = new_findDatasetKey(prompt);
  const starter = key ? new_jsonDataset[key].responses[Math.floor(Math.random()*new_jsonDataset[key].responses.length)] : "Got it! Here's something I came up with:";
  return new_generateExtendedResponseCoherent(starter);
}
async function findClosestKey(input, dataset, synonyms, promptTone = null, desiredType = null) {
  input = String(input || '').toLowerCase().trim();
  try { computeAndSetLastFindClosestCandidates(input, dataset, 8); } catch (e) {}
  const myAbortToken = thinkAbortToken;
  const rawInput = input;
  let tagged = [];
  try { if (typeof tagWords === 'function') tagged = tagWords(rawInput) || []; } catch (e) { tagged = []; }
  const adjSet = new Set(tagged.filter(t=>/adject/i.test(t.tag)).map(t=>String(t.word||'').toLowerCase()));
  const nounSet = new Set(tagged.filter(t=>/noun/i.test(t.tag)).map(t=>String(t.word||'').toLowerCase()));
  const verbSet = new Set(tagged.filter(t=>/verb/i.test(t.tag)).map(t=>String(t.word||'').toLowerCase()));
  const rawTokens = rawInput.split(/\s+/).filter(Boolean).map(t=>t.toLowerCase());
  const filteredTokens = rawTokens.filter(t => !adjSet.has(t));
  if (filteredTokens.length > 0) input = filteredTokens.join(' ');
  for (const k in dataset) {
    if (!k) continue;
    if (isBlocked(k)) continue;
    if (k.toLowerCase() === input) {
  console.log(`findClosestKey -> exact match to key "${k}"`);
  clearThinkStatus();
  return k;
    }
  }
  const keyMeta = [];
  for (const k in dataset) {
    if (!k) continue;
    if (isBlocked(k)) continue;
    const keyLower = k.toLowerCase();
    let keyTone = null;
    try {
      keyTone = detectTone(k) || null;
      if (!keyTone && dataset[k] && dataset[k].responses) {
        const sample = Array.isArray(dataset[k].responses) ? dataset[k].responses.slice(0,3).join(' ') : '';
        keyTone = detectTone(sample) || keyTone;
      }
    } catch (e) { keyTone = null; }
    let keyType = null;
    try {
      keyType = detectType(k) || null;
      if (!keyType && dataset[k] && dataset[k].responses) {
        const sample = Array.isArray(dataset[k].responses) ? dataset[k].responses.slice(0,3).join(' ') : '';
        keyType = detectType(sample) || keyType;
      }
    } catch (e) { keyType = null; }
    keyMeta.push({ key: k, keyLower, keyTone, keyType, len: k.length });
  }
  const _esc = s => String(s).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  let effectiveKeyMeta = keyMeta;
  try {
    if (thinkMode) {
      const important = Array.isArray(extractImportant) ? extractImportant(input) : (typeof extractImportant === 'function' ? extractImportant(input) : []);
      if (Array.isArray(important) && important.length > 0) {
        const words = important.map(w => String(w || '').toLowerCase()).filter(Boolean);
        if (words.length > 0) {
          effectiveKeyMeta = keyMeta.filter(km => {
            for (const w of words) {
              try {
                const re = new RegExp('\\b' + _esc(w) + '\\b', 'i');
                if (re.test(km.keyLower)) return true;
              } catch (e) {}
            }
            return false;
          });
          if (!effectiveKeyMeta || effectiveKeyMeta.length === 0) effectiveKeyMeta = keyMeta;
        }
      }
    }
  } catch (e) {
    effectiveKeyMeta = keyMeta;
  }
  const tokens = input.split(/\s+/).filter(Boolean);
  let replacements;
  if (desiredType === 'question') {
    replacements = tokens.map(t => [String(t).toLowerCase()]);
  } else {
    replacements = tokens.map(t => {
      const low = t.toLowerCase();
      const set = new Set([low]);
      try { const ac = autocorrect(low); if (ac && ac !== low) set.add(ac); } catch(e) {}
      if (synonyms && synonyms[low] && Array.isArray(synonyms[low])) {
        for (const s of synonyms[low]) {
          try {
            if (!s || isBlocked(s)) continue;
            const sl = String(s).toLowerCase();
            set.add(sl);
            const acs = autocorrect(sl);
            if (acs && acs !== sl) set.add(acs);
          } catch(e) {}
        }
      }
      return Array.from(set);
    });
  }
  const combinationCount = replacements.reduce((acc, r) => acc * Math.max(1, r.length), 1);
  const _singleSet = new Set();
  for (const r of replacements) for (const tok of r) { if (tok) _singleSet.add(String(tok).toLowerCase()); }
  try {
    for (const tok of Array.from(_singleSet)) {
      try { const ac = autocorrect(tok); if (ac && ac !== tok) _singleSet.add(ac); } catch(e) {}
    }
  } catch(e) {}
  const singleVariants = Array.from(_singleSet);
  const totalVariants = combinationCount + singleVariants.length;
  const DEFAULT_MAX_VARIANTS = 500;
  const THINK_MAX_VARIANTS = 10000000;
  function getThinkChunk() {
    try {
      const raw = parseInt(localStorage.getItem('think_speed') || '', 10);
      if (!isFinite(raw) || raw <= 0) return 1000;
      return Math.min(10000, Math.max(1, Math.floor(raw)));
    } catch (e) { return 1000; }
  }
  const limit = thinkMode ? THINK_MAX_VARIANTS : DEFAULT_MAX_VARIANTS;
  function setThinkStatus(elapsedSec, percent) {
    try {
      const conv = currentConv();
      if (!conv) return;
      const idx = conv.messages.findIndex(m => m._thinkStatus);
      const text = `Thinking... (${Math.max(0, Math.floor(elapsedSec))}s, ${Math.max(0, Math.min(100, Math.floor(percent)))}%)`;
      if (idx >= 0) {
        conv.messages[idx].content = text;
        try {
          const ts = conv.messages[idx].ts;
          const row = chatEl.querySelector(`.msg[data-ts="${ts}"]`);
          if (row) {
            const thinkText = row.querySelector('.think-text');
            if (thinkText) {
              thinkText.textContent = text;
              persist();
              return;
            }
          }
        } catch (e) {}
        renderMessages();
        return;
      }
      conv.messages.push({ role: 'assistant', content: text, ts: Date.now(), _thinkStatus: true });
      persist();
      renderMessages();
    } catch (e) {}
  }
  function clearThinkStatus() {
    try {
      const conv = currentConv();
      if (!conv) return;
      const before = conv.messages.length;
      conv.messages = conv.messages.filter(m => !m._thinkStatus);
      if (conv.messages.length !== before) {
        persist(); renderMessages();
      }
    } catch (e) {}
  }
  if (totalVariants <= 1 || totalVariants > limit) {
    let bestKey = null;
    let bestScore = Infinity;
    for (const km of effectiveKeyMeta) {
      let distance = smartStringSimilarity(input, km.keyLower);
      try {
        for (const n of Array.from(nounSet)) {
          if (!n) continue;
          const re = new RegExp('\\b' + _esc(n) + '\\b', 'i');
          if (re.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.6) - 1); break; }
        }
        for (const v of Array.from(verbSet)) {
          if (!v) continue;
          const re2 = new RegExp('\\b' + _esc(v) + '\\b', 'i');
          if (re2.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.8) - 1); break; }
        }
      } catch (e) {}
      if (promptTone && km.keyTone && promptTone === km.keyTone) distance = Math.max(0, Math.floor(distance * 0.6) - 1);
      try {
        const tonePref = (aiTraits && km.keyTone && aiTraits[km.keyTone]) ? aiTraits[km.keyTone] : 0;
        if (tonePref > 0) {
          const strength = 0.9;
          distance = Math.max(0, Math.floor(distance * (1 - tonePref * strength)));
        }
      } catch (e) {}
      if (desiredType && km.keyType && desiredType === km.keyType) distance = Math.max(0, Math.floor(distance * 0.5) - 1);
      let allowMatch = true;
      if (desiredType === 'question') {
        try {
          const impInput = (typeof extractImportant === 'function') ? extractImportant(input) : [];
          const impKey = (typeof extractImportant === 'function') ? extractImportant(km.keyLower) : [];
          const overlap = impInput.filter(w => impKey.includes(w));
          if (!overlap || overlap.length === 0) allowMatch = false;
        } catch (e) {  }
      }
      const maxAllowed = (desiredType === 'question') ? Math.max(0, Math.floor(km.len / 6)) : Math.max(1, Math.floor(km.len / 2));
      if (allowMatch && distance < bestScore && distance <= maxAllowed) {
        bestScore = distance; bestKey = km.key;
      }
    }
    if (bestKey) console.log(`findClosestKey -> selected "${bestKey}" (score=${bestScore}) [fallback] for input "${input}"`);
    else console.log(`findClosestKey -> no suitable key found [fallback] for input "${input}"`);
  clearThinkStatus();
  return bestKey;
  }
  const winCounts = Object.create(null);
  const scoreSums = Object.create(null);
  let generated = 0;
  const idxs = Array(replacements.length).fill(0);
  const lenses = replacements.map(r => Math.max(1, r.length));
  let done = false;
  function buildVariant() {
    return replacements.map((r, i) => r[idxs[i]] || r[0]).join(' ');
  }
  function advance() {
    for (let i = idxs.length - 1; i >= 0; i--) {
      idxs[i]++;
      if (idxs[i] < lenses[i]) return true;
      idxs[i] = 0;
    }
    return false;
  }
  const chunkSize = thinkMode ? getThinkChunk() : Math.min(limit, 1000);
  const startMs = Date.now();
  const totalToProcess = Math.max(1, Math.min(totalVariants, limit));
  function evaluateVariantString(variantStr) {
    let foundWinner = false;
    for (const km of effectiveKeyMeta) {
      let distance = smartStringSimilarity(variantStr, km.keyLower);
      try {
        const conv = currentConv();
        const model = conv && conv.model ? String(conv.model).toLowerCase() : 'default';
        if (model === 'default' || model === 'bloxd') {
          const simToOrig = smartStringSimilarity(variantStr, rawInput);
          const penalty = Math.floor((1 - simToOrig) * 2); 
          distance = distance + penalty;
        }
      } catch (e) {}
      try {
        for (const n of Array.from(nounSet)) {
          if (!n) continue;
          const re = new RegExp('\\b' + _esc(n) + '\\b', 'i');
          if (re.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.6) - 1); break; }
        }
        for (const v of Array.from(verbSet)) {
          if (!v) continue;
          const re2 = new RegExp('\\b' + _esc(v) + '\\b', 'i');
          if (re2.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.8) - 1); break; }
        }
      } catch (e) {}
      if (promptTone && km.keyTone && promptTone === km.keyTone) distance = Math.max(0, Math.floor(distance * 0.6) - 1);
      try {
        const tonePref = (aiTraits && km.keyTone && aiTraits[km.keyTone]) ? aiTraits[km.keyTone] : 0;
        if (tonePref > 0) {
          const strength = 0.9;
          distance = Math.max(0, Math.floor(distance * (1 - tonePref * strength)));
        }
      } catch (e) {}
      if (desiredType && km.keyType && desiredType === km.keyType) distance = Math.max(0, Math.floor(distance * 0.5) - 1);
      let allowVarMatch = true;
      if (desiredType === 'question') {
        try {
          const impVariant = (typeof extractImportant === 'function') ? extractImportant(variantStr) : [];
          const impKey = (typeof extractImportant === 'function') ? extractImportant(km.keyLower) : [];
          const overlapVar = impVariant.filter(w => impKey.includes(w));
          if (!overlapVar || overlapVar.length === 0) allowVarMatch = false;
        } catch (e) {}
      }
      const maxAllowedVar = (desiredType === 'question') ? Math.max(0, Math.floor(km.len / 6)) : Math.max(1, Math.floor(km.len / 2));
      if (allowVarMatch && distance <= maxAllowedVar) {
        winCounts[km.key] = (winCounts[km.key] || 0) + 1;
        scoreSums[km.key] = (scoreSums[km.key] || 0) + distance;
        foundWinner = true;
      }
    }
    return foundWinner;
  }
  for (let sv of singleVariants) {
    if (myAbortToken !== thinkAbortToken) { console.log('findClosestKey -> aborted by user'); clearThinkStatus(); return null; }
    if (generated >= limit) break;
    try { setThinkStatus(Math.floor((Date.now() - startMs) / 1000), Math.floor(((generated+1) / totalToProcess) * 100)); } catch (e) {}
    evaluateVariantString(sv);
    generated++;
  }
  while (!done && generated < limit) {
    if (myAbortToken !== thinkAbortToken) {
      console.log('findClosestKey -> aborted by user');
      clearThinkStatus();
      return null;
    }
    const batchEnd = Math.min(limit, generated + chunkSize);
    for (; generated < batchEnd; generated++) {
      if (myAbortToken !== thinkAbortToken) {
        console.log('findClosestKey -> aborted by user');
        clearThinkStatus();
        return null;
      }
      const variant = buildVariant();
      try {
        const elapsedSec = Math.floor((Date.now() - startMs) / 1000);
        const processed = generated + 1;
        const pct = Math.floor((processed / totalToProcess) * 100);
        setThinkStatus(elapsedSec, pct);
      } catch (e) {}
      let winner = null;
      let winnerScore = Infinity;
      for (const km of effectiveKeyMeta) {
        let distance = smartStringSimilarity(variant, km.keyLower);
        try {
          const conv = currentConv();
          const model = conv && conv.model ? String(conv.model).toLowerCase() : 'default';
          if (model === 'default' || model === 'bloxd') {
            const simToOrig = smartStringSimilarity(variant, rawInput);
            const penalty = Math.floor((1 - simToOrig) * 2);
            distance = distance + penalty;
          }
        } catch (e) {}
        try {
          for (const n of Array.from(nounSet)) {
            if (!n) continue;
            const re = new RegExp('\\b' + _esc(n) + '\\b', 'i');
            if (re.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.6) - 1); break; }
          }
          for (const v of Array.from(verbSet)) {
            if (!v) continue;
            const re2 = new RegExp('\\b' + _esc(v) + '\\b', 'i');
            if (re2.test(km.keyLower)) { distance = Math.max(0, Math.floor(distance * 0.8) - 1); break; }
          }
        } catch (e) {}
        if (promptTone && km.keyTone && promptTone === km.keyTone) distance = Math.max(0, Math.floor(distance * 0.6) - 1);
        try {
          const tonePref = (aiTraits && km.keyTone && aiTraits[km.keyTone]) ? aiTraits[km.keyTone] : 0;
          if (tonePref > 0) {
            const strength = 0.9;
            distance = Math.max(0, Math.floor(distance * (1 - tonePref * strength)));
          }
        } catch (e) {}
        if (desiredType && km.keyType && desiredType === km.keyType) distance = Math.max(0, Math.floor(distance * 0.5) - 1);
        let allowVarMatch = true;
        if (desiredType === 'question') {
          try {
            const impVariant = (typeof extractImportant === 'function') ? extractImportant(variant) : [];
            const impKey = (typeof extractImportant === 'function') ? extractImportant(km.keyLower) : [];
            const overlapVar = impVariant.filter(w => impKey.includes(w));
            if (!overlapVar || overlapVar.length === 0) allowVarMatch = false;
          } catch (e) {}
        }
        const maxAllowedVar = (desiredType === 'question') ? Math.max(0, Math.floor(km.len / 6)) : Math.max(1, Math.floor(km.len / 2));
        if (allowVarMatch && distance < winnerScore && distance <= maxAllowedVar) {
          winnerScore = distance; winner = km.key;
        }
      }
      if (winner) {
        winCounts[winner] = (winCounts[winner] || 0) + 1;
        scoreSums[winner] = (scoreSums[winner] || 0) + winnerScore;
      }
      if (!advance()) { done = true; break; }
    }
    await new Promise(r => setTimeout(r, 0));
  }
  clearThinkStatus();
  let chosen = null;
  let bestWins = -1;
  let bestAvg = Infinity;
  for (const k of Object.keys(winCounts)) {
    const wins = winCounts[k];
    const avg = (scoreSums[k] || 0) / wins;
    if (wins > bestWins || (wins === bestWins && avg < bestAvg)) {
      chosen = k; bestWins = wins; bestAvg = avg;
    }
  }
  if (chosen) {
    console.log(`findClosestKey -> chosen "${chosen}" wins=${bestWins} avgScore=${(bestAvg||0).toFixed(2)} variantsExamined=${generated}`);
  } else {
    console.log(`findClosestKey -> no winner after examining ${generated} variants for input "${input}"`);
  }
  return chosen;
}
async function findClosestKeyHeuristic(input, dataset, synonyms, promptTone = null, desiredType = null) {
  try {
    const conv = currentConv();
    const model = conv && conv.model ? String(conv.model).toLowerCase() : 'default';
    if (!['bloxd', 'default'].includes(model)) {
      return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
    }
    if (typeof thinkMode !== 'undefined' && thinkMode) {
      return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
    }
    if (model === 'bloxd') {
      try {
        const rawQ = String(input || '');
        const q = rawQ.toLowerCase().trim();
        if (!q) return null;
        function keepLetters(s) { try { return String(s || '').toLowerCase().replace(/[^a-z]+/g, ''); } catch(e){ return String(s||'').toLowerCase(); } }
        const cleanSearch = keepLetters(q);
        if (!cleanSearch) return null;
        function positionalMatchScore(search, entry) {
          const s = keepLetters(search);
          const e = keepLetters(entry);
          if (!s || !e) return { score: 0, matched: 0, contiguous: 0 };
          let bestMatched = 0;
          let bestContig = 0;
          let bestStart = 0;
          for (let start = 0; start < e.length; start++) {
            let matched = 0;
            let contig = 0;
            let curContig = 0;
            for (let i = 0; i < s.length; i++) {
              const ei = start + i;
              if (ei >= e.length) break;
              if (s[i] === e[ei]) {
                matched++; curContig++; if (curContig > contig) contig = curContig;
              } else {
                curContig = 0;
              }
            }
            if (matched > bestMatched || (matched === bestMatched && contig > bestContig)) {
              bestMatched = matched; bestContig = contig; bestStart = start;
            }
            if (bestMatched === s.length) break;
          }
          const matched = bestMatched;
          const contig = bestContig;
          const lenBias = Math.max(0, 1 - ((e.length - s.length) / Math.max(e.length, s.length)));
          const fracMatched = matched / s.length;
          const fracContig = contig / s.length;
          const score = (fracMatched * 0.65) + (fracContig * 0.25) + (lenBias * 0.10);
          return { score: Math.min(1, score), matched: matched, contiguous: contig, start: bestStart };
        }
        let bestKey = null;
        let bestScore = -1;
        let bestMatched = -1;
        let bestContig = -1;
        for (const k in dataset) {
          if (!k) continue;
          if (isBlocked(k)) continue;
          const res = positionalMatchScore(cleanSearch, String(k || ''));
          if (!res) continue;
          const score = res.score;
          if (score > bestScore || (score === bestScore && (res.matched > bestMatched || (res.matched === bestMatched && res.contiguous > bestContig)))) {
            bestScore = score; bestKey = k; bestMatched = res.matched; bestContig = res.contiguous;
          }
        }
        if (!bestKey || bestScore <= 0) return null;
        return bestKey;
      } catch (e) {
        return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
      }
    }
  const q = String(input || '').toLowerCase().trim();
  try { computeAndSetLastFindClosestCandidates(q, dataset, 8); } catch (e) {}
    if (!q) return null;
    let tokens = q.split(/\s+/).filter(Boolean);
    try { const imp = (typeof extractImportant === 'function') ? extractImportant(q) : []; if (Array.isArray(imp) && imp.length) tokens = imp.map(s=>String(s||'').toLowerCase()).filter(Boolean); } catch (e) {}
    if (!tokens.length) return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
    const keyEntries = [];
    for (const k in dataset) {
      if (!k) continue;
      if (isBlocked(k)) continue;
      keyEntries.push({ key: k, keyLower: k.toLowerCase() });
    }
    for (const ke of keyEntries) {
      let all = true;
      for (const t of tokens) { if (!ke.keyLower.match(new RegExp('\\b' + t.replace(/[\\-\\/\\^$*+?.()|[\]{}]/g,'\\$&') + '\\b'))) { all = false; break; } }
      if (all) {
        return ke.key;
      }
    }
    let best = null; let bestScore = 0;
    for (const ke of keyEntries) {
      let match = 0;
      for (const t of tokens) { if (ke.keyLower.indexOf(t) !== -1) match++; }
      const score = match / Math.max(1, tokens.length);
      const lenBias = Math.max(0, 1 - (Math.abs(ke.keyLower.length - q.length) / Math.max(ke.keyLower.length, q.length, 1)));
      const combined = (score * 0.8) + (lenBias * 0.2);
      if (combined > bestScore) { bestScore = combined; best = ke.key; }
    }
  if (best && bestScore >= 0.55) return best;
    return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
  } catch (e) {
    try { console.error('findClosestKeyHeuristic failed', e); } catch (ee) {}
    return await findClosestKey(input, dataset, synonyms, promptTone, desiredType);
  }
}
function detectTone(text) {
  try {
    const angryWords = ["hate", "stupid", "idiot", "mad", "angry", "annoying", "dumb", "shut up", "useless", "terrible", "worst", "awful", "sucks", "f***", "fuk", "fml", "i hate you", "i'm mad", "i am mad", "i am angry", "i'm angry"];
    const excitedWords = ["excited", "yay", "awesome", "amazing", "so happy", "can't wait", "lets go", "let's go", "woo", "wooo", "so cool", "so fun", "hyped", "im so excited", "i'm so excited", "this is great", "so excited", "incredible", "fantastic", "love this", "i love this", "i love you"];
    if (!text || typeof text !== 'string') return null;
    const lower = text.toLowerCase();
    const uppercaseLetters = (text.match(/[A-Z]/g) || []).length;
    const isAllCaps = text === text.toUpperCase() && uppercaseLetters >= 4;
    const manyExclaim = (text.match(/!{2,}/g) || []).length > 0;
    const hasAngryWord = angryWords.some(w => lower.includes(w));
    const hasExcitedWord = excitedWords.some(w => lower.includes(w));
    if (hasAngryWord) return 'angry';
    if (hasExcitedWord && (isAllCaps || manyExclaim)) return 'excited';
    if (manyExclaim) {
      if (hasExcitedWord) return 'excited';
      return 'excited';
    }
    if (isAllCaps && hasExcitedWord) return 'excited';
    return null;
  } catch (e) { return null; }
}
function getTopKeyCandidates(input, dataset, limit = 6) {
  try {
    if (!input || !dataset) return [];
    const q = String(input || '').toLowerCase().trim();
    const entries = Object.keys(dataset || {}).filter(k => k && !isBlocked(k)).map(k => ({ key: k, score: smartStringSimilarity(q, k.toLowerCase()) }));
    entries.sort((a,b) => a.score - b.score);
    return entries.slice(0, limit).map(e => ({ key: e.key, score: Number((e.score).toFixed(3)) }));
  } catch (e) { return []; }
}
function detectType(text) {
  if (!text || typeof text !== 'string') return 'normal';
  const t = text.trim();
  const lower = t.toLowerCase();
  const interrogatives = ['how to', 'how do', 'how can', 'what is', 'what are', 'why', 'where', 'who', 'when', 'which', 'how', "what's", 'whats'];
  if (/[?]\s*$/.test(t)) return 'question';
  for (const q of interrogatives) {
    if (lower.startsWith(q)) return 'question';
  }
  const instructionStarts = ['please ', 'make ', 'create ', 'build ', 'write ', 'generate ', 'implement ', 'add ', 'remove ', 'delete ', 'update ', 'install ', 'run ', 'start ', 'stop ', 'convert ', 'refactor ', 'translate ', 'help me', 'send ', 'provide ', 'do:' ];
  for (const s of instructionStarts) {
    if (lower.startsWith(s)) return 'instruction';
  }
  return 'normal';
}
function getBlocklist() {
  try {
    const raw = localStorage.getItem('blocklist_v1');
    if (!raw) return [ 'sex', 'xxx', 'porn', 'buy drugs', 'naked', 'i will hurt you', 'how to hack', 'kill you' ];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(s => String(s).toLowerCase()) : [];
  } catch (e) { return [ 'sex', 'xxx', 'porn', 'buy drugs', 'naked', 'i will hurt you', 'how to hack', 'kill you' ]; }
}
function setBlocklist(arr) { localStorage.setItem('blocklist_v1', JSON.stringify(arr || [])); }
function isBlocked(text) {
  if (!text) return false;
  const t = String(text).toLowerCase();
  const bl = getBlocklist();
  for (const w of bl) {
    if (!w) continue;
    const safe = w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const re = new RegExp('\\b' + safe + '\\b', 'i');
    if (re.test(t) || (t.includes(w) && /[^a-z0-9]/i.test(w))) return true;
  }
  return false;
}
const AI_BUILDER_RECENT_KEY = 'ai_builder_recent_v1';
const AI_BUILDER_HISTORY_KEY = 'ai_builder_history_v1';
const AI_BUILDER_FIRST_SHOWN = 'ai_builder_first_shown_v1';
const AI_BUILDER_PERMA_DISABLED_KEY = 'ai_builder_permanent_disabled_v1';
const TEMP_DISABLE_AIBUILDER = true;
const TEMP_DISABLE_AIBUILDER_REASON = 'AI Builder temporarily disabled for repairs';
function setAiBuilderPermanentlyDisabled(reason) {
  try {
    const payload = { ts: Date.now(), reason: String(reason || 'Undergoing maintenance') };
    localStorage.setItem(AI_BUILDER_PERMA_DISABLED_KEY, JSON.stringify(payload));
  } catch (e) {}
}
function getAiBuilderPermanentlyDisabled() {
  try {
    if (typeof TEMP_DISABLE_AIBUILDER !== 'undefined' && TEMP_DISABLE_AIBUILDER) {
      return { ts: Date.now(), reason: String(TEMP_DISABLE_AIBUILDER_REASON || 'AI Builder under maintenance') };
    }
    const raw = localStorage.getItem(AI_BUILDER_PERMA_DISABLED_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed || null;
  } catch (e) { return null; }
}
function clearAiBuilderPermanentDisabled() {
  try { localStorage.removeItem(AI_BUILDER_PERMA_DISABLED_KEY); } catch (e) {}
}
function _readJson(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (e) { return fallback; } }
function _writeJson(key, obj) { try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) {} }
function getAiBuilderUsed() {
  try {
    const rec = _readJson(AI_BUILDER_RECENT_KEY, { start: 0, items: [] });
    if (!rec || typeof rec !== 'object') return [];
    const start = Number(rec.start) || 0;
    if (start && (Date.now() - start) >= 24 * 60 * 60 * 1000) {
      try {
        const hist = getAiBuilderHistory();
        const toMove = Array.isArray(rec.items) ? rec.items : [];
        const now = Date.now();
        for (const it of toMove) {
          hist.push({ name: it, ts: now });
        }
        setAiBuilderHistory(hist);
      } catch (e) {}
      const fresh = { start: Date.now(), items: [] };
      _writeJson(AI_BUILDER_RECENT_KEY, fresh);
      return [];
    }
    return Array.isArray(rec.items) ? rec.items : [];
  } catch (e) { return []; }
}
function setAiBuilderUsed(arr) {
  try {
    const rec = _readJson(AI_BUILDER_RECENT_KEY, { start: Date.now(), items: [] });
    rec.start = rec.start || Date.now();
    rec.items = Array.isArray(arr) ? arr : [];
    _writeJson(AI_BUILDER_RECENT_KEY, rec);
  } catch (e) {}
}
function addAiBuilderUsed(name) {
  try {
    if (!name) return;
    const lw = String(name).toLowerCase();
    const list = getAiBuilderUsed();
    if (!list.includes(lw)) {
      list.push(lw);
      setAiBuilderUsed(list);
    }
    try {
      const hist = getAiBuilderHistory();
      hist.push({ name: lw, ts: Date.now() });
      setAiBuilderHistory(hist);
    } catch (e) {}
  } catch (e) {}
}
function getAiBuilderHistory() { return _readJson(AI_BUILDER_HISTORY_KEY, []); }
function setAiBuilderHistory(arr) { _writeJson(AI_BUILDER_HISTORY_KEY, Array.isArray(arr) ? arr : []); }
function getAiBuilderCooldown() {
  try { const v = parseInt(localStorage.getItem('ai_builder_cooldown_until') || '0', 10); return isFinite(v) && v > 0 ? v : null; } catch (e) { return null; }
}
function setAiBuilderCooldown(ts) {
  try { if (!ts) localStorage.removeItem('ai_builder_cooldown_until'); else localStorage.setItem('ai_builder_cooldown_until', String(ts)); } catch (e) {}
}
function showBuilderLimitPopup(untilTs) {
  try {
    const until = untilTs ? new Date(untilTs) : new Date(Date.now() + 24*60*60*1000);
    const msg = `Reached limit for builder, try again at ${until.toLocaleString()}`;
    let old = document.getElementById('builderLimitPopup');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'builderLimitPopup';
    overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;';
    const box = document.createElement('div');
    box.style = 'background:var(--elev);color:var(--text);padding:1.2em;border-radius:12px;max-width:90vw;width:420px;box-shadow:0 8px 32px #0003;text-align:center;';
    box.innerHTML = `<div style='font-size:1.05rem;margin-bottom:0.6rem; font-weight:700;'>Reached limit for AI Builder</div><div style='color:var(--muted);margin-bottom:0.8rem;'>Try again at ${until.toLocaleString()}</div>`;
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.className = 'btn';
    closeBtn.style = 'margin-top:8px;'; closeBtn.onclick = () => overlay.remove();
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  } catch (e) {}
}
function updateAiBuilderButtonState() {
  try {
    const perma = getAiBuilderPermanentlyDisabled();
    if (perma) {
      const aiBtn = document.getElementById('aiBuilderToggle');
      if (aiBtn) {
        aiBtn.disabled = true;
        aiBtn.style.outline = '3px solid #f39c12';
        aiBtn.style.cursor = 'not-allowed';
        aiBtn.title = perma.reason || 'AI Builder undergoing maintenance';
        aiBtn.removeEventListener('mouseenter', aiBuilderHoverHandler);
        aiBtn.removeEventListener('mouseleave', aiBuilderLeaveHandler);
        aiBtn.addEventListener('mouseenter', function showPermaTip(e){
          try {
            let tip = document.getElementById('aiBuilderHoverTip'); if (tip) tip.remove();
            tip = document.createElement('div'); tip.id = 'aiBuilderHoverTip';
            tip.style = 'position:fixed;padding:8px 10px;border-radius:8px;background:#fff;color:#111;border:1px solid #f39c12;z-index:999999;box-shadow:0 6px 18px rgba(0,0,0,0.12);';
            tip.textContent = perma.reason || 'AI Builder is undergoing maintenance';
            document.body.appendChild(tip);
            const rect = e.target.getBoundingClientRect();
            tip.style.left = (rect.left + (rect.width/2) - (tip.offsetWidth/2)) + 'px';
            tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
          } catch (e) {}
        });
        aiBtn.addEventListener('mouseleave', aiBuilderLeaveHandler);
      }
      return;
    }
    let until = getAiBuilderCooldown();
    if (until && Date.now() >= until) {
      setAiBuilderCooldown(null);
      until = null;
      try { getAiBuilderUsed(); } catch (e) {}
    }
    const aiBtn = document.getElementById('aiBuilderToggle');
    if (!aiBtn) return;
    if (until && Date.now() < until) {
      aiBtn.disabled = true;
      aiBtn.style.outline = '3px solid #e74c3c';
      aiBtn.style.cursor = 'not-allowed';
      aiBtn.addEventListener('mouseenter', aiBuilderHoverHandler);
      aiBtn.addEventListener('mouseleave', aiBuilderLeaveHandler);
    } else {
      aiBtn.disabled = false;
      aiBtn.style.outline = '';
      aiBtn.style.cursor = '';
      aiBtn.removeEventListener('mouseenter', aiBuilderHoverHandler);
      aiBtn.removeEventListener('mouseleave', aiBuilderLeaveHandler);
    }
  } catch (e) {}
}
function aiBuilderHoverHandler(e) {
  try {
    const until = getAiBuilderCooldown();
    if (!until || Date.now() >= until) return;
    const msg = `Reached limit for builder, try again at ${new Date(until).toLocaleString()}`;
    let tip = document.getElementById('aiBuilderHoverTip'); if (tip) tip.remove();
    tip = document.createElement('div'); tip.id = 'aiBuilderHoverTip';
    tip.style = 'position:fixed;padding:8px 10px;border-radius:8px;background:#fff;color:#111;border:1px solid #e74c3c;z-index:999999;box-shadow:0 6px 18px rgba(0,0,0,0.12);';
    tip.textContent = msg;
    document.body.appendChild(tip);
    const rect = e.target.getBoundingClientRect();
    tip.style.left = (rect.left + (rect.width/2) - (tip.offsetWidth/2)) + 'px';
    tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
  } catch (e) {}
}
function aiBuilderLeaveHandler() { try { const tip = document.getElementById('aiBuilderHoverTip'); if (tip) tip.remove(); } catch (e) {} }
function showAiBuilderFirstUse() {
  try {
    if (document.getElementById('aiBuilderFirstUse')) return;
    const overlay = document.createElement('div'); overlay.id = 'aiBuilderFirstUse';
    overlay.style = 'position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;';
    const box = document.createElement('div');
    box.style = 'background:var(--elev);color:var(--text);padding:18px;border-radius:12px;max-width:92vw;width:520px;box-shadow:0 12px 48px rgba(0,0,0,0.25);text-align:left;';
    box.innerHTML = `<div style='font-weight:700;font-size:1.05rem;margin-bottom:8px;'>Credits & beta notice</div><div style='color:var(--muted);line-height:1.4;'>Credits to all the amazing users of <strong>minecraft-schematics</strong> for the training data, please note the AI relies heavily on builds in training data. This is a preview of the AI Builder to come.</div>`;
    const btnRow = document.createElement('div'); btnRow.style = 'display:flex;gap:8px;justify-content:flex-end;margin-top:12px;';
    const ok = document.createElement('button'); ok.className = 'btn primary'; ok.textContent = 'Thanks'; ok.onclick = () => overlay.remove();
    btnRow.appendChild(ok); box.appendChild(btnRow); overlay.appendChild(box); document.body.appendChild(overlay);
  } catch (e) { console.error('showAiBuilderFirstUse failed', e); }
}
async function handleInstructionSync(instr) {
  const lower = instr.trim().toLowerCase();
  const fixMatch = instr.match(/fix this:\s*([\s\S]+)/i);
  if (fixMatch) {
    const codeToFix = fixMatch[1].trim() || (currentConv() && [...currentConv().messages].reverse().find(m=>m.role==='user')?.content);
    if (!codeToFix) return 'No code found to fix.';
    const report = await autoRunAndFix(codeToFix, 5, 2000);
    return report;
  }
  if (/^fix this\b/i.test(instr) && !/fix this:\s*/i.test(instr)) {
    const lastUser = currentConv() && [...currentConv().messages].reverse().find(m=>m.role==='user');
    if (!lastUser) return 'No recent user message found to fix.';
    const report = await autoRunAndFix(lastUser.content, 5, 2000);
    return report;
  }
  const imgMatch = instr.match(/(?:make an image for|make an image of|make image for|create an image for|create an image of|generate an image for|generate an image of)\s*:?\s*(.+)/i);
  if (imgMatch) {
    const query = imgMatch[1].trim();
    if (!query) return 'What should I make an image of?';
    const url = await getImage(query);
    if (url) return `Image: ${url}`;
    return `Sorry, I couldn't create an image for "${query}".`;
  }
  if (/^(new|create)\b/.test(lower) || /\bnew chat\b/.test(lower)) {
  const conv = createConversation({ model: 'default' });
    currentId = conv.id; persist(); hydrate();
    return 'Created a new chat.';
  }
  if (/clear all|delete all|remove all/.test(lower)) {
    const ok = await showConfirm('Clear all conversations?');
    if (!ok) return 'Cancelled clearing conversations.';
  conversations = []; currentId = createConversation({ model: 'default' }).id; persist(); hydrate();
    return 'All conversations cleared.';
  }
  if (/export/.test(lower)) {
    document.getElementById('exportBtn').click();
    return 'Exported conversations to a JSON download.';
  }
  if (/image (on|off|toggle)|toggle image|image toggle/.test(lower)) {
    imageMode = !imageMode;
    document.getElementById('imageToggle').classList.toggle('primary', imageMode);
    return `Image mode ${imageMode ? 'enabled' : 'disabled'}.`;
  }
  if (/jsfix (on|off|toggle)|toggle jsfix|js fix toggle/.test(lower)) {
    jsFixMode = !jsFixMode;
    jsFixToggle.classList.toggle('primary', jsFixMode);
    return `JS Fix mode ${jsFixMode ? 'enabled' : 'disabled'}.`;
  }
  if (/set theme to (dark|light)/.test(lower) || /theme (dark|light)/.test(lower)) {
    const m = lower.match(/(dark|light)/);
    if (m) {
      if (m[1] === 'light') document.body.classList.add('light');
      else document.body.classList.remove('light');
      localStorage.setItem('theme', m[1]);
      renderMessages();
      return `Theme set to ${m[1]}.`;
    }
  }
  let titleMatch = instr.match(/^(?:set )?(?:title|rename|name)[:\s]+(.+)$/i);
  if (titleMatch) {
    const newTitle = titleMatch[1].trim();
    const conv = currentConv();
    if (conv) {
      conv.title = newTitle;
      persist(); hydrate();
      return `Conversation renamed to "${newTitle}".`;
    }
    return 'No conversation found to rename.';
  }
  if (/regenerate|regen|repeat last|try again/.test(lower)) {
    const conv = currentConv();
    for (let i = conv.messages.length - 1; i >= 0; i--) {
      if (conv.messages[i].role === 'assistant') { regenerateAt(i); return 'Regenerating the last assistant message...'; }
    }
    return 'No assistant message found to regenerate.';
  }
  if (/delete (this )?(chat|conversation)|remove (this )?(chat|conversation)/.test(lower)) {
    const ok = await showConfirm('Delete this conversation?');
    if (!ok) return 'Cancelled deletion.';
    const conv = currentConv();
    if (conv) {
      conversations = conversations.filter(x => x.id !== conv.id);
  const next = conversations[0] || createConversation({ model: 'default' });
      currentId = next.id; persist(); hydrate();
      return 'Conversation deleted.';
    }
    return 'No conversation found to delete.';
  }
  return "I can try to follow some simple commands (create chat, set title, export, toggle modes, set theme, regenerate). For destructive actions like delete/clear, please confirm in the UI.";
}
function getCalmingPhrase() {
  const phrases = [
    "Let's take a deep breath.",
    "It's okay, I'm here to help.",
    "Let's stay calm and work through this.",
    "I understand you're upset.",
    "Let's try to solve this together.",
    "I'm here for you."
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
function getFallbackResponse() {
const fallbacks = [
  "idk what u said :(",
  "i forgot what u said :(",
  "Hmm, I didn't get that.",
  "either you said something wrong or i messed up what u said :(",
  "I can't find a good answer for that right now.",
  "That doesn’t seem clear to me.",
  "I might be missing something here.",
  "I'm not certain about that one.",
  "That’s a bit unclear on my end.",
  "I don’t have an answer for that at the moment.",
  "That went over my head.",
  "I’m not sure what to do with that.",
  "That doesn’t look like something I can handle.",
  "I’m drawing a blank on that.",
  "That input doesn’t make sense to me.",
  "I don’t have information on that.",
  "That’s outside what I can provide right now.",
  "I can’t respond to that properly.",
  "That seems beyond my scope.",
  "I wasn’t able to process that.",
  "That doesn’t match anything I know.",
  "I don’t recognize that input.",
  "I can’t figure that out.",
  "That doesn’t compute for me.",
  "I couldn’t make sense of that.",
  "That slipped past me.",
  "I’m unable to handle that request.",
  "That doesn’t look valid to me.",
  "I didn’t follow that properly.",
  "I wasn’t able to interpret that."
];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
async function generateBotMessage(userMessage) {
  const originalMsg = userMessage;
  const originalLower = (originalMsg || '').toLowerCase().trim();
  try {
    const conv = currentConv();
    try {
      if (conv && String(conv.model).toLowerCase() === 'bloxd') {
        try {
          let chatHistory;
          try {
            if (conv && String(conv.model).toLowerCase() === 'bloxd') {
              // build ordered starter context for Bloxd model. keep these messages out of the UI.
              chatHistory = [];
              try {
                const s1 = (typeof bloxdModelStarterVariable !== 'undefined') ? String(bloxdModelStarterVariable || '') : '';
                const b1 = (typeof bloxdModelBotMessageVariable !== 'undefined') ? String(bloxdModelBotMessageVariable || '') : '';
                const s2 = (typeof bloxdModelStarterVariable2 !== 'undefined') ? String(bloxdModelStarterVariable2 || '') : '';
                const b2 = (typeof bloxdModelBotMessageVariable2 !== 'undefined') ? String(bloxdModelBotMessageVariable2 || '') : '';
                if (s1) chatHistory.push({ role: 'user', content: s1 });
                if (b1) chatHistory.push({ role: 'assistant', content: b1 });
                if (s2) chatHistory.push({ role: 'user', content: s2 });
                if (b2) chatHistory.push({ role: 'assistant', content: b2 });
                // finally add the actual user message
                chatHistory.push({ role: 'user', content: String(originalMsg || '') });
              } catch (e) {
                chatHistory = [{ role: 'user', content: String(originalMsg || '') }];
              }
            } else {
              chatHistory = (conv && Array.isArray(conv.messages)) ? conv.messages.filter(m => !m._uiOnly).map(m => ({ role: m.role, content: m.content })) : [{ role: 'user', content: String(originalMsg || '') }];
            }
          } catch (e) {
            chatHistory = [{ role: 'user', content: String(originalMsg || '') }];
          }
          const response = await fetch("https://bloxd-api.jumbo-conversation-tunnel.workers.dev/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: chatHistory })
          });
          if (response && response.ok && response.body) {
            try {
              let placeholder = conv.messages && conv.messages.length ? conv.messages.find(m => m && m.role === 'assistant' && (m._streaming || !(m.content && String(m.content).trim()))) : null;
              if (!placeholder) {
                placeholder = { role: 'assistant', content: '', ts: Date.now(), _streaming: true };
                conv.messages.push(placeholder);
              } else {
                try { placeholder._streaming = true; placeholder.ts = Date.now(); } catch (e) {}
              }
              persist(); renderMessages();
              const typingPromise = streamMessage(placeholder);

              const reader = response.body.getReader();
              const decoder = new TextDecoder();
              let done = false;
              let buffer = '';
              let assembled = '';
              const jsonRe = /data:\s*(\{[\s\S]*?\})(?:\r?\n|$)/g;
              while (!done) {
                const { value, done: d } = await reader.read();
                if (value) {
                  buffer += decoder.decode(value, { stream: true });
                  let m;
                  while ((m = jsonRe.exec(buffer)) !== null) {
                    try {
                      const obj = JSON.parse(m[1]);
                      const part = obj.response || obj.reply || obj.text || (obj.choices && obj.choices[0] && (obj.choices[0].text || (obj.choices[0].message && obj.choices[0].message.content))) || '';
                      if (part) {
                        assembled += String(part || '');
                        placeholder.content = assembled;
                        try { persist(); } catch (e) {}
                      }
                    } catch (e) {}
                  }
                  let lastProcessed = 0;
                  jsonRe.lastIndex = 0;
                  while (jsonRe.exec(buffer) !== null) lastProcessed = jsonRe.lastIndex;
                  jsonRe.lastIndex = 0;
                  if (lastProcessed > 0) buffer = buffer.slice(lastProcessed);
                }
                if (d) done = true;
              }
              try {
                const finalMatch = buffer.match(/data:\s*(\{[\s\S]*\})/);
                if (finalMatch) {
                  const obj = JSON.parse(finalMatch[1]);
                  const part = obj.response || obj.reply || obj.text || '';
                  if (part) {
                    assembled += String(part || '');
                    placeholder.content = assembled;
                    try { persist(); } catch (e) {}
                  }
                }
              } catch (e) {}

              try { placeholder._streaming = false; } catch (e) {}
              try { await typingPromise; } catch (e) {}

              try { delete placeholder._streaming; } catch (e) {}
              try { conv.messages = (conv.messages || []).filter(m => !m || !m._uiOnly); } catch (e) {}
              persist(); renderMessages();
              return { text: assembled, _streamingHandled: true, placeholder, _streamFinished: typingPromise };
            } catch (e) {
              console.error('Error reading SSE from Bloxd API', e);
            }
          }
        } catch (err) {
          console.error('Bloxd API request failed', err);
        }
      }
    } catch (e) {}

    const usePublicTunnel = localStorage.getItem('use_public_tunnel') === '1';
    if (usePublicTunnel && typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        const chatHistory = (conv && Array.isArray(conv.messages)) ? conv.messages.filter(m => !m._uiOnly).map(m => ({ role: m.role, content: m.content })) : [{ role: 'user', content: String(originalMsg || '') }];
        const response = await fetch("https://api.jumbo-conversation-tunnel.workers.dev/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: chatHistory })
        });
        if (response && response.ok && response.body) {
          try {
            let placeholder = conv.messages && conv.messages.length ? conv.messages.find(m => m && m.role === 'assistant' && (m._streaming || !(m.content && String(m.content).trim()))) : null;
            if (!placeholder) {
              placeholder = { role: 'assistant', content: '', ts: Date.now(), _streaming: true };
              conv.messages.push(placeholder);
            } else {
              try { placeholder._streaming = true; placeholder.ts = Date.now(); } catch (e) {}
            }
            persist(); renderMessages();
            const typingPromise = streamMessage(placeholder);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let buffer = '';
            let assembled = '';
            const jsonRe = /data:\s*(\{[\s\S]*?\})(?:\r?\n|$)/g;
            while (!done) {
              const { value, done: d } = await reader.read();
              if (value) {
                buffer += decoder.decode(value, { stream: true });
                let m;
                while ((m = jsonRe.exec(buffer)) !== null) {
                  try {
                    const obj = JSON.parse(m[1]);
                    const part = obj.response || obj.reply || obj.text || (obj.choices && obj.choices[0] && (obj.choices[0].text || (obj.choices[0].message && obj.choices[0].message.content))) || '';
                    if (part) {
                      assembled += String(part || '');
                      placeholder.content = assembled;
                      try { persist(); } catch (e) {}
                    }
                  } catch (e) {}
                }
                let lastProcessed = 0;
                jsonRe.lastIndex = 0;
                while (jsonRe.exec(buffer) !== null) lastProcessed = jsonRe.lastIndex;
                jsonRe.lastIndex = 0;
                if (lastProcessed > 0) buffer = buffer.slice(lastProcessed);
              }
              if (d) done = true;
            }
            try {
              const finalMatch = buffer.match(/data:\s*(\{[\s\S]*\})/);
              if (finalMatch) {
                const obj = JSON.parse(finalMatch[1]);
                const part = obj.response || obj.reply || obj.text || '';
                if (part) {
                  assembled += String(part || '');
                  placeholder.content = assembled;
                  try { persist(); } catch (e) {}
                }
              }
            } catch (e) {}
            try { placeholder._streaming = false; } catch (e) {}
            try { await typingPromise; } catch (e) {}

            try { delete placeholder._streaming; } catch (e) {}
            try { conv.messages = (conv.messages || []).filter(m => !m || !m._uiOnly); } catch (e) {}
            persist(); renderMessages();
            return { text: assembled, _streamingHandled: true, placeholder, _streamFinished: typingPromise };
          } catch (e) {
            console.error('Error reading SSE from public tunnel', e);
          }
        }
      } catch (err) {
        console.error('Public tunnel request failed', err);
      }
    }
  } catch (e) {}
  const userMessageAutocorrected = autocorrect(originalLower);
  try {
    const infoQ = /(who\s+am\s+i|what\s+do\s+you\s+know\s+about\s+me|what\s+is\s+my\s+name|do\s+you\s+know\s+my\s+name|what\s+do\s+i\s+call\s+myself|tell\s+me\s+about\s+me)\b/i;
    if (infoQ.test(originalMsg)) {
      const info = getUserInfo() || {};
      return buildUserInfoSummary(info, true);
    }
  } catch (e) {  }
  let prefix = "";
  console.log("User message:", originalMsg);
  const tone = detectTone(originalMsg);
  if (tone === 'angry') {
    prefix = getCalmingPhrase() + " ";
  }
  if (awaitingAnswer && lastBotKey && keys[lastBotKey].replies) {
    const replies = keys[lastBotKey].replies;
    let bestReplyKey = null;
    let bestScore = Infinity;
    for (const replyKey in replies) {
      const distance = smartStringSimilarity(userMessageAutocorrected, replyKey.toLowerCase());
      if (distance < bestScore && distance <= Math.max(1, Math.floor(replyKey.length / 2))) {
        bestScore = distance;
        bestReplyKey = replyKey;
      }
    }
      if (bestReplyKey) {
      pendingMessageKey = lastBotKey || null;
      awaitingAnswer = false;
      lastBotKey = null;
      return prefix + replies[bestReplyKey];
    } else {
      awaitingAnswer = false;
      lastBotKey = null;
  let key = await findClosestKeyHeuristic(userMessage, keys, synonymsDataset);
      if (key) {
        const options = keys[key].responses;
        const resp = options[Math.floor(Math.random() * options.length)];
        lastBotKey = key;
        pendingMessageKey = key;
        awaitingAnswer = true;
        return prefix + resp;
      }
  return prefix + getFallbackResponse();
    }
  }
  const parts = (originalLower || '')
    .split(/,|\.|;|\band\b/gi)
    .map(p => p.trim())
    .filter(Boolean);
  const responses = [];
  const allContenders = [];
  for (const part of parts) {
    const partRaw = part;
    const partForMatching = autocorrect(partRaw);
    const partType = detectType(partRaw);
    if (partType === 'instruction') {
      responses.push(await handleInstructionSync(partRaw));
      continue;
    }
  let key = await findClosestKeyHeuristic(partForMatching, keys, synonymsDataset, tone, partType === 'question' ? 'question' : null);
    console.log("Prompt type detected:", partType);
    console.log("Matched key:", key);
    if (!key) {
      try {
        const topicVariants = buildTopicVariants(part, 12);
        if (topicVariants && topicVariants.length > 1) {
          for (const v of topicVariants) {
            try {
              const k2 = await findClosestKeyHeuristic(v, keys, synonymsDataset, tone, partType === 'question' ? 'question' : null);
              if (k2) { key = k2; break; }
            } catch (e) {}
          }
        }
      } catch (e) {}
  console.log("is math question: ", hasMathQuestion(partRaw));
  if (hasMathQuestion(partRaw)) {
    const mathAnswer = await solveMathFromString(partRaw);
            if (mathAnswer) {
              lastBotKey = null;
              pendingMessageKey = null;
              awaitingAnswer = false;
                  responses.push(getMathResponse() + mathAnswer);
              continue;
            }
          }
      if (partType === 'question') {
        try {
            const answer = await getAnswer(partRaw);
          if (answer && typeof answer === 'string' && answer.trim().length > 0) {
            lastBotKey = null;
            pendingMessageKey = null;
            awaitingAnswer = false;
            responses.push(answer);
            continue;
          }
        } catch (err) {
          console.error('getAnswer failed:', err);
        }
      }
      responses.push(getFallbackResponse());
      continue;
    }
    const options = keys[key] && keys[key].responses && Array.isArray(keys[key].responses) ? keys[key].responses : (keys[key] && keys[key].responses ? [String(keys[key].responses)] : null);
    if (!options || options.length === 0) {
      responses.push(getFallbackResponse());
      continue;
    }
    try {
      const top = Array.isArray(lastFindClosestCandidates) ? lastFindClosestCandidates.slice(0,6) : [];
      const others = top.filter(t => String(t.key).toLowerCase() !== String(key).toLowerCase());
      for (const o of others) allContenders.push(o);
    } catch (e) {}
    const resp = options[Math.floor(Math.random() * options.length)];
    lastBotKey = key;
    pendingMessageKey = key;
    awaitingAnswer = true; 
    responses.push(resp);
  }
  try {
    if (originalMsg && originalMsg.indexOf(',') !== -1 && responses.length > 1) {
      const r = Math.floor(Math.random() * 4);
      let sep;
      switch (r) {
        case 0: sep = ' - '; break;
        case 1: sep = '. '; break;
        case 2: sep = ' '; break;
        default: sep = ', '; break;
      }
      return { text: prefix + responses.join(sep), contenders: allContenders };
    }
  } catch (e) {}
  return { text: prefix + responses.join(" "), contenders: allContenders };
}

async function streamFromPublicTunnel(conv, userMessage) {
  try {
    const chatHistory = (conv && Array.isArray(conv.messages)) ? conv.messages.filter(m => !m._uiOnly).map(m => ({ role: m.role, content: m.content })) : [{ role: 'user', content: String(userMessage || '') }];
    const response = await fetch("https://api.jumbo-conversation-tunnel.workers.dev/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory })
    });
    if (!response || !response.ok || !response.body) throw new Error('Tunnel request failed');
    let placeholder = conv.messages && conv.messages.length ? conv.messages.find(m => m && m.role === 'assistant' && (m._streaming || !(m.content && String(m.content).trim()))) : null;
    if (!placeholder) {
      placeholder = { role: 'assistant', content: '', ts: Date.now(), _streaming: true };
      conv.messages.push(placeholder);
    } else {
      try { placeholder._streaming = true; placeholder.ts = Date.now(); } catch (e) {}
    }
    persist(); renderMessages();
    const typingPromise = streamMessage(placeholder);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let assembled = '';
    const jsonRe = /data:\s*(\{[\s\S]*?\})(?:\r?\n|$)/g;
    const multiEnabled = (localStorage.getItem('multi_message_mode') === '1');
    while (true) {
      const { value, done } = await reader.read();
      if (value) {
        buffer += decoder.decode(value, { stream: true });
        let m;
        while ((m = jsonRe.exec(buffer)) !== null) {
          try {
            const obj = JSON.parse(m[1]);
            const part = obj.response || obj.reply || obj.text || '';
                    if (part) {
                            assembled += String(part);
                    if (multiEnabled) {
                      const segments = assembled.match(/[^,\.?!]+[\.?!]?/g) || [assembled];
                      while (segments.length > 1) {
                        const complete = (segments.shift() || '').trim();
                        if (complete) {
                          const finalMsg = { role: 'assistant', content: complete, ts: Date.now() };
                          const idx = conv.messages.indexOf(placeholder);
                          if (idx === -1) conv.messages.push(finalMsg); else conv.messages.splice(idx, 0, finalMsg);
                          try { persist(); } catch (e) {}
                          try { renderMessages(); } catch (e) {}
                        }
                      }
                      assembled = segments.join('').trim();
                      placeholder.content = assembled;
                      try { persist(); } catch (e) {}
                    } else {
                      placeholder.content = assembled;
                      try { persist(); } catch (e) {}
                    }
            }
          } catch (e) {}
        }
        let last = 0; jsonRe.lastIndex = 0;
        while (jsonRe.exec(buffer) !== null) last = jsonRe.lastIndex;
        jsonRe.lastIndex = 0;
        if (last > 0) buffer = buffer.slice(last);
      }
      if (done) break;
    }
    try {
      const finalMatch = buffer.match(/data:\s*(\{[\s\S]*\})/);
      if (finalMatch) {
        const obj = JSON.parse(finalMatch[1]);
        const part = obj.response || obj.reply || obj.text || '';
        if (part) assembled += String(part);
      }
    } catch (e) {}
    try {
      if (!String(assembled || '').trim()) {
        const idx = conv.messages.indexOf(placeholder);
        if (idx !== -1) conv.messages.splice(idx, 1);
        try { persist(); } catch (e) {}
        try { renderMessages(); } catch (e) {}
        throw new Error('No streamed content from public tunnel');
      }
      if (multiEnabled) {
        const remaining = String(assembled || '').trim();
        if (remaining) {
          const finalMsg = { role: 'assistant', content: remaining, ts: Date.now() };
          const idx = conv.messages.indexOf(placeholder);
          if (idx === -1) conv.messages.push(finalMsg); else conv.messages.splice(idx, 0, finalMsg);
        }
        const pidx = conv.messages.indexOf(placeholder);
        if (pidx !== -1) conv.messages.splice(pidx, 1);
      } else {
        placeholder.content = assembled;
      }
    } catch (e) { throw e; }
    try {
      try { placeholder._streaming = false; } catch (e) {}
      try { if (typeof typingPromise !== 'undefined' && typingPromise && typeof typingPromise.then === 'function') await typingPromise; } catch (e) {}
    } catch (e) {}
    try { delete placeholder._streaming; } catch (e) {}
    try {
      conv.messages = (conv.messages || []).filter(m => !m || !m._uiOnly);
    } catch (e) {}
    persist(); renderMessages();
    return placeholder;
  } catch (err) {
    console.error('streamFromPublicTunnel failed', err);
    throw err;
  }
}
const chatEl = document.getElementById('chat');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('send');
let autoCompleteEl = document.getElementById('autocompleteContainer');
if (!autoCompleteEl) {
  autoCompleteEl = document.createElement('div');
  autoCompleteEl.id = 'autocompleteContainer';
  autoCompleteEl.style = 'max-width:900px;margin:6px auto 8px;padding:6px 12px;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-start;position:relative;z-index:5;background:transparent;';
  const composer = document.querySelector('.composer');
  composer.insertBefore(autoCompleteEl, composer.firstChild);
}
function showAutocompleteSuggestions(prefix) {
  try { if (autoCompleteEl) { autoCompleteEl.innerHTML = ''; autoCompleteEl.style.display = 'none'; } } catch (e) {}
  return;
}
let botBusy = false;
let imageUploadModeActive = false;
const themeToggle = document.getElementById('themeToggle');
const convTitle = document.getElementById('convTitle');
const historyEl = document.getElementById('history');
let conversations = JSON.parse(localStorage.getItem('conversations_v1') || '[]');
let currentId = localStorage.getItem('current_conv_id');
conversations = (conversations || []).map(c => ({ model: 'default', ...c }));
try {
  let patched = false;
  for (const conv of conversations) {
    try {
      if (!conv || Array.isArray(conv.topics) && conv.topics.length) continue;
      const counts = Object.create(null);
      for (const m of conv.messages || []) {
        try {
          const words = (typeof extractImportant === 'function') ? extractImportant(m.content || '') : [];
          if (Array.isArray(words)) for (const w of words) { if (!w) continue; counts[String(w).toLowerCase()] = (counts[String(w).toLowerCase()] || 0) + 1; }
        } catch (e) {}
      }
      const rawTopics = Object.keys(counts).sort((a,b)=>counts[b]-counts[a]).slice(0, 20);
      const nounTopics = filterToNouns(rawTopics).slice(0, 10);
      conv.topics = nounTopics.length ? nounTopics : rawTopics.slice(0, 10);
      patched = true;
    } catch (e) {}
  }
  if (patched) persist();
} catch (e) {}
if (!conversations.length) {
  const conv = createConversation({ model: 'default' });
  currentId = conv.id;
  persist();
} else {
  if (!currentId || !conversations.find(c => c.id === currentId)) {
    currentId = conversations[0].id;
  }
}
hydrate();
(async function applyStartupModel(){
  try {
    const urlParams = (typeof location !== 'undefined' && location.search) ? new URLSearchParams(location.search) : null;
    const urlModel = urlParams ? String(urlParams.get('model') || '').trim().toLowerCase() : '';
    let conv = currentConv();
    let model = (conv && conv.model) ? conv.model : 'default';
    if (urlModel) {
      model = urlModel;
      try {
        if (conv) conv.model = model;
        else {
          const c = createConversation({ model });
          currentId = c.id;
          conv = c;
        }
      } catch (e) {}
      try {
        if (model === 'jumbo-pro' || model === 'jumbo_pro' || model === 'jumbo') localStorage.setItem('use_public_tunnel', '1');
        else localStorage.setItem('use_public_tunnel', '0');
      } catch (e) {}
    }
    await applyModelToKeys(model);
  } catch (e) { console.error('Failed to apply model on startup:', e); }
})();
function createConversation(opts = {}){
  const id = 'c_' + Math.random().toString(36).slice(2);
  const conv = { id, title: opts.title || 'New chat', messages: [], model: opts.model || 'default' };
  conversations.unshift(conv);
  return conv;
}
function currentConv(){ return conversations.find(c => c.id===currentId) }
function persist(){
  try {
    for (const conv of conversations) {
      try {
        const counts = Object.create(null);
        for (const m of conv.messages || []) {
          try {
            const words = (typeof extractImportant === 'function') ? extractImportant(m.content || '') : [];
            if (Array.isArray(words)) {
              for (const w of words) {
                if (!w) continue;
                const key = String(w).toLowerCase();
                counts[key] = (counts[key] || 0) + 1;
              }
            }
          } catch (e) {}
        }
  const rawTopics = Object.keys(counts).sort((a,b) => counts[b] - counts[a]).slice(0, 20);
  const nounTopics = filterToNouns(rawTopics).slice(0, 10);
  conv.topics = nounTopics.length ? nounTopics : rawTopics.slice(0, 10);
      } catch (e) { conv.topics = conv.topics || []; }
    }
  } catch (e) {}
  localStorage.setItem('conversations_v1', JSON.stringify(conversations));
  localStorage.setItem('current_conv_id', currentId);
  checkStorageWarning();
}
function getUserInfo() {
  try {
    const raw = localStorage.getItem('userInfo') || '{}';
    return JSON.parse(raw || '{}');
  } catch (e) { return {}; }
}
function setUserInfo(obj) {
  try { localStorage.setItem('userInfo', JSON.stringify(obj || {})); } catch (e) {}
}
function currentTopics(limit = 6) {
  try {
    const conv = currentConv();
    if (!conv) return [];
  if (Array.isArray(conv.topics) && conv.topics.length) return conv.topics.slice(0, limit);
    const counts = Object.create(null);
    for (const m of conv.messages || []) {
      try {
        const words = (typeof extractImportant === 'function') ? extractImportant(m.content || '') : [];
        if (Array.isArray(words)) for (const w of words) { if (!w) continue; counts[String(w).toLowerCase()] = (counts[String(w).toLowerCase()] || 0) + 1; }
      } catch (e) {}
    }
  const raw = Object.keys(counts).sort((a,b)=>counts[b]-counts[a]).slice(0, Math.max(limit, 10));
  const nouns = filterToNouns(raw).slice(0, limit);
  return nouns.length ? nouns : raw.slice(0, limit);
  } catch (e) { return []; }
}
function buildTopicVariants(prompt, maxVariants = 8) {
  try {
    if (!prompt || typeof prompt !== 'string') return [prompt];
    const topics = currentTopics(maxVariants);
    if (!topics || !topics.length) return [prompt];
    const pronounRegex = /\b(it|this|that|they|them|those|these)\b/ig;
    if (!pronounRegex.test(prompt)) return [prompt];
    const variants = [];
    for (const t of topics) {
      if (!t) continue;
      let v = prompt.replace(pronounRegex, function(m){
        if (m[0] === m[0].toUpperCase()) return t[0].toUpperCase() + t.slice(1);
        return t;
      });
      variants.push(v);
      if (variants.length >= maxVariants) break;
    }
    variants.push(prompt);
    return Array.from(new Set(variants)).slice(0, maxVariants);
  } catch (e) { return [prompt]; }
}
function _capitalizeWords(s) {
  return String(s || '').split(/\s+/).map(w => w ? (w[0].toUpperCase() + w.slice(1)) : '').join(' ').trim();
}
function updateUserInfoFromText(text) {
  const info = Object.assign({}, getUserInfo());
  if (!text || !String(text).trim()) return info;
  const full = String(text).trim();
  const lines = full.split(/[\r\n]+/).map(l => l.trim()).filter(Boolean);
  for (const line of lines) {
    let m = line.match(/^name\s*[:\-]\s*(.+)$/i);
    if (m) { info.name = _capitalizeWords(m[1].trim()); continue; }
    m = line.match(/^age\s*[:\-]\s*(\d{1,3})/i);
    if (m) { info.age = Number(m[1]); continue; }
    m = line.match(/^likes?\s*[:\-]\s*(.+)$/i);
    if (m) { info.likes = m[1].split(/,|\band\b/gi).map(s=>s.trim()).filter(Boolean); continue; }
    m = line.match(/^dislikes?\s*[:\-]\s*(.+)$/i);
    if (m) { info.dislikes = m[1].split(/,|\band\b/gi).map(s=>s.trim()).filter(Boolean); continue; }
    m = line.match(/^(biometrics?|measurements?)\s*[:\-]\s*(.+)$/i);
    if (m) { info.biometrics = (info.biometrics ? info.biometrics + '; ' : '') + m[2].trim(); continue; }
  }
  let m = full.match(/\b(?:my name is|my name's|i am called|i'm called|i am|i'm|i’m|call me|you can call me|i go by|i'm known as|i am known as)\s+([A-Za-z][A-Za-z0-9'’\-\s]{0,60})/i);
  if (m) {
    const candidate = m[1].trim();
    if (!/^[0-9]+$/.test(candidate)) info.name = _capitalizeWords(candidate);
  }
  m = full.match(/\b(?:age is|i am|i'm|i’m|i am\s+just|i am\s+about)\s+(\d{1,3})(?:\s+years?\s+old)?\b/i);
  if (m) info.age = Number(m[1]);
  if (!info.age) {
    m = full.match(/\b(\d{1,3})\s+years?\s+old\b/i);
    if (m) info.age = Number(m[1]);
  }
  m = full.match(/\b(?:i like|i love|i enjoy|i'm into|i am into)\s+([\w\s,]+(?:and\s+[\w\s]+)?)/i);
  if (m) {
    const list = m[1].split(/,|\band\b/gi).map(s=>s.trim()).filter(Boolean);
    if (list.length) info.likes = (info.likes || []).concat(list.filter(x=>!(info.likes||[]).includes(x)));
  }
  m = full.match(/\b(?:i don't like|i do not like|i dislike|i hate)\s+([\w\s,]+(?:and\s+[\w\s]+)?)/i);
  if (m) {
    const list = m[1].split(/,|\band\b/gi).map(s=>s.trim()).filter(Boolean);
    if (list.length) info.dislikes = (info.dislikes || []).concat(list.filter(x=>!(info.dislikes||[]).includes(x)));
  }
  const bioParts = [];
  let mm = full.match(/height[^\d]*(\d{2,3}\s?(?:cm|cm\b)?)/i);
  if (mm) bioParts.push('height: ' + mm[1].trim());
  mm = full.match(/weight[^\d]*(\d{2,3}\s?(?:kg|kg\b)?)/i);
  if (mm) bioParts.push('weight: ' + mm[1].trim());
  if (!mm) {
    let fi = full.match(/\b(\d)\s*(?:'|ft|feet)\s*(\d{1,2})?\s*(?:\"|in|inches)?\b/i);
    if (fi) {
      const feet = Number(fi[1] || 0);
      const inches = Number(fi[2] || 0);
      const totalIn = feet * 12 + inches;
      const cm = Math.round(totalIn * 2.54);
      bioParts.push(`height: ${feet}'${inches}\" (${cm}cm)`);
    }
  }
  if (bioParts.length) info.biometrics = ((info.biometrics || '') + (info.biometrics ? '; ' : '') + bioParts.join('; ')).trim();
  if (Array.isArray(info.likes)) info.likes = Array.from(new Set(info.likes.map(s=>s.trim()).filter(Boolean)));
  if (Array.isArray(info.dislikes)) info.dislikes = Array.from(new Set(info.dislikes.map(s=>s.trim()).filter(Boolean)));
  setUserInfo(info);
  return info;
}
function formatTime(ts){
  const d = new Date(ts);
  return d.toLocaleString([], {hour:'2-digit', minute:'2-digit'});
}
function el(tag, attrs={}, children=[]){
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==='class') e.className=v;
    else if(k==='html') e.innerHTML=v;
    else e.setAttribute(k,v);
  });
  (Array.isArray(children)?children:[children]).filter(Boolean).forEach(ch=>{
    if(typeof ch==='string') e.appendChild(document.createTextNode(ch));
    else e.appendChild(ch);
  });
  return e;
}
function renderHistory(container) {
  const target = container || historyEl;
  target.innerHTML = '';
  conversations.forEach(c => {
    const item = el('div', {
      class: 'conv' + (c.id === currentId ? ' active' : ''),
      role: 'button',
      tabindex: '0',
      'data-id': c.id
    });
    const left = el('div', {
      style: 'flex:1; display:flex; align-items:center; gap:10px;'
    });
    const avatarDiv = el('div', { class: 'avatar ' + (c.role === 'user' ? 'user' : 'bot') });
    if (c.role === 'user' && window.firebaseAuth && window.firebaseAuth.currentUser && window.firebaseAuth.currentUser.photoURL) {
      avatarDiv.innerHTML = `<img src="${window.firebaseAuth.currentUser.photoURL}" alt="avatar" style="width:100%; height:100%; border-radius:10%;">`;
    } else {
      if (c.role === 'user') {
        avatarDiv.innerHTML = '<i class="fas fa-user"></i>';
      } else {
  avatarDiv.innerHTML = '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; background:none; object-fit:cover;">';
      }
    }
    left.append(
      avatarDiv,
      el('div', { class: 'title' }, c.title || 'Untitled')
    );
    const delBtn = el('button', { class: 'tool', title: 'Delete chat' }, '✕');
    delBtn.addEventListener('click', async e => {
      e.stopPropagation();
      const ok = await showConfirm('Delete this chat?');
      if (ok) {
        conversations = conversations.filter(x => x.id !== c.id);
        if (currentId === c.id) {
          const next = conversations[0] || createConversation({ model: 'default' });
          currentId = next.id;
        }
        persist();
        hydrate();
        checkStorageWarning();
      }
    });
    item.append(left, delBtn);
    item.addEventListener('click', async () => {
      currentId = c.id;
      persist();
      try { await applyModelToKeys(c.model || 'default'); } catch(e){}
      hydrate();
      try {
        if (container && container !== historyEl) {
          const mobileOverlay = document.getElementById('mobileChatsOverlay');
          if (mobileOverlay) mobileOverlay.style.display = 'none';
        }
      } catch (e) {}
    });
    target.appendChild(item);
  });
}
function renderMessages(){
  if (!document.getElementById('thinkStyles')) {
    const ss = document.createElement('style');
    ss.id = 'thinkStyles';
    ss.textContent = `
    .think-status { position: relative; overflow: hidden; }
    .think-status .think-text {
      text-align: center;
      display:inline-block;
      background: linear-gradient(to right, #ffffffff 10%, #cfcfcfff 20%, #a8a8a8ff 30%, #858585ff 40%, #808080ff 50%, #808080ff 60%, #858585ff 70%, #a8a8a8ff 80%, #cfcfcfff 90%, #ffffffff 100%);
      background-size: 200% 100%;
      background-position: 0% 50%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      -webkit-animation: shine 1s linear infinite;
      animation: shine 1s linear infinite;
    }
    @-webkit-keyframes shine { from { background-position: 0% 50%; } to { background-position: -200% 50%; } }
    @keyframes shine { from { background-position: 0% 50%; } to { background-position: -200% 50%; } }
    `;
    try { document.head.appendChild(ss); } catch (e) { document.body.appendChild(ss); }
  }
  chatEl.innerHTML='';
  const conv = currentConv();
  try {
    if (imageUploadModeActive) {
      if (!document.getElementById('imageEditorCanvas')) {
        console.log('[debug] renderMessages: imageUploadModeActive and no canvas -> showing upload UI');
        const composerEl = document.querySelector('.composer'); if (composerEl) composerEl.style.display = 'none';
        const uploadWrap = document.getElementById('imageUploadOnly') || (function(){
          const w = document.createElement('div');
          w.id = 'imageUploadOnly';
          w.style = 'max-width:720px;margin:40px auto;padding:24px;border:1px dashed var(--border);border-radius:12px;background:var(--elev);display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;';
          w.innerHTML = `
            <div style="font-size:1.1rem;font-weight:700;color:var(--text)">Upload an image to start editing</div>
            <div style="color:var(--muted);max-width:72%;">Drop an image here or click Upload to choose a file. After uploading, the chat and editor will appear.</div>
            <div>
              <button id="imageUploadOnlyBtn" class="btn primary">Upload Image</button>
            </div>
          `;
          uploadWrap.addEventListener('dragover', (e) => { e.preventDefault(); w.style.background = 'rgba(255,255,255,0.02)'; });
          uploadWrap.addEventListener('dragleave', (e) => { e.preventDefault(); w.style.background = ''; });
          uploadWrap.addEventListener('drop', (e) => { e.preventDefault(); w.style.background = ''; const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) handleImageFile(f); });
          return w;
        })();
        if (!document.getElementById('imageUploadOnly')) chatEl.appendChild(uploadWrap);
        const input = document.getElementById('imageUploadInput'); const btn = document.getElementById('imageUploadOnlyBtn');
        if (btn && input) btn.addEventListener('click', () => input.click());
        return; 
      }
    }
  } catch (e) { console.error('renderMessages image upload render failed', e); }
  if (!conv.messages.length) {
    const container = el('div', { style: 'display:flex; flex-direction:column; align-items:center; margin-top:40px;' });
    const isLight = document.body.classList.contains('light');
    const emptyMsg = el('div', {
      class: 'empty-chat-message',
      style: `color:${isLight ? '#111' : '#fff'}; font-size:1.3em; text-align:center; font-weight:700; letter-spacing:0.01em;`
    }, 'Ask Me Anything!');
    const randomKeyDiv = el('div', { id: 'randomKeyMsg', style: 'margin-top:10px; color:var(--muted); font-size:1.08em; text-align:center; max-width:90vw; word-break:break-word;' });
    container.appendChild(emptyMsg);
    container.appendChild(randomKeyDiv);
    chatEl.appendChild(container);
    if (window._randomKeyInterval) clearInterval(window._randomKeyInterval);
    function setRandomKey() {
      try {
        if (localStorage.getItem('use_public_tunnel') === '1') {
          randomKeyDiv.textContent = '';
          return;
        }
      } catch (e) {}
      if (typeof keys !== 'object' || !Object.keys(keys).length) {
        randomKeyDiv.textContent = '';
        return;
      }
      const keyList = Object.keys(keys);
      const randomKey = keyList[Math.floor(Math.random() * keyList.length)];
      randomKeyDiv.textContent = randomKey;
    }
    setRandomKey();
    window._randomKeyInterval = setInterval(setRandomKey, 1000);
    return;
  } else {
    if (window._randomKeyInterval) {
      clearInterval(window._randomKeyInterval);
      window._randomKeyInterval = null;
    }
  }
  conv.messages.forEach((m,i)=>{
    if (m && m.role === 'system') {
      if (m._private) return;
      try {
        const nr = el('div', { class: 'system-notice', style: 'text-align:center;color:var(--muted);margin:8px 0;font-size:0.95rem;' }, escapeHtml(m.content));
        chatEl.appendChild(nr);
      } catch (e) {}
      return;
    }
    const row = el('div',{class:'msg '+m.role, 'data-ts': m.ts});
    const ava = el('div', { class: 'avatar ' + (m.role === 'user' ? 'user' : 'bot'), style: 'width:40px; height:40px; min-width:40px; min-height:40px; display:flex; align-items:center; justify-content:center;' });
    if (m.role === 'user' && auth.currentUser && auth.currentUser.photoURL) {
      ava.innerHTML = `<img src="${auth.currentUser.photoURL}" alt="avatar" style="width:100%; height:100%; border-radius:50%;">`;
    } else {
      if (m.role === 'user') {
        ava.innerHTML = '<i class="fas fa-user"></i>';
      } else {
  ava.innerHTML = '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; background:none; object-fit:cover;">';
      }
    }
  const displayContent = (m.role === 'assistant' && m._translated) ? m._translated : m.content;
  let bubble = renderBubble(displayContent);
  try {
    if (m._thinkStatus) {
      const wrapper = el('div', { class: 'bubble think-status' });
      const inner = el('div', { class: 'think-text' }, '');
      Array.from(bubble.childNodes).forEach(n => inner.appendChild(n));
      wrapper.appendChild(inner);
      bubble = wrapper;
    }
  } catch (e) {}
    const tools = el('div',{class:'tools'});
    if(m.role==='assistant'){
      const copy = el('button',{class:'tool', title:'Copy message'}); copy.textContent='Copy';
      copy.addEventListener('click', ()=>navigator.clipboard.writeText(m.content));
      const reply = el('button',{class:'tool', title:'Reply to this message'}); reply.textContent='Reply';
      reply.addEventListener('click', ()=>replyAt(i));
      tools.append(copy, reply);
      if (devFlag === true) {
        const contBtn = el('button', { class: 'tool', title: 'Show alternative contenders' });
        contBtn.textContent = 'Contenders';
        contBtn.addEventListener('click', () => {
          try { showContendersPopup(m._contenders || [], m.content || ''); } catch (e) { console.error(e); }
        });
        tools.append(contBtn);
      }
    }else{
      const edit = el('button',{class:'tool', title:'Edit & resend'}); edit.textContent='Edit';
      edit.addEventListener('click', ()=>{
        inputEl.value = m.content;
        inputEl.focus();
      });
      tools.append(edit);
    }
    try {
      if (m.role === 'user' && Array.isArray(m._attachments) && m._attachments.length) {
        const attBtn = el('button', { class: 'tool attachments-btn', title: 'Show attachments' });
        attBtn.textContent = 'Attachments';
        attBtn.addEventListener('click', (ev) => {
          try {
            const list = m._attachments.map(a => `${a.name} (${a.size ? Math.round(a.size/1024) + ' KB' : 'unknown'})`);
            let old = document.getElementById('attachmentsPopup'); if (old) old.remove();
            const overlay = document.createElement('div'); overlay.id = 'attachmentsPopup';
            overlay.style = 'position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;';
            const box = document.createElement('div'); box.style = 'background:var(--elev);color:var(--text);padding:12px;border-radius:10px;max-width:92vw;width:420px;box-shadow:0 10px 40px rgba(0,0,0,0.2);';
            const title = document.createElement('div'); title.style = 'font-weight:700;margin-bottom:8px;'; title.textContent = 'Attachments';
            const listWrap = document.createElement('div'); listWrap.style = 'display:flex;flex-direction:column;gap:6px;max-height:60vh;overflow:auto;padding-right:6px;';
            if (!list.length) {
              const empty = document.createElement('div'); empty.style = 'color:var(--muted);'; empty.textContent = 'No attachments'; listWrap.appendChild(empty);
            } else {
              for (const it of list) {
                const row = document.createElement('div'); row.style = 'padding:8px;border-radius:8px;background:rgba(0,0,0,0.03);'; row.textContent = it; listWrap.appendChild(row);
              }
            }
            const close = document.createElement('button'); close.className = 'btn'; close.textContent = 'Close'; close.style = 'margin-top:10px;'; close.addEventListener('click', ()=>overlay.remove());
            box.appendChild(title); box.appendChild(listWrap); box.appendChild(close); overlay.appendChild(box); document.body.appendChild(overlay);
            overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
          } catch (e) { console.error('show attachments failed', e); }
        });
        tools.append(attBtn);
      }
    } catch (e) {}
    const meta = el('div',{class:'timestamp'}, formatTime(m.ts));
    const col = el('div',{}, [bubble, tools, meta]);
    row.append(ava, col);
  if (m.role === 'user' && typeof m._replyTo === 'number') {
      const targetIdx = m._replyTo;
      const replyLink = el('div', {class: 'reply-link', title: 'Go to replied message', style: 'font-size:0.85rem;color:var(--muted);cursor:pointer;margin:0;'}, '↩︎ Reply');
      replyLink.addEventListener('click', ()=>scrollAndHighlight(targetIdx));
      const banner = el('div', {class: 'msg reply-banner', style: 'padding:2px 0 0 0; margin-bottom:4px;'}, []);
      const bannerAva = el('div', {class: 'avatar', style: 'width:36px; height:36px; background:transparent; border:0;'});
      const bannerCol = el('div', {style: 'display:flex; align-items:center; padding-left:8px;'}, [replyLink]);
      banner.append(bannerAva, bannerCol);
      chatEl.appendChild(banner);
    }
    chatEl.appendChild(row);
  });
  
  try { translateAssistantMessagesForConv(currentConv()).catch(()=>{}); } catch (e) {}
  chatEl.scrollTop = chatEl.scrollHeight;
}
async function translateAssistantMessagesForConv(conv) {
  try {
    if (!conv || !Array.isArray(conv.messages)) return;
    const userLang = (localStorage.getItem('user_lang') || 'eng_Latn');
    if (!userLang || userLang === 'eng_Latn') return;
    for (const m of conv.messages) {
      try {
        if (!m || m.role !== 'assistant') continue;
        if (m._translated) continue;
        if (!window.translateText || typeof window.translateText.translateText !== 'function') break;
        if (m._translating) continue;
        m._translating = true;
        const translated = await translateTextSafe(String(m.content || ''), 'eng_Latn', String(userLang));
        if (translated) {
          m._translated = String(translated);
          try { delete m._translating; } catch (e) {}
          try { persist(); } catch (e) {}
          try { renderMessages(); } catch (e) {}
        } else {
          try { delete m._translating; } catch (e) {}
        }
      } catch (e) { try { delete m._translating; } catch (ee) {} }
    }
  } catch (e) {}
}
async function translateTextSafe(text, fromCode, toCode) {
  try {
    if (!text || !window.translateText) return null;
    const api = window.translateText;
    function norm(c) {
      try { if (!c) return c; const s = String(c||''); const short = (s.split(/[_\-]/)[0]||s).slice(0,2).toLowerCase(); return { full: s, short }; } catch(e){ return { full: c, short: String(c).slice(0,2).toLowerCase() }; }
    }
    const f = norm(fromCode || 'eng_Latn');
    const t = norm(toCode || 'eng_Latn');
    if (typeof api.translateText === 'function') {
      try {
        const r = await api.translateText(text, f.full, t.full);
        if (r) return r;
      } catch (e) {  }
      try {
        const r2 = await api.translateText(text, f.short, t.short);
        if (r2) return r2;
      } catch (e) {}
    }
    if (typeof api === 'function') {
      try { const r3 = await api(text, f.full, t.full); if (r3) return r3; } catch (e) {}
      try { const r4 = await api(text, f.short, t.short); if (r4) return r4; } catch (e) {}
    }
    if (window.translateText && typeof window.translateText === 'function') {
      try { const r5 = await window.translateText(text, f.full, t.full); if (r5) return r5; } catch (e) {}
    }
  } catch (e) { console.error('translateTextSafe failed', e); }
  return null;
}
function renderMarkdown(text){
  const host = el('div');
  const fenced = /^```(\w+)?\n([\s\S]*?)```/gm;
  let lastIndex = 0, match;
  while((match = fenced.exec(text))!==null){
    if(match.index > lastIndex) host.appendChild(p(text.slice(lastIndex, match.index)));
    host.appendChild(codeblock(match[2]));
    lastIndex = fenced.lastIndex;
  }
  if(lastIndex < text.length) host.appendChild(p(text.slice(lastIndex)));
  return host;
  function p(t){
    const frag = document.createDocumentFragment();
    t = t.replace(/`([^`]+)`/g, (_,c)=>'§CODE§'+c+'§/CODE§');
    function inlineHtml(s){
      s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      s = s.replace(/~~(.+?)~~/g, '<del>$1</del>');
      s = s.replace(/(^|[^*])\*([^*][^*]*?)\*(?!\*)/g, function(m,pre,txt){ return pre + '<em>'+txt+'</em>'; });
      s = s.replace(/_(.+?)_/g, '<em>$1</em>');
      s = s.replace(/:smile:/g, '😄').replace(/:heart:/g, '❤️').replace(/:thumbsup:/g, '👍');
      s = s.replace(/\n/g, '<br>');
      return s;
    }

    function tryParseTable(lines, idx){
      if(idx+1 >= lines.length) return null;
      const hdr = lines[idx];
      const sep = lines[idx+1];
      if(!hdr.includes('|')) return null;
      if(!/^\s*\|?\s*[:\-\s|]+\s*\|?\s*$/.test(sep)) return null;
      const rows = [];
      let j = idx+2;
      while(j < lines.length && lines[j].includes('|')){ rows.push(lines[j]); j++; }
      const table = document.createElement('table'); table.style.width='100%'; table.style.borderCollapse='collapse';
      const thead = document.createElement('thead'); const thr = document.createElement('tr');
      const headers = hdr.split('|').map(s=>s.trim()).filter(s=>s.length);
      headers.forEach(h=>{ const th = document.createElement('th'); th.innerHTML = inlineHtml(h); th.style.textAlign='left'; th.style.padding='6px 8px'; th.style.borderBottom='1px solid var(--border)'; thr.appendChild(th); });
      thead.appendChild(thr); table.appendChild(thead);
      if(rows && rows.length){ const tbody = document.createElement('tbody'); for(const r of rows){ const tr = document.createElement('tr'); const cols = r.split('|').map(s=>s.trim()).filter((c,i)=> i < headers.length && c !== undefined);
            for(const c of cols){ const td = document.createElement('td'); td.innerHTML = inlineHtml(c); td.style.padding='6px 8px'; td.style.borderBottom='1px solid rgba(0,0,0,0.04)'; tr.appendChild(td); }
            tbody.appendChild(tr);
      } table.appendChild(tbody); }
      return {el: table, nextIndex: j-1};
    }

    const lines = t.split('\n');
    for(let i=0;i<lines.length;){
      if(/^(\s*)$/.test(lines[i])){ i++; continue; }
      const tbl = tryParseTable(lines, i);
      if(tbl){ frag.appendChild(tbl.el); i = tbl.nextIndex+1; continue; }
      const blockLines = [];
      let j = i;
      while(j < lines.length && !/^\s*$/.test(lines[j])){ blockLines.push(lines[j]); j++; }
      i = j;
      const block = blockLines.join('\n');

      const hMatch = block.match(/^\s*(#{1,4})\s+(.*)$/);
      if(hMatch){ const lvl = Math.min(4, hMatch[1].length); const hd = document.createElement('h'+lvl); insertTextOrCode(hd, inlineHtml(hMatch[2])); frag.appendChild(hd); continue; }
      if(/^\s*([-*_]){3,}\s*$/.test(block)) { frag.appendChild(el('hr')); continue; }
      if(/^\s*([-*+]\s+|\d+\.\s+)/.test(blockLines[0])){
        const isOrdered = /^\s*\d+\.\s+/.test(blockLines[0]);
        const listEl = document.createElement(isOrdered ? 'ol' : 'ul');
        for(const ln of blockLines){ const liMatch = ln.match(/^\s*(?:[-*+]|(\d+)\.)\s+(.*)$/); if(liMatch){ const li = document.createElement('li'); insertTextOrCode(li, inlineHtml(liMatch[2])); listEl.appendChild(li); } }
        frag.appendChild(listEl); continue;
      }
      const pEl = document.createElement('p');
      const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      let lp = 0; let m;
      while((m = imgRegex.exec(block)) !== null){ if(m.index > lp){ const part = block.slice(lp, m.index); // apply inline replacements then insert
            insertTextOrCode(pEl, inlineHtml(part)); }
        const imgEl = el('img', {src: m[2], alt: m[1], style:'max-width:100%; border-radius:12px; margin-top:6px; display:block;'});
        pEl.appendChild(imgEl);
        lp = m.index + m[0].length; }
      if(lp < block.length){ const tail = block.slice(lp); insertTextOrCode(pEl, inlineHtml(tail)); }
      frag.appendChild(pEl);
    }
    return frag;
  }
  function insertTextOrCode(pp, t){
    const parts = t.split(/§CODE§|§\/CODE§/);
    for(let i=0;i<parts.length;i++){
      if(i%2===1){ const code = el('code',{},parts[i]); pp.appendChild(code); }
      else {
        if (devFlag === true && window.synonymsDataset) {
          const frag = document.createDocumentFragment();
          const words = parts[i].split(/(\s+)/);
          for (const w of words) {
            if (!w) continue;
            if (/^\s+$/.test(w)) {
              frag.appendChild(document.createTextNode(w));
              continue;
            }
            const clean = String(w).replace(/[^\w\-']/g, '').toLowerCase();
            if (clean && window.synonymsDataset && window.synonymsDataset[clean] && Array.isArray(window.synonymsDataset[clean])) {
              const span = document.createElement('span');
              span.className = 'dev-synonym-word';
              span.textContent = w;
              span.style = 'text-decoration:underline dotted;cursor:help;position:relative;';
              span.addEventListener('mouseenter', (e) => {
                try {
                  let tip = document.getElementById('synTip'); if (tip) tip.remove();
                  tip = document.createElement('div'); tip.id = 'synTip';
                  tip.style = 'position:fixed;z-index:100000;background:var(--elev);color:var(--text);padding:8px;border-radius:8px;border:1px solid var(--border);max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.18);';
                  const list = document.createElement('div'); list.style = 'display:flex;flex-direction:column;gap:6px;';
                  const syns = window.synonymsDataset[clean].slice(0,10);
                  if (!syns || !syns.length) { list.textContent = 'No synonyms available'; }
                  else {
                    for (const s of syns) {
                      const item = document.createElement('div'); item.style='padding:4px 6px;border-radius:6px;cursor:pointer;'; item.textContent = s;
                      item.addEventListener('click', ()=>{ inputEl.value = inputEl.value + ' ' + s; inputEl.focus(); autosize(); document.getElementById('synTip')?.remove(); });
                      list.appendChild(item);
                    }
                  }
                  tip.appendChild(list);
                  document.body.appendChild(tip);
                  const rect = e.target.getBoundingClientRect();
                  tip.style.left = Math.min(window.innerWidth - tip.offsetWidth - 12, Math.max(8, rect.left)) + 'px';
                  tip.style.top = (rect.bottom + 8) + 'px';
                } catch (ee) { }
              });
              span.addEventListener('mouseleave', ()=>{ setTimeout(()=>{ const t = document.getElementById('synTip'); if (t) t.remove(); }, 100); });
              frag.appendChild(span);
            } else {
              frag.appendChild(document.createTextNode(w));
            }
          }
          pp.appendChild(frag);
        } else {
          pp.insertAdjacentHTML('beforeend', parts[i]);
        }
      }
    }
  }
  function codeblock(code){
    const pre = el('pre'); 
    const codeEl = el('code',{},code);
    pre.appendChild(codeEl);
    const cp = el('div',{class:'copy'},['Copy code']);
    cp.addEventListener('click', ()=>{
      navigator.clipboard.writeText(code);
      cp.textContent='Copied';
      setTimeout(()=>cp.textContent='Copy code',800);
    });
    const wrap = el('div'); wrap.append(pre, cp); return wrap;
  }
}
function setTitleFromFirstUser(){
  const conv = currentConv();
  const firstUser = conv.messages.find(m=>m.role==='user');
  conv.title = firstUser ? (firstUser.content.slice(0,30) + (firstUser.content.length>30?'…':'')) : 'New chat';
}
function removeAdjectives(text) {
  try {
    if (typeof nlp === 'function') {
      let doc = nlp(text);
      doc.adjectives().delete();
      return doc.text().trim();
    }
  } catch (e) {}
  return text;
}
function filterToNouns(words) {
  try {
    if (!Array.isArray(words) || words.length === 0) return [];
    let blockedSet = new Set();
    try {
      if (typeof blockWordsArray !== 'undefined' && Array.isArray(blockWordsArray)) {
        blockedSet = new Set((blockWordsArray || []).map(s => String(s || '').toLowerCase()));
      }
    } catch (e) {}
    if (typeof tagWords === 'function') {
      const joined = words.join(' ');
      try {
        const tags = tagWords(joined) || [];
        const nounSet = new Set(tags.filter(t => /noun/i.test(String(t.tag || ''))).map(t => String(t.word || '').toLowerCase()));
        const filtered = words.filter(w => {
          const lw = String(w || '').toLowerCase();
          if (blockedSet.has(lw)) return false;
          return nounSet.has(lw);
        });
        if (filtered && filtered.length) return filtered;
      } catch (e) {
      }
    }
  } catch (e) {}
  try {
    const pronouns = new Set(["it","this","that","they","them","those","these","i","you","we","he","she","him","her","they","their","our","us"]);
    let blockedSet2 = new Set();
    try {
      if (typeof blockWordsArray !== 'undefined' && Array.isArray(blockWordsArray)) {
        blockedSet2 = new Set((blockWordsArray || []).map(s => String(s || '').toLowerCase()));
      }
    } catch (e) {}
    return words.filter(w => {
      if (!w) return false;
      const lw = String(w).toLowerCase();
      if (blockedSet2.has(lw)) return false;
      if (pronouns.has(lw)) return false;
      if (lw.length <= 1) return false;
      if (/^[0-9]+$/.test(lw)) return false;
      if (lw.endsWith('ly')) return false; 
      const commonStops = new Set(['what','who','when','where','why','how','which','wherefore']);
      if (commonStops.has(lw)) return false;
      return true;
    });
  } catch (e) { return words; }
}
function expandWithSynonyms(text) {
  const words = text.split(/\s+/);
  let variants = [text];
  for (let i = 0; i < words.length; i++) {
    const w = words[i].toLowerCase();
    if (window.synonymsDataset && synonymsDataset[w] && Array.isArray(synonymsDataset[w])) {
      synonymsDataset[w].forEach(syn => {
        let arr = words.slice();
        arr[i] = syn;
        variants.push(arr.join(' '));
      });
    }
  }
  return Array.from(new Set(variants));
}
function toSchemFilename(name) {
  const raw = String(name || '').trim();
  if (!raw) return '.bloxdschem';
  let base = raw
    .replace(/\s+/g, '_')          
    .replace(/[^a-zA-Z0-9_]/g, '_') 
    .replace(/_+/g, '_')            
    .replace(/^_+|_+$/g, '')        
    .toLowerCase();
  return base + '.bloxdschem';
}
function parseSizePreference(prompt) {
  try {
    if (!prompt || typeof prompt !== 'string') return null;
    const p = prompt.toLowerCase();
    const larger = ['large','big','huge','massive','spacious','wide','giant','large-scale','large scale','oversized'];
    const smaller = ['small','tiny','mini','compact','micro','small-scale','small scale','narrow','compactly'];
    for (const w of larger) if (p.indexOf(w) !== -1) return 'larger';
    for (const w of smaller) if (p.indexOf(w) !== -1) return 'smaller';
    return null;
  } catch (e) { return null; }
}
async function getSchemSizeKb(name) {
  try {
    if (!name) return null;
    const cacheKey = 'schem_size_cache_v1';
    const ttl = 24 * 60 * 60 * 1000; 
    const keyName = String(name).toLowerCase();
    try {
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed[keyName] && (Date.now() - (parsed[keyName].ts || 0)) < ttl) {
          return parsed[keyName].kb;
        }
      }
    } catch (e) {}
    const filename = toSchemFilename(name);
    const url = `/bloxdschems/${filename}`;
    try {
      const headResp = await fetch(url, { method: 'HEAD' });
      if (headResp && headResp.ok) {
        const cl = headResp.headers.get('content-length');
        if (cl) {
          const kb = Math.round(Number(cl) / 1024);
          try {
            const raw = localStorage.getItem(cacheKey);
            const parsed = raw ? JSON.parse(raw) : {};
            parsed[keyName] = { kb: kb, ts: Date.now() };
            localStorage.setItem(cacheKey, JSON.stringify(parsed));
          } catch (e) {}
          return kb;
        }
      }
    } catch (e) {}
    try {
      const resp = await fetch(url);
      if (resp && resp.ok) {
        const blob = await resp.blob();
        if (blob && typeof blob.size === 'number') {
          const kb = Math.round(blob.size / 1024);
          try {
            const raw = localStorage.getItem(cacheKey);
            const parsed = raw ? JSON.parse(raw) : {};
            parsed[keyName] = { kb: kb, ts: Date.now() };
            localStorage.setItem(cacheKey, JSON.stringify(parsed));
          } catch (e) {}
          return kb;
        }
      }
    } catch (e) {}
  } catch (e) {}
  return null;
}
let aiBuilderList = null;
async function getAiBuilderList(){
  if (aiBuilderList) return aiBuilderList;
  const res = await fetch('list.txt');
  const txt = await res.text();
  let parsed;
  try { parsed = JSON.parse(txt); } catch (e) {
    try { parsed = eval(txt); } catch (ee) { parsed = null; }
  }
  const out = [];
  if (Array.isArray(parsed)) {
    for (const it of parsed) {
      try {
        if (typeof it === 'string') out.push({ display: it, file: it });
        else if (it && typeof it === 'object' && it.display && it.file) out.push({ display: String(it.display), file: String(it.file) });
      } catch (e) {}
    }
  } else if (parsed && typeof parsed === 'object') {
    for (const k of Object.keys(parsed)) {
      try { out.push({ display: String(k), file: String(parsed[k]) }); } catch (e) {}
    }
  }
  aiBuilderList = out;
  return aiBuilderList;
}
function aiBuilderGetDisplay(it){ try { return (typeof it === 'string') ? it : (it && it.display ? String(it.display) : String(it||'')); } catch(e){ return String(it||''); } }
function aiBuilderGetFile(it){ try { return (typeof it === 'string') ? it : (it && it.file ? String(it.file) : (it && it.display ? String(it.display) : String(it||''))); } catch(e){ return String(it||''); } }
function findBestAiBuilderMatch(prompt, list){
  function normalizeForAiBuilder(s){ try { return String(s||'').toLowerCase().replace(/_/g,' ').trim(); } catch(e){ return String(s||'').toLowerCase(); } }
  function getDisplayLocal(it){ try { return aiBuilderGetDisplay(it); } catch(e){ return String(it||''); } }
  const variants = [prompt, removeAdjectives(prompt), ...expandWithSynonyms(prompt)];
  for (const item of list) {
    try { if (normalizeForAiBuilder(getDisplayLocal(item)) === normalizeForAiBuilder(prompt)) return item; } catch (e) {}
  }
  try {
    const digitSeqs = (String(prompt || '').match(/\d+/g) || []).filter(Boolean);
    if (digitSeqs.length) {
      const candidates = list.filter(it => {
        if (!it) return false;
        try {
          const s = String(getDisplayLocal(it));
          for (const d of digitSeqs) if (s.indexOf(d) !== -1) return true;
        } catch (e) {}
        return false;
      });
      if (candidates.length) {
        let bestC = null, bestScoreC = Infinity;
        for (const v of variants) {
          for (const item of candidates) {
            const score = smartStringSimilarity(String(v||'').toLowerCase(), String(getDisplayLocal(item)||'').toLowerCase());
            if (score < bestScoreC) { bestC = item; bestScoreC = score; }
          }
        }
        if (bestC) return bestC;
      }
    }
  } catch (e) {}
  let best = null, bestScore = Infinity;
  for (const v of variants) {
    const nv = normalizeForAiBuilder(v);
    for (const item of list) {
      const ni = normalizeForAiBuilder(getDisplayLocal(item));
      const score = smartStringSimilarity(nv, ni);
      if (score < bestScore) { best = item; bestScore = score; }
    }
  }
  return best;
}
function showAiBuilderCard(name, url){
  return { name, url };
}
function escapeHtml(s){
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
async function sendMessage(text){
  const PRIV_KEY = 'privacy_agreed_v1';
  const agreed = localStorage.getItem(PRIV_KEY) === 'true';
  const trimmed = (text || '').trim();
  try {
    if (String(trimmed).toLowerCase() === 'i is bad at spelling') {
      showSentenceConfuserPopup();
      inputEl.value = '';
      autosize();
      return;
    }
  } catch (e) {}
  if (!agreed) {
    const lower = trimmed.toLowerCase();
    const conv = currentConv();
    if (lower === 'yes') {
      localStorage.setItem(PRIV_KEY, 'true');
      const okMsg = { role: 'assistant', content: 'Thanks — you have agreed to the privacy policy. You can continue chatting now.', ts: Date.now() };
      conv.messages.push(okMsg);
      persist(); renderMessages();
      inputEl.value = '';
      autosize();
      return;
    }
  const prompt = 'By continuing to chat you agree to our <a href="privacy.html" target="_blank" rel="noopener" style="color:#1e90ff;text-decoration:underline;">privacy policy</a>, if you agree type yes';
    const botMsg = { role: 'assistant', content: prompt, ts: Date.now() };
    conv.messages.push(botMsg);
    persist(); renderMessages();
    inputEl.value = '';
    autosize();
    return;
  }
  botBusy = true;
  sendBtn.disabled = true;
  inputEl.disabled = true;
  const conv = currentConv();
  const userMsg = {role:'user', content:trimmed, ts:Date.now()};
  if (typeof replyTargetIndex === 'number') {
    userMsg._replyTo = replyTargetIndex;
    replyTargetIndex = null;
  }
  conv.messages.push(userMsg);
  if(conv.messages.length===1) setTitleFromFirstUser();
  persist(); renderMessages();
  try {
    const convModel = (conv && conv.model) ? String(conv.model).toLowerCase() : 'default';
    if (convModel === 'default') {
      const sumMatch = trimmed.match(/^\s*(?:summarize)\s*(web)?\s*[:\-]?\s*([\s\S]+)/i);
      if (sumMatch) {
        const isWeb = !!sumMatch[1];
        const payload = (sumMatch[2] || '').trim();
        const typingRow = el('div',{class:'msg assistant'});
        const bubble = el('div',{class:'bubble'});
        bubble.appendChild(el('div', {}, 'Sure — let me do that right now: summarizing...'));
        bubble.appendChild(el('div',{class:'typing'},[ el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'}) ]));
        typingRow.append(el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}), bubble);
        chatEl.appendChild(typingRow);
        chatEl.scrollTop = chatEl.scrollHeight;
        try {
          let summary = null;
          if (isWeb) {
            const raw = await getAnswer(payload || trimmed);
            if (raw && window.textTools && typeof window.textTools.summarize === 'function') summary = await window.textTools.summarize(raw);
            else summary = raw || 'No results found.';
          } else {
            if (payload && window.textTools && typeof window.textTools.summarize === 'function') {
              summary = await window.textTools.summarize(payload);
            } else if (payload) {
              summary = payload.split('\n').map(l=>l.trim()).filter(Boolean).slice(0,3).join(' ') + (payload.length>200 ? '…' : '');
            } else {
              summary = 'Please provide text to summarize.';
            }
          }
          typingRow.remove();
          const botMsg = { role: 'assistant', content: String(summary || 'No summary available.'), ts: Date.now(), _key: null };
          conv.messages.push(botMsg);
          persist();
          await streamMessage(botMsg);
        } catch (err) {
          typingRow.remove();
          const botMsg = { role: 'assistant', content: 'Summarization failed: ' + (err && err.message ? err.message : String(err)), ts: Date.now(), _key: null };
          conv.messages.push(botMsg);
          persist(); renderMessages();
        }
        botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
        inputEl.value = '';
        autosize();
        return;
      }
      try {
        const instructionCandidates = ['fix this', 'export', 'clear all', 'create chat'];
        const lc = trimmed.toLowerCase();
        const looksLikeCommand = instructionCandidates.some(c => lc.startsWith(c) || lc.indexOf(c) !== -1);
        if (looksLikeCommand) {
          const typingRow = el('div',{class:'msg assistant'});
          typingRow.append(
            el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
            el('div',{class:'bubble'}, el('span',{class:'typing'},[ el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'}) ]))
          );
          chatEl.appendChild(typingRow);
          chatEl.scrollTop = chatEl.scrollHeight;
          try {
            const resp = await handleInstructionSync(trimmed);
            typingRow.remove();
            const botMsg = { role: 'assistant', content: String(resp || 'Done.'), ts: Date.now(), _key: null };
            conv.messages.push(botMsg);
            persist(); await streamMessage(botMsg);
            botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
            inputEl.value = '';
            autosize();
            return;
          } catch (e) {
            typingRow.remove();
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  try {
    const convModel = conv.model || '';
    if (convModel === 'image-editing' && !document.getElementById('imageEditorCanvas')) {
      imageUploadModeActive = true;
  ensureImageUploadOnlyUI();
  try { debugComposerState('sendMessage-image-preflight-after-ensureUploadUI'); } catch (e) {}
  try { adjustLayoutForEditor(true); } catch (e) { console.error('adjustLayoutForEditor failed in sendMessage preflight', e); }
      const botMsg = { role: 'assistant', content: 'Please upload an image using the box on the page to start editing.', ts: Date.now() };
      conv.messages.push(botMsg);
      persist();
      await streamMessage(botMsg);
      try { debugComposerState('sendMessage-image-preflight-after-stream'); } catch (e) {}
      inputEl.value = '';
      autosize();
      botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
      return;
    }
  } catch (e) { console.error('image-edit preflight failed', e); }
  try {
    const convModel = conv.model || '';
    if (convModel === 'image-editing') {
      const cmd = await handleImageEditingCommand(trimmed);
      if (cmd && cmd.handled) {
        const botMsg = { role: 'assistant', content: cmd.message || 'Done.', ts: Date.now() };
        conv.messages.push(botMsg);
        persist();
  await streamMessage(botMsg);
  try { debugComposerState('sendMessage-after-command-handled'); } catch (e) {}
  inputEl.value = '';
  autosize();
  botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
  return;
      }
    }
  } catch (e) { console.error('image-edit command handling failed', e); }
  try {
    try { const detected = updateUserInfoFromText(userMsg.content); } catch (e) {  }
    try { if (accountPopup && accountPopup.style && accountPopup.style.display === 'flex') renderAccountPopup(); } catch (e) {}
  } catch (e) {}
  inputEl.value=''; autosize();
  if (aiBuilderMode) {
    const typingRow = el('div',{class:'msg assistant'});
    typingRow.append(
      el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
      el('div',{class:'bubble'}, el('span',{class:'typing'},[
        el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'})
      ]))
    );
    chatEl.appendChild(typingRow);
    chatEl.scrollTop = chatEl.scrollHeight;
    try {
      const list = await getAiBuilderList();
      if (!Array.isArray(list) || !list.length) throw new Error('No builder list');
      function getDisplay(it){ try { return (typeof it === 'string') ? it : (it && it.display ? String(it.display) : String(it||'')); } catch(e){ return String(it||''); } }
      function getFile(it){ try { return (typeof it === 'string') ? it : (it && it.file ? String(it.file) : (it && it.display ? String(it.display) : String(it||''))); } catch(e){ return String(it||''); } }
      function normalizeForMatch(s){ try { return String(s||'').toLowerCase().replace(/[_\d]+/g,' ').replace(/\s+/g,' ').trim(); } catch(e){ return String(s||'').toLowerCase(); } }
      const userNorm = normalizeForMatch(trimmed || '');
      const normMap = Object.create(null);
      for (const item of list) {
        try {
          const n = normalizeForMatch(getDisplay(item) || '');
          if (!normMap[n]) normMap[n] = [];
          normMap[n].push(item);
        } catch (e) {}
      }
      const scoredNorms = Object.keys(normMap).map(k => ({ norm: k, s: smartStringSimilarity(userNorm, k) }));
      scoredNorms.sort((a,b)=>a.s - b.s);
      const expanded = [];
      for (const sn of scoredNorms.slice(0, 40)) {
        for (const orig of normMap[sn.norm] || []) expanded.push(orig);
      }
      const used = getAiBuilderUsed();
      let candidates = expanded.filter(it => !used.includes(String(getFile(it)||getDisplay(it)).toLowerCase()));
      if (!candidates || candidates.length === 0) {
        const synVariants = expandWithSynonyms(trimmed || '');
        const synScored = [];
        for (const v of synVariants) {
          for (const item of list) {
            synScored.push({ item, s: smartStringSimilarity(_normalizeAi(v||''), _normalizeAi(getDisplay(item)||'')) });
          }
        }
        synScored.sort((a,b)=>a.s - b.s);
        const synTop = synScored.map(s=>s.item).filter(Boolean);
        candidates = synTop.filter(it => !used.includes(String(getFile(it)||getDisplay(it)).toLowerCase()));
      }
      if (!candidates || candidates.length === 0) {
        setAiBuilderPermanentlyDisabled('Undergoing maintenance: all schematics exhausted');
        updateAiBuilderButtonState();
        typingRow.remove();
        showPopup('AI Builder has exhausted available schematics and is now disabled for maintenance.');
        const botMsg = { role: 'assistant', content: 'AI Builder is temporarily unavailable — all schematics are currently used. The feature is undergoing maintenance.', ts: Date.now(), _key: null };
        conv.messages.push(botMsg); persist(); renderMessages();
        botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
        return;
      }
      const AI_BUILDER_MAX_USES = 10;
      const sizePref = parseSizePreference(trimmed);
      const seen = new Set();
      const dedup = [];
      for (const c of candidates) {
        const f = (getFile(c)||getDisplay(c)||'').toLowerCase();
        if (!seen.has(f)) { seen.add(f); dedup.push(c); }
      }
      try {
        if (sizePref && dedup.length > 0) {
          const sample = dedup.slice(0, 20); 
          const sizeInfos = await Promise.all(sample.map(async it => ({ item: it, kb: await getSchemSizeKb(getFile(it) || getDisplay(it)) })));
          const hasAnySize = sizeInfos.some(si => si.kb != null);
          if (hasAnySize) {
            sample.sort((a, b) => {
              const sa = sizeInfos.find(x => x.item === a)?.kb;
              const sb = sizeInfos.find(x => x.item === b)?.kb;
              const va = (sa == null) ? (sizePref === 'larger' ? 0 : Infinity) : sa;
              const vb = (sb == null) ? (sizePref === 'larger' ? 0 : Infinity) : sb;
              return sizePref === 'larger' ? (vb - va) : (va - vb);
            });
            const reordered = sample.concat(dedup.filter(x=>!sample.includes(x)));
            dedup.length = 0; dedup.push(...reordered);
          }
        }
      } catch (e) {  }
      const pickPool = dedup.slice(0,5);
      const chosen = pickPool[Math.floor(Math.random() * pickPool.length)];
      addAiBuilderUsed(getFile(chosen) || getDisplay(chosen));
      try {
        const usedNow = getAiBuilderUsed() || [];
        if (usedNow.length >= AI_BUILDER_MAX_USES) {
          const until = Date.now() + 24 * 60 * 60 * 1000;
          setAiBuilderCooldown(until);
          updateAiBuilderButtonState();
          showBuilderLimitPopup(until);
          const cooldownMsg = { role: 'assistant', content: `Reached limit for builder, try again at ${new Date(until).toLocaleString()}`, ts: Date.now(), _key: null };
          conv.messages.push(cooldownMsg);
        }
      } catch (e) {}
  const filename = toSchemFilename(getFile(chosen) || getDisplay(chosen));
  const url = `/bloxdschems/${filename}`;
  typingRow.remove();
  const visibleName = escapeHtml(trimmed || getDisplay(chosen));
  const safeUrl = escapeHtml(url);
  const html = `<div><strong>Build complete</strong><div style="margin-top:8px;font-weight:700;">${visibleName}</div><div style="margin-top:12px;"><a href="${safeUrl}" download style="display:inline-block;padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Download .bloxdschem</a></div></div>`;
  const botMsg = {role:'assistant', content: html, ts: Date.now(), _key: null};
      conv.messages.push(botMsg);
      pendingMessageKey = null;
      persist();
      renderMessages();
    } catch (e) {
      typingRow.remove();
      const botMsg = {role:'assistant', content: 'AI Builder failed: ' + (e.message || e), ts: Date.now(), _key: null};
      conv.messages.push(botMsg); persist(); renderMessages();
    }
    botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
    return;
  }
  if (webSearchMode) {
    const typingRow = el('div',{class:'msg assistant'});
    typingRow.append(
      el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
      el('div',{class:'bubble'}, el('span',{class:'typing'},[
        el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'})
      ]))
    );
    chatEl.appendChild(typingRow);
    chatEl.scrollTop = chatEl.scrollHeight;
    try {
      const searchQuerys = extractImportant(trimmed);
      const searchQuery = searchQuerys.join(" ");
      console.log('Using search query:', searchQuery);
      const rawAnswer = await getAnswer(trimmed);
      console.log('Raw answer from web search:', rawAnswer);
      const answer = await window.textTools.summarize(rawAnswer);
      console.log('Summarized answer:', answer);
      typingRow.remove();
      let formatted = (answer || 'No results found.');
      try {
        formatted = String(formatted);
        formatted = formatted.replace(/\.\.\./g, '<<ELLIPSIS>>');
        formatted = formatted.replace(/,\s*/g, ',\n');
        formatted = formatted.replace(/\.\s*/g, '.\n');
        formatted = formatted.replace(/<<ELLIPSIS>>/g, '...');
        formatted = formatted.replace(/\n{2,}/g, '\n\n').trim();
      } catch (e) {  }
      const botMsg = {role:'assistant', content: formatted, ts: Date.now(), _key: null};
      conv.messages.push(botMsg);
      pendingMessageKey = null;
      persist();
      await streamMessage(botMsg);
    } catch (e) {
      typingRow.remove();
      const botMsg = {role:'assistant', content: 'Web search failed.', ts: Date.now(), _key: null};
      conv.messages.push(botMsg); persist(); renderMessages();
    }
    botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
    return;
  }
  if(imageMode){
    const typingRow = el('div',{class:'msg assistant'});
    typingRow.append(
      el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
      el('div',{class:'bubble'}, el('span',{class:'typing'},[
        el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'})
      ]))
    );
    chatEl.appendChild(typingRow);
    chatEl.scrollTop = chatEl.scrollHeight;
    await new Promise(r=>setTimeout(r, 350 + Math.random()*200));
    const imgUrl = await getImage(text);
    typingRow.remove();
    const bubble = el('div',{class:'bubble'});
    let botMsg;
    if(imgUrl){
      const imgEl = el('img', {src: imgUrl, alt: text, style:'max-width:100%; border-radius:12px; display:block;'});
      bubble.appendChild(el('p', {}, `Here's an image for "${text}":`));
      bubble.appendChild(imgEl);
      botMsg = {role:'assistant', content:`Image: ${imgUrl}`, ts: Date.now(), _key: pendingMessageKey || null};
    } else {
      bubble.appendChild(el('p', {}, `Sorry, I couldn't find an image for "${text}".`));
      botMsg = {role:'assistant', content:`No image found for "${text}"`, ts: Date.now(), _key: pendingMessageKey || null};
    }
    conv.messages.push(botMsg);
    persist();
    renderMessages();
    chatEl.scrollTop = chatEl.scrollHeight;
    imageMode = false;
    document.getElementById('imageToggle').classList.remove('primary');
    botBusy = false;
    sendBtn.disabled = false;
    inputEl.disabled = false;
    return;
  }
  if(jsFixMode){
    const typingRow = el('div',{class:'msg assistant'});
    typingRow.append(
  el('div', {class: 'avatar bot', style: 'width:40px; height:40px; min-width:40px; min-height:40px; display:flex; align-items:center; justify-content:center;', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
      el('div',{class:'bubble'}, el('span',{class:'typing'},[
        el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'})
      ]))
    );
    chatEl.appendChild(typingRow);
    chatEl.scrollTop = chatEl.scrollHeight;
    await new Promise(r=>setTimeout(r, 350 + Math.random()*200));
  const fixedReport = await autoRunAndFix(text, 5, 2000);
    typingRow.remove();
  const botMsg = {role:'assistant', content:fixedReport, ts:Date.now(), _key: pendingMessageKey || null};
    conv.messages.push(botMsg);
    persist();
    await streamMessage(botMsg);
  botBusy = false;
  sendBtn.disabled = false;
  inputEl.disabled = false;
  return;
  }
  const typingRow = el('div',{class:'msg assistant'});
  typingRow.append(
  el('div', {class: 'avatar bot', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'}),
    el('div',{class:'bubble'}, el('span',{class:'typing'},[
      el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'})
    ]))
  );
  chatEl.appendChild(typingRow);
  chatEl.scrollTop = chatEl.scrollHeight;
  await new Promise(r=>setTimeout(r, 350 + Math.random()*200));
  try {
    const usePublic = (localStorage.getItem('use_public_tunnel') === '1') && (typeof navigator !== 'undefined' && navigator.onLine);
    if (usePublic) {
      try {
        await streamFromPublicTunnel(conv, text);
      } catch (e) {
        console.error('Public tunnel streaming failed, falling back to local generation', e);
        const botResult = await generateBotMessage(text);
        const botContenders = (botResult && Array.isArray(botResult.contenders)) ? botResult.contenders : [];
        if (botResult && botResult._streamingHandled && botResult.placeholder) {
          pendingMessageKey = null;
          try { if (botResult._streamFinished && typeof botResult._streamFinished.then === 'function') await botResult._streamFinished; } catch (e) {}
        } else {
          const botText = (botResult && typeof botResult === 'object') ? String(botResult.text || '') : String(botResult || '');
          const botMsg = {role:'assistant', content:botText, ts:Date.now(), _key: pendingMessageKey || null, _contenders: botContenders};
          conv.messages.push(botMsg);
          pendingMessageKey = null;
          persist();
          await streamMessage(botMsg);
        }
      }
      typingRow.remove();
      botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
      return;
    }
    const botResult = await generateBotMessage(text);
    const botContenders = (botResult && Array.isArray(botResult.contenders)) ? botResult.contenders : [];
    typingRow.remove();
    if (botResult && botResult._streamingHandled && botResult.placeholder) {
      pendingMessageKey = null;
      try { if (botResult._streamFinished && typeof botResult._streamFinished.then === 'function') await botResult._streamFinished; } catch (e) {}
    } else {
      const botText = (botResult && typeof botResult === 'object') ? String(botResult.text || '') : String(botResult || '');
      const botMsg = {role:'assistant', content:botText, ts:Date.now(), _key: pendingMessageKey || null, _contenders: botContenders};
      conv.messages.push(botMsg);
      pendingMessageKey = null;
      persist();
      await streamMessage(botMsg);
    }
    botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
    return;
  } catch (e) {
    console.error('generate/stream path failed', e);
    typingRow.remove();
    botBusy = false; sendBtn.disabled = false; inputEl.disabled = false;
    return;
  }
}
async function streamMessage(msg){
  const overlay = document.getElementById('speechListeningOverlay');
  const userLang = (localStorage.getItem('user_lang') || 'eng_Latn');
  const needsTranslation = (msg && msg.role === 'assistant' && userLang && userLang !== 'eng_Latn' && !msg._translated);
  function makeTypingPlaceholder() {
    const tp = el('div', {class:'typing'});
    tp.append(el('span',{class:'dot'}), el('span',{class:'dot'}), el('span',{class:'dot'}));
    return tp;
  }
  let buffer='';
  function getTypingDelay() {
    try {
      const raw = parseInt(localStorage.getItem('typing_speed') || '', 10);
      if (!isFinite(raw) || raw <= 0) return 20;
      return Math.min(500, Math.max(1, Math.floor(raw)));
    } catch (e) { return 20; }
  }
  const perCharMs = getTypingDelay();
  if (overlay) {
    try {
      ensureSpeechOverlayStyles();
      const inner = document.createElement('div');
      inner.style = 'display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px;max-width:90vw;border-radius:12px;color:#fff;';
      inner.id = 'speechBotInner';
      const avatar = document.createElement('div');
      avatar.style = 'width:60px;height:60px;border-radius:30px;overflow:hidden;';
      avatar.innerHTML = '<img src="logo.png" alt="bot" style="width:100%;height:100%;object-fit:cover;">';
      const textEl = document.createElement('div');
      textEl.id = 'speechOverlayStreamBubble';
      textEl.className = 'speechOverlayBotText';
      textEl.style = 'background:transparent;padding:12px;border-radius:12px;max-width:82vw;min-height:36px;';
      textEl.innerHTML = '';
      textEl.appendChild(makeTypingPlaceholder());
      inner.appendChild(avatar);
      inner.appendChild(textEl);
      overlay.innerHTML = '';
      overlay.appendChild(inner);
      try {
        if (needsTranslation) {
          try {
            const translated = await translateTextSafe(String(msg.content || ''), 'eng_Latn', String(userLang));
            if (translated) {
              msg._translated = String(translated);
              try { persist(); } catch (e) {}
            } else {
              console.debug('translateTextSafe returned no translation for message');
            }
          } catch (e) { console.debug('assistant translation failed', e); }
        }
        const rawTextOverlay = String((msg && msg._translated) ? msg._translated : msg.content || '');
        let finalOverlay = rawTextOverlay;
        try {
          const multiEnabledOverlay = localStorage.getItem('multi_message_mode') === '1';
          if (multiEnabledOverlay && msg && msg.role === 'assistant') {
            const rawParts = rawTextOverlay.match(/[^,\.?!]+[\.?!]?/g) || [rawTextOverlay];
            const parts = rawParts.map(p => String(p || '').trim()).filter(Boolean);
            const finalSegments = [];
            for (const p of parts) {
              if (!finalSegments.length) finalSegments.push(p);
              else {
                if (Math.random() < 0.5) finalSegments.push(p);
                else finalSegments[finalSegments.length - 1] = (finalSegments[finalSegments.length - 1] + ' ' + p).trim();
              }
            }
            if (finalSegments.length > 1) {
              finalOverlay = finalSegments[0];
              try { msg.content = finalOverlay; msg._multiRemaining = finalSegments.slice(1); try { persist(); } catch (e) {} } catch (e) {}
            }
          }
        } catch (e) {}
        const chars = finalOverlay.split('');
        let buffer = '';
        for (let i = 0; i < chars.length; i++) {
          buffer += chars[i];
          textEl.textContent = buffer;
          if (perCharMs <= 4) {
            if (i % 4 === 0) await new Promise(r => setTimeout(r, perCharMs));
          } else if (perCharMs <= 20) {
            if (i % 2 === 0) await new Promise(r => setTimeout(r, perCharMs));
          } else {
            await new Promise(r => setTimeout(r, perCharMs));
          }
        }
      } catch (e) { console.error('streamMessage overlay render failed', e); }
    } catch (e) { console.error('streamMessage overlay creation failed', e); }
    try {
      if (window.__jumboSpeech && typeof window.__jumboSpeech.startRecognition === 'function') {
        setTimeout(()=>{ try { window.__jumboSpeech.startRecognition(); } catch (e) { console.error(e); } }, 600);
      }
    } catch (e) {}
    return;
  }
  const row = el('div',{class:'msg assistant'});
  const avatarDiv = el('div', {class: 'avatar bot', style: 'width:40px; height:40px; min-width:40px; min-height:40px; display:flex; align-items:center; justify-content:center;', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">'});
  const col = el('div', {}, [ el('div',{class:'bubble', id:'streamBubble'}) ]);
  row.append(avatarDiv, col);
  chatEl.appendChild(row);
  chatEl.scrollTop = chatEl.scrollHeight;
  const bubble = col.querySelector('#streamBubble');
  bubble.appendChild(makeTypingPlaceholder());
  try {
    if (needsTranslation) {
      try {
        const translated = await translateTextSafe(String(msg.content || ''), 'eng_Latn', String(userLang));
        if (translated) {
          msg._translated = String(translated);
          try { persist(); } catch (e) {}
        } else {
          console.debug('translateTextSafe returned no translation for message');
        }
      } catch (e) { console.debug('assistant translation failed', e); }
    }
    const rawText = () => String((msg && msg._translated) ? msg._translated : msg.content || '');
    let final = rawText();
    try {
      const multiEnabled = localStorage.getItem('multi_message_mode') === '1';
      if (multiEnabled && msg && msg.role === 'assistant') {
        const rawParts = rawText.match(/[^,\.?!]+[\.?!]?/g) || [rawText];
        const parts = rawParts.map(p => String(p || '').trim()).filter(Boolean);
        const finalSegments = [];
        for (const p of parts) {
          if (!finalSegments.length) finalSegments.push(p);
          else {
            if (Math.random() < 0.5) finalSegments.push(p);
            else finalSegments[finalSegments.length - 1] = (finalSegments[finalSegments.length - 1] + ' ' + p).trim();
          }
        }
        if (finalSegments.length > 1) {
          final = finalSegments[0];
          try { msg.content = final; msg._multiRemaining = finalSegments.slice(1); try { persist(); } catch (e) {} } catch (e) {}
        }
      }
    } catch (e) {}
    bubble.innerHTML = '';
    let displayed = '';
    async function typeChars(newText) {
      const chars = newText.split('');
      for (let i = 0; i < chars.length; i++) {
        displayed += chars[i];
        try {
          bubble.innerHTML = '';
          bubble.appendChild(renderMarkdown(displayed));
        } catch (e) {
          bubble.textContent = displayed;
        }
        if (perCharMs <= 4) {
          if (i % 4 === 0) await new Promise(r => setTimeout(r, perCharMs));
        } else if (perCharMs <= 20) {
          if (i % 2 === 0) await new Promise(r => setTimeout(r, perCharMs));
        } else {
          await new Promise(r => setTimeout(r, perCharMs));
        }
      }
    }

    if (msg && msg._streaming) {
      let lastSeen = rawText();
      if (lastSeen && lastSeen.length) await typeChars(lastSeen);
      while (msg._streaming) {
        await new Promise(r => setTimeout(r, 120));
        const now = rawText();
        if (now === lastSeen) continue;
        if (now.startsWith(lastSeen)) {
          const added = now.slice(lastSeen.length);
          if (added.length) await typeChars(added);
          lastSeen = now;
        } else {
          try {
            bubble.innerHTML = '';
            bubble.appendChild(renderMarkdown(now));
          } catch (e) { bubble.textContent = now; }
          displayed = now;
          lastSeen = now;
        }
      }
      const finalNow = rawText();
      if (finalNow.length > displayed.length) {
        const added = finalNow.slice(displayed.length);
        if (added.length) await typeChars(added);
      }
    } else {
      const chars = final.split('');
      let buf = '';
      for (let i = 0; i < chars.length; i++) {
        buf += chars[i];
        try {
          bubble.innerHTML = '';
          bubble.appendChild(renderMarkdown(buf));
        } catch (e) {
          bubble.textContent = buf;
        }
        if (perCharMs <= 4) {
          if (i % 4 === 0) await new Promise(r => setTimeout(r, perCharMs));
        } else if (perCharMs <= 20) {
          if (i % 2 === 0) await new Promise(r => setTimeout(r, perCharMs));
        } else {
          await new Promise(r => setTimeout(r, perCharMs));
        }
      }
    }
    bubble.replaceWith(renderBubble(displayed || final));
    const meta = el('div',{class:'timestamp'}, formatTime(msg.ts));
    const tools = el('div',{class:'tools'});
    const copy = el('button',{class:'tool'}); copy.textContent='Copy';
    copy.addEventListener('click', ()=>navigator.clipboard.writeText(msg.content));
    const reply = el('button',{class:'tool'}); reply.textContent='Reply';
    reply.addEventListener('click', ()=>replyAt(currentConv().messages.indexOf(msg)));
    tools.append(copy, reply);
    col.append(tools, meta);
    chatEl.scrollTop = chatEl.scrollHeight;
    try {
      const remaining = msg && Array.isArray(msg._multiRemaining) ? msg._multiRemaining.slice() : null;
      if (remaining && remaining.length) {
        (async () => {
          for (const segText of remaining) {
            await new Promise(r => setTimeout(r, 300 + Math.random() * 300));
            try {
              const newMsg = { role: 'assistant', content: String(segText), ts: Date.now(), _key: null };
              try { const conv2 = currentConv(); if (conv2) { conv2.messages.push(newMsg); try { persist(); } catch (e) {} } } catch (e) {}
              try {
                const row2 = el('div', { class: 'msg assistant' });
                const avatarDiv2 = el('div', { class: 'avatar bot', style: 'width:40px; height:40px; min-width:40px; min-height:40px; display:flex; align-items:center; justify-content:center;', html: '<img src="logo.png" alt="bot logo" style="width:100%; height:100%; border-radius:10px; object-fit:cover;">' });
                const bubbleEl = renderBubble(String(newMsg.content || ''));
                const col2 = el('div', {}, [ bubbleEl ]);
                const meta2 = el('div', { class: 'timestamp' }, formatTime(newMsg.ts));
                const tools2 = el('div', { class: 'tools' });
                const copy2 = el('button', { class: 'tool' }); copy2.textContent = 'Copy'; copy2.addEventListener('click', () => navigator.clipboard.writeText(newMsg.content));
                const reply2 = el('button', { class: 'tool' }); reply2.textContent = 'Reply'; reply2.addEventListener('click', () => replyAt(currentConv().messages.indexOf(newMsg)));
                tools2.append(copy2, reply2);
                col2.append(tools2, meta2);
                row2.append(avatarDiv2, col2);
                chatEl.appendChild(row2);
                chatEl.scrollTop = chatEl.scrollHeight;
              } catch (e) { console.error('rendering multi-message segment failed', e); renderMessages(); }
            } catch (e) { console.error('multi-message append failed', e); }
          }
        })();
      }
    } catch (e) {}
  } catch (e) {
    console.error('streamMessage chat render failed', e);
    try { bubble.replaceWith(renderBubble(String(msg.content || ''))); } catch (ex) {}
    try { const meta = el('div',{class:'timestamp'}, formatTime(msg.ts)); col.append(meta); } catch (ex) {}
  }
}
function regenerateAt(index){
  const conv = currentConv();
  const userBefore = conv.messages.slice(0, index).reverse().find(m=>m.role==='user');
  if(!userBefore) return;
  conv.messages = conv.messages.slice(0, index);
  persist(); renderMessages();
  sendMessage(userBefore.content);
}
function replyAt(index){
  const conv = currentConv();
  const msg = conv.messages[index];
  if(!msg) return;
  if(msg._key) lastBotKey = msg._key;
  awaitingAnswer = true;
  replyTargetIndex = index;
  inputEl.focus();
  inputEl.placeholder = 'Replying to the bot...';
}
sendBtn.addEventListener('click', trySend);
inputEl.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' && !e.shiftKey){
    e.preventDefault(); trySend();
  }
});
function trySend(){
  if(botBusy) return;
  const text = inputEl.value.trim();
  if(!text) return;
  inputEl.placeholder = 'Say anything...';
  sendMessage(text);
}
function autosize(){
  inputEl.style.height='auto';
  inputEl.style.height=Math.min(inputEl.scrollHeight, 400)+'px';
}
inputEl.addEventListener('input', autosize);
window.addEventListener('resize', autosize);
document.addEventListener('keydown', (e) => {
  try {
    if (e.ctrlKey) return;
    if (document.activeElement === inputEl) return;
    const tgt = e.target;
    if (tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.isContentEditable)) return;
    if (e.key && e.key.length === 1) {
      e.preventDefault();
      inputEl.focus();
      inputEl.value = inputEl.value + e.key;
      autosize();
      inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
    }
  } catch (err) {
  }
});
inputEl.addEventListener('input', (e) => {
  const v = inputEl.value;
  showAutocompleteSuggestions(v);
});
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    autoCompleteEl.innerHTML = '';
    return;
  }
  if (e.key === 'ArrowDown') {
    const first = autoCompleteEl.querySelector('button');
    if (first) { first.focus(); e.preventDefault(); }
  }
});
document.addEventListener('click', (e) => {
  if (!autoCompleteEl.contains(e.target) && e.target !== inputEl) autoCompleteEl.innerHTML = '';
});
document.getElementById('newChat').addEventListener('click', ()=>{
  const conv = createConversation({ model: 'default' });
  currentId = conv.id; persist(); hydrate();
});
document.getElementById('clearAll').addEventListener('click', async ()=>{
  const ok = await showConfirm('Clear all conversations?');
  if(!ok) return;
  conversations=[]; currentId=createConversation({ model: 'default' }).id; persist(); hydrate();
});
document.getElementById('exportBtn').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify({version:1, conversations}, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Jumbo-local-export.json';
  a.click();
});
document.getElementById('importBtn').addEventListener('click', ()=>{
  const inp = document.createElement('input'); inp.type='file'; inp.accept='application/json';
  inp.onchange = e=>{
    const file = e.target.files[0]; if(!file) return;
    file.text().then(t=>{
      try{
        const data = JSON.parse(t);
        if(Array.isArray(data.conversations)) conversations = data.conversations;
        else if(Array.isArray(data)) conversations = data;
  currentId = conversations[0]?.id || createConversation({ model: 'default' }).id;
        persist(); hydrate();
  }catch(err){ showPopup('Invalid file', {buttonText:'Close'}); }
    });
  };
  inp.click();
});
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')){
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  renderMessages();
});
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light'){
  document.body.classList.add('light');
}
async function hydrate(){
  try {
    const conv = currentConv();
    const urlParams = (typeof location !== 'undefined' && location.search) ? new URLSearchParams(location.search) : null;
    const urlModel = urlParams ? String(urlParams.get('model') || '').trim().toLowerCase() : '';
    const model = urlModel || (conv && conv.model) || 'default';
    try { await applyModelToKeys(model); } catch (e) {}
  } catch (e) {}
  renderHistory();
  convTitle.textContent = currentConv()?.title || 'New chat';
  renderMessages();
  try { updateAiBuilderButtonState(); } catch (e) {}
  try {
    const conv = currentConv();
    ensureImageEditorPanel();
    const panel = document.getElementById('imageEditorPanel');
    if (conv && conv.imageData) {
      showImageInEditor(conv.imageData, conv.imageFilename || conv.title || 'uploaded');
      if (panel) panel.style.display = 'block';
      try { adjustLayoutForEditor(true); } catch (e) {}
      imageUploadModeActive = false;
    } else {
      if (panel) panel.style.display = 'none';
      try { adjustLayoutForEditor(false); } catch (e) {}
    }
  } catch (e) { console.error('hydrate image restore failed', e); }
}
const webBtn = document.getElementById('webSearch');
if (webBtn) {
  webBtn.addEventListener('click', () => { setActiveTool(webSearchMode ? null : 'web'); });
}
const aiBuilderBtnDesktop = document.getElementById('aiBuilderToggle');
if (aiBuilderBtnDesktop) {
  aiBuilderBtnDesktop.addEventListener('click', () => {
    const perma = getAiBuilderPermanentlyDisabled();
    if (perma) { showPopup(perma.reason || 'AI Builder is undergoing maintenance'); return; }
    setActiveTool(aiBuilderMode ? null : 'aibuilder');
  });
}
let _isOnline = true;
const HEARTBEAT_URL = 'heartbeat.txt'; 
function showLostInternetPopup() {
  let old = document.getElementById('lostInternetPopup');
  if (old) return; 
  const overlay = document.createElement('div');
  overlay.id = 'lostInternetPopup';
  overlay.style = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;';
  const box = document.createElement('div');
  box.style = 'background:var(--elev);color:var(--text);padding:1.2em;border-radius:12px;max-width:90vw;width:360px;box-shadow:0 8px 32px #0003;text-align:center;';
  box.innerHTML = `<div style='font-size:1.2rem;margin-bottom:0.5rem;'><i class="fa-solid fa-circle-exclamation" style="color:#f39c12;margin-right:8px;"></i>Lost Internet!</div><div style='color:var(--muted);margin-bottom:0.8rem;'>The app cannot reach the internet. Web Search and Image tools are disabled until connection is restored.</div>`;
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.className = 'btn';
  closeBtn.style = 'margin-top:8px;'; closeBtn.onclick = () => { overlay.remove(); };
  box.appendChild(closeBtn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
function showContendersPopup(contenders, contextText) {
  try {
    let old = document.getElementById('contendersPopup'); if (old) old.remove();
    const overlay = document.createElement('div'); overlay.id = 'contendersPopup';
    overlay.style = 'position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;';
    const box = document.createElement('div');
    box.style = 'background:var(--elev);color:var(--text);padding:14px;border-radius:12px;max-width:92vw;width:640px;box-shadow:0 12px 48px rgba(0,0,0,0.25);text-align:left;';
    const title = document.createElement('div'); title.style = 'font-weight:700;margin-bottom:8px;font-size:1.05rem;'; title.textContent = 'Alternative contenders (not chosen)';
    box.appendChild(title);
    if (contextText) {
      const ctx = document.createElement('div'); ctx.style = 'color:var(--muted);margin-bottom:8px;'; ctx.textContent = 'Message preview: ' + (contextText.length > 200 ? contextText.slice(0,200) + '…' : contextText);
      box.appendChild(ctx);
    }
    const list = document.createElement('div'); list.style = 'display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow:auto;padding-right:6px;margin-bottom:10px;';
    if (!contenders || !contenders.length) {
      const none = document.createElement('div'); none.style = 'color:var(--muted);'; none.textContent = 'No alternative contenders recorded for this message.'; list.appendChild(none);
    } else {
      for (const c of contenders) {
        const row = document.createElement('div'); row.style = 'display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;background:rgba(0,0,0,0.03);';
        const k = document.createElement('div'); k.style = 'font-weight:600;'; k.textContent = c.key || String(c || '');
        const r = document.createElement('div'); r.style = 'color:var(--muted);font-family:monospace;'; r.textContent = (c.score !== undefined) ? ('score: ' + String(c.score)) : '';
        row.appendChild(k); row.appendChild(r);
        list.appendChild(row);
      }
    }
    box.appendChild(list);
    const closeBtn = document.createElement('button'); closeBtn.className = 'btn'; closeBtn.textContent = 'Close'; closeBtn.style = 'margin-top:6px;'; closeBtn.onclick = () => overlay.remove();
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  } catch (e) { console.error('showContendersPopup failed', e); }
}
function showSentenceConfuserPopup() {
  try {
    let old = document.getElementById('sentenceConfuser'); if (old) old.remove();
  const overlay = document.createElement('div'); overlay.id = 'sentenceConfuser';
  overlay.style = 'position:fixed;inset:0;z-index:120000;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 20% 20%, rgba(95,150,255,0.08), transparent 12%), radial-gradient(circle at 80% 80%, rgba(40,100,200,0.06), transparent 14%), linear-gradient(135deg, #dceeff 0%, #b7d9ff 50%, #8fb8ff 100%);backdrop-filter:blur(6px);';
    const canvas = document.createElement('canvas'); canvas.id = 'confettiCanvas';
    canvas.style = 'position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:119999;';
    document.body.appendChild(canvas);
    function fitCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    fitCanvas(); window.addEventListener('resize', fitCanvas);
  const box = document.createElement('div');
  box.style = 'background:linear-gradient(180deg, rgba(245,253,FF,0.98), rgba(235,245,255,0.95));color:#10203a;padding:18px;border-radius:16px;max-width:94vw;width:720px;box-shadow:0 20px 60px rgba(13,38,76,0.18);text-align:left;border:6px solid rgba(255,255,255,0.5);position:relative;overflow:visible;';
  const title = document.createElement('div'); title.style='font-weight:900;margin-bottom:6px;font-size:1.6rem;color:#064b9c;text-shadow:0 6px 18px rgba(6,75,156,0.08);letter-spacing:0.6px;'; title.textContent = '🎉 Sentence Confuser! 🎊';
    const subtitle = document.createElement('div'); subtitle.style='color:#333;margin-bottom:12px;font-weight:700;'; subtitle.textContent = 'Enter any sentence and press Confuse!';
  const sparkle = document.createElement('div'); sparkle.style = 'position:absolute;right:-18px;top:-18px;width:72px;height:72px;border-radius:50%;background:conic-gradient(#cfe9ff, #8fb8ff, #6bb0ff, #d6f0ff);filter:blur(12px);opacity:0.95;transform:rotate(20deg);';
    box.appendChild(sparkle);
    const info = document.createElement('div'); info.style='color:#444;margin-bottom:10px;'; info.textContent = 'You found an easter egg! This tool replaces words with random synonyms. Try it out:';
    const ta = document.createElement('textarea'); ta.style = 'width:100%;height:120px;padding:12px;border-radius:12px;border:2px dashed rgba(0,0,0,0.06);background:linear-gradient(180deg,#fff,#fff);color:#111;font-size:1rem;';
  const btnRowTop = document.createElement('div'); btnRowTop.style = 'display:flex;gap:8px;justify-content:flex-end;margin-top:10px;';
  const confuseBtn = document.createElement('button'); confuseBtn.className = 'btn primary'; confuseBtn.textContent = 'Confuse!';
  const copyBtn = document.createElement('button'); copyBtn.className = 'btn'; copyBtn.textContent = 'Copy result'; copyBtn.disabled = true;
  const closeBtn = document.createElement('button'); closeBtn.className = 'btn'; closeBtn.textContent = 'Close';
    const resultWrap = document.createElement('div'); resultWrap.style = 'margin-top:10px;';
    const resultBox = document.createElement('textarea'); resultBox.style = 'width:100%;height:120px;padding:12px;border-radius:12px;border:2px solid rgba(0,0,0,0.06);background:#fff;color:#111;font-size:1rem;'; resultBox.readOnly = true;
    resultWrap.appendChild(resultBox);
  btnRowTop.appendChild(copyBtn); btnRowTop.appendChild(confuseBtn); btnRowTop.appendChild(closeBtn);
    box.appendChild(title); box.appendChild(subtitle); box.appendChild(info); box.appendChild(ta); box.appendChild(btnRowTop); box.appendChild(resultWrap);
    overlay.appendChild(box); document.body.appendChild(overlay);
    const ctx = canvas.getContext('2d');
    const confetti = [];
    const colors = ['#ff4d6d','#ffd166','#06d6a0','#4d8cff','#b886ff','#ff7ab6','#ffd36b'];
    function spawnConfetti(count=80) {
      for (let i=0;i<count;i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: -10 - Math.random() * 200,
          vx: (Math.random() - 0.5) * 8,
          vy: 2 + Math.random() * 6,
          r: 6 + Math.random() * 8,
          color: colors[Math.floor(Math.random()*colors.length)],
          rot: Math.random()*360,
          vr: (Math.random()-0.5)*10
        });
      }
    }
    let confAnimId = null;
    function renderConfetti() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let i = confetti.length-1; i >= 0; i--) {
        const p = confetti[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.15;
        p.rot += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI/180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r*0.6);
        ctx.restore();
        if (p.y > canvas.height + 60) confetti.splice(i,1);
      }
      if (confAnimId) confAnimId = requestAnimationFrame(renderConfetti);
    }
    function startConfettiBurst() { spawnConfetti(140); if (!confAnimId) { confAnimId = requestAnimationFrame(renderConfetti); } }
    function stopConfetti() { if (confAnimId) { cancelAnimationFrame(confAnimId); confAnimId = null; } confetti.length = 0; ctx.clearRect(0,0,canvas.width,canvas.height); }
    startConfettiBurst(); setTimeout(()=>spawnConfetti(80), 600);
    confuseBtn.addEventListener('click', ()=>{
      try {
        const src = String(ta.value || '').trim();
        if (!src) return;
        const words = src.split(/(\s+)/);
        const out = words.map(tok => {
          if (/^\s+$/.test(tok)) return tok;
          const clean = String(tok).replace(/[^\w\-']/g,'').toLowerCase();
          if (clean && window.synonymsDataset && window.synonymsDataset[clean] && Array.isArray(window.synonymsDataset[clean]) && window.synonymsDataset[clean].length) {
            const pool = window.synonymsDataset[clean];
            const pick = pool[Math.floor(Math.random() * pool.length)];
            if (tok[0] && tok[0] === tok[0].toUpperCase()) {
              return pick.charAt(0).toUpperCase() + pick.slice(1);
            }
            return pick;
          }
          return tok;
        }).join('');
  resultBox.value = out;
  copyBtn.disabled = false;
        startConfettiBurst();
        box.animate([{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)', transform: 'translateY(0)' },{ boxShadow: '0 28px 86px rgba(255,80,160,0.18)', transform: 'translateY(-6px)' },{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)', transform: 'translateY(0)' }], { duration: 900 });
      } catch (e) { console.error(e); }
    });
    copyBtn.addEventListener('click', ()=>{ navigator.clipboard.writeText(resultBox.value || ''); });
    function cleanup() {
      try { overlay.remove(); } catch (e) {}
      try { const c = document.getElementById('confettiCanvas'); if (c) c.remove(); } catch (e) {}
      try { window.removeEventListener('resize', fitCanvas); } catch (e) {}
      stopConfetti();
    }
    closeBtn.addEventListener('click', ()=> cleanup());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(); });
    ta.focus();
  } catch (e) { console.error('showSentenceConfuserPopup failed', e); }
}
function setToolDisabled(el, disabled, reasonIcon = true) {
  if (!el) return;
  if (disabled) {
    el.disabled = true;
    el.classList.add('disabled-tool');
    if (reasonIcon) {
      if (!el.querySelector('.tool-off-icon')) {
        const ic = document.createElement('span');
        ic.className = 'tool-off-icon';
        ic.style = 'margin-left:6px;color:#f39c12;position:relative;top:0;';
        ic.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        try { el.appendChild(ic); } catch (e) {}
      }
    }
  } else {
    el.disabled = false;
    el.classList.remove('disabled-tool');
    const ic = el.querySelector('.tool-off-icon'); if (ic) ic.remove();
  }
}
function setMobileToolDisabled(toolName, disabled) {
  try {
    const selector = `li[data-tool="${toolName}"]`;
    const li = document.querySelector(selector);
    if (!li) return;
    if (disabled) {
      li.setAttribute('data-disabled', 'true');
      li.classList.add('disabled-tool');
      if (!li.querySelector('.tool-off-icon')) {
        const ic = document.createElement('span'); ic.className='tool-off-icon'; ic.style='margin-left:8px;color:#f39c12;'; ic.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        li.appendChild(ic);
      }
    } else {
      li.removeAttribute('data-disabled');
      li.classList.remove('disabled-tool');
      const ic = li.querySelector('.tool-off-icon'); if (ic) ic.remove();
    }
  } catch (e) {}
}
function setOnlineState(online) {
  const wasOnline = !!_isOnline;
  _isOnline = !!online;
  const imgToggle = document.getElementById('imageToggle');
  const webToggle = document.getElementById('webSearch');
  setToolDisabled(imgToggle, !_isOnline);
  setToolDisabled(webToggle, !_isOnline);
  setMobileToolDisabled('image', !_isOnline);
  setMobileToolDisabled('web', !_isOnline);
  if (!_isOnline && wasOnline) {
    showLostInternetPopup();
  }
  if (_isOnline && !wasOnline) {
    const old = document.getElementById('lostInternetPopup'); if (old) old.remove();
  }
}
async function checkHeartbeat() {
  try {
    const resp = await fetch(HEARTBEAT_URL + '?_=' + Date.now(), { cache: 'no-store' });
    if (!resp || !resp.ok) { setOnlineState(false); return false; }
    const txt = await resp.text();
    if (String(txt || '').trim().toLowerCase() === 'true') { setOnlineState(true); return true; }
    setOnlineState(false); return false;
  } catch (e) {
    setOnlineState(false);
    return false;
  }
}
try { checkHeartbeat(); setInterval(checkHeartbeat, 60 * 1000); } catch (e) {}
if (!document.getElementById('disabledToolStyle')) {
  const s = document.createElement('style'); s.id = 'disabledToolStyle';
  s.textContent = `.disabled-tool { opacity:0.6; pointer-events:none; } .disabled-tool .tool-off-icon { margin-left:8px; }`;
  try { document.head.appendChild(s); } catch (e) { document.body.appendChild(s); }
}
document.addEventListener('DOMContentLoaded', () => {
  const mobileToolsBtn = document.getElementById('mobileToolsBtn');
  const mobileToolsMenu = document.getElementById('mobileToolsMenu');
  const mobileToolsDropdown = document.getElementById('mobileToolsDropdown');
  const mobileToolsBtnComposer = document.getElementById('mobileToolsBtnComposer');
  const mobileToolsMenuComposer = document.getElementById('mobileToolsMenuComposer');
  const mobileToolsDropdownComposer = document.getElementById('mobileToolsDropdownComposer');
  const mobileChatsBtn = document.getElementById('mobileChatsBtn');
  const mobileChatsOverlay = document.getElementById('mobileChatsOverlay');
  const mobileCloseChats = document.getElementById('mobileCloseChats');
  const mobileHistoryContainer = document.getElementById('mobileHistoryContainer');
  function updateMobileUIVisibility() {
    const showMobile = window.innerWidth <= 900;
    const elems = document.querySelectorAll('.mobile-only');
    elems.forEach(elm => {
      elm.style.display = showMobile ? '' : 'none';
    });
  }
  window.addEventListener('resize', updateMobileUIVisibility);
  updateMobileUIVisibility();
  try { updateAiBuilderButtonState(); } catch (e) {}
  if (mobileToolsBtn && mobileToolsMenu && mobileToolsDropdown) {
    mobileToolsBtn.addEventListener('click', () => mobileToolsDropdown.classList.toggle('open'));
    mobileToolsMenu.addEventListener('click', (e) => {
      const li = e.target.closest('li[data-tool]');
      if (!li) return;
      if (li.getAttribute('data-disabled') === 'true') return; 
      const tool = li.getAttribute('data-tool');
      mobileToolsDropdown.classList.remove('open');
  if (tool === 'jsfix') setActiveTool(jsFixMode ? null : 'jsfix');
  if (tool === 'image') setActiveTool(imageMode ? null : 'image');
  if (tool === 'think') setActiveTool(thinkMode ? null : 'think');
  if (tool === 'web') setActiveTool(webSearchMode ? null : 'web');
  if (tool === 'aibuilder') setActiveTool(aiBuilderMode ? null : 'aibuilder');
    });
  }
  if (mobileToolsBtnComposer && mobileToolsMenuComposer && mobileToolsDropdownComposer) {
    mobileToolsBtnComposer.addEventListener('click', () => mobileToolsDropdownComposer.classList.toggle('open'));
    mobileToolsMenuComposer.addEventListener('click', (e) => {
      const li = e.target.closest('li[data-tool]');
      if (!li) return;
      if (li.getAttribute('data-disabled') === 'true') return; 
      const tool = li.getAttribute('data-tool');
      mobileToolsDropdownComposer.classList.remove('open');
      if (tool === 'jsfix') setActiveTool(jsFixMode ? null : 'jsfix');
      if (tool === 'image') setActiveTool(imageMode ? null : 'image');
      if (tool === 'think') setActiveTool(thinkMode ? null : 'think');
      if (tool === 'web') setActiveTool(webSearchMode ? null : 'web');
    });
  }
  if (mobileChatsBtn && mobileChatsOverlay && mobileCloseChats && mobileHistoryContainer) {
    mobileChatsBtn.addEventListener('click', () => {
      renderHistory(mobileHistoryContainer);
      mobileChatsOverlay.style.display = 'block';
    });
    mobileCloseChats.addEventListener('click', () => { mobileChatsOverlay.style.display = 'none'; });
    const backdrop = document.getElementById('mobileChatsBackdrop');
    if (backdrop) backdrop.addEventListener('click', () => { mobileChatsOverlay.style.display = 'none'; });
  }
  try {
    const mobileNew = document.getElementById('mobileNewChat');
    if (mobileNew) mobileNew.addEventListener('click', () => { document.getElementById('newChat').click(); mobileChatsOverlay.style.display = 'none'; });
    const mobileClear = document.getElementById('mobileClearAll');
    if (mobileClear) mobileClear.addEventListener('click', () => { document.getElementById('clearAll').click(); mobileChatsOverlay.style.display = 'none'; });
    const mobileExport = document.getElementById('mobileExport');
    if (mobileExport) mobileExport.addEventListener('click', () => { document.getElementById('exportBtn').click(); mobileChatsOverlay.style.display = 'none'; });
    const mobileImport = document.getElementById('mobileImport');
    if (mobileImport) mobileImport.addEventListener('click', () => { document.getElementById('importBtn').click(); mobileChatsOverlay.style.display = 'none'; });
  } catch (e) {}
});
function scrollAndHighlight(index){
  const conv = currentConv();
  const rows = Array.from(chatEl.querySelectorAll('.msg'));
  if(index < 0 || index >= conv.messages.length) return;
  const row = rows[index];
  if(!row) return;
  row.scrollIntoView({behavior:'smooth', block:'center'});
  const bubble = row.querySelector('.bubble');
  if(!bubble) return;
  const origBg = bubble.style.background;
  bubble.style.transition = 'background-color 0.25s ease';
  bubble.style.background = 'rgba(16,163,127,0.08)';
  setTimeout(()=>{ bubble.style.background = origBg || ''; }, 900);
}
function buildUserInfoSummary(info, conversational = true) {
  info = info || {};
  const pieces = [];
  if (info.name) pieces.push(conversational ? `your name is ${info.name}` : `Name: ${info.name}`);
  if (info.age) pieces.push(conversational ? `you are ${info.age} years old` : `Age: ${info.age}`);
  if (info.likes && info.likes.length) pieces.push(conversational ? `you like ${info.likes.join(', ')}` : `Likes: ${info.likes.join(', ')}`);
  if (info.dislikes && info.dislikes.length) pieces.push(conversational ? `you dislike ${info.dislikes.join(', ')}` : `Dislikes: ${info.dislikes.join(', ')}`);
  if (info.biometrics) pieces.push(conversational ? `your biometrics are ${info.biometrics}` : `Biometrics: ${info.biometrics}`);
  if (!pieces.length) return conversational ? "I don't have any information about you yet." : "(no user info)";
  if (conversational) {
    if (pieces.length === 1) return `I know that ${pieces[0]}.`;
    if (pieces.length === 2) return `I know that ${pieces[0]} and ${pieces[1]}.`;
    const last = pieces.pop();
    return `I know that ${pieces.join(', ')}, and ${last}.`;
  }
  return pieces.join(' · ');
}
(function(){
  function initSpeechIntegration() {
    try {
      const btn = document.getElementById('speechToggle');
      window.receiveSpeechTranscript = window.receiveSpeechTranscript || function(text, opts = {}){
        try {
          if (typeof text !== 'string') text = String(text || '');
          if (!inputEl) return;
          if (opts.append) inputEl.value = (inputEl.value ? inputEl.value + ' ' : '') + text;
          else inputEl.value = text;
          autosize(); inputEl.focus();
          if (opts.send) trySend();
        } catch (e){ console.error('receiveSpeechTranscript', e); }
      };
      window.jumbo = window.jumbo || {};
      window.jumbo.receiveTranscript = window.receiveSpeechTranscript;
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
      if (!SpeechRecognition) {
        if (btn) btn.addEventListener('click', async () => {
          await showPopup('Speech recognition is not supported in this browser. Try Chrome/Edge on desktop or use the built speech UI.');
        });
        console.warn('SpeechRecognition API not available in this browser.');
        return;
      }
      let recognizing = false;
      let recognition = null;
      let finalTranscript = '';
      function showSpeechOverlay() {
        try {
          hideSpeechOverlay();
          const overlay = document.createElement('div');
          overlay.id = 'speechListeningOverlay';
          overlay.style = 'position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,1);display:flex;align-items:center;justify-content:center;';
          overlay.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px;max-width:90vw;border-radius:12px;">
              <img id="speechLoadingGif" src="loadingGifs/tiles.gif" alt="listening" style="width:160px;height:auto;display:block;border-radius:12px;" />
              <div id="speechOverlayText" style="color:#fff;text-align:center;font-size:1rem;max-width:90vw;word-wrap:break-word;">Listening...</div>
              <button id="speechOverlayClose" style="margin-top:6px;padding:8px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.12);color:#fff;cursor:pointer;">Close</button>
            </div>
          `;
          overlay.addEventListener('click', (ev) => {
            if (ev.target === overlay) hideSpeechOverlay();
          });
          document.body.appendChild(overlay);
          try {
            Array.from(document.body.children).forEach(child => {
              if (child === overlay) return;
              child.dataset.__prevVisibility = child.style.visibility || '';
              child.style.visibility = 'hidden';
            });
            document.documentElement.dataset.__prevOverflow = document.documentElement.style.overflow || '';
            document.documentElement.style.overflow = 'hidden';
          } catch (e) {}
          const closeBtn = document.getElementById('speechOverlayClose');
          if (closeBtn) closeBtn.onclick = () => hideSpeechOverlay();
        } catch (e) { console.error('showSpeechOverlay failed', e); }
      }
      function setSpeechOverlayMessage(msg) {
        try {
          const el = document.getElementById('speechOverlayText');
          if (el) el.textContent = msg;
        } catch (e) {}
      }
      function setOverlayToProcessing() {
        try {
          const overlay = document.getElementById('speechListeningOverlay');
          if (!overlay) return showSpeechOverlay();
          overlay.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px;max-width:90vw;border-radius:12px;">
              <img id="speechLoadingGif" src="loadingGifs/tiles.gif" alt="processing" style="width:160px;height:auto;display:block;border-radius:12px;" />
              <div id="speechOverlayText" style="color:#fff;text-align:center;font-size:1rem;max-width:90vw;word-wrap:break-word;">Processing...</div>
            </div>
          `;
        } catch (e) { console.error('setOverlayToProcessing failed', e); }
      }
      function ensureSpeechOverlayStyles() {
        try {
          if (document.getElementById('speechOverlayStyle')) return;
          const ss = document.createElement('style');
          ss.id = 'speechOverlayStyle';
          ss.textContent = `
          .speechOverlayBotText {
            background: linear-gradient(90deg, rgba(0,112,243,1) 0%, rgba(0,112,243,0.8) 30%, rgba(0,112,243,0.45) 60%, rgba(0,112,243,1) 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 1rem;
            line-height: 1.4;
            text-align: center;
            white-space: pre-wrap;
            word-break: break-word;
            animation: speechGradientShift 2.2s linear infinite;
          }
          @keyframes speechGradientShift {
            0% { background-position: 0% 0%; }
            100% { background-position: -200% 0%; }
          }
          `;
          try { document.head.appendChild(ss); } catch (e) { document.body.appendChild(ss); }
        } catch (e) { console.error('ensureSpeechOverlayStyles failed', e); }
      }
      try { window.ensureSpeechOverlayStyles = ensureSpeechOverlayStyles; } catch (e) {}
      function hideSpeechOverlay() {
        try {
          const old = document.getElementById('speechListeningOverlay');
          if (old) old.remove();
          Array.from(document.body.children).forEach(child => {
            try {
              if (child.dataset && child.dataset.__prevVisibility !== undefined) {
                child.style.visibility = child.dataset.__prevVisibility || '';
                delete child.dataset.__prevVisibility;
              }
            } catch (e) {}
          });
          if (document.documentElement && document.documentElement.dataset && document.documentElement.dataset.__prevOverflow !== undefined) {
            document.documentElement.style.overflow = document.documentElement.dataset.__prevOverflow || '';
            delete document.documentElement.dataset.__prevOverflow;
          }
        } catch (e) {}
      }
      function startRecognition() {
        if (recognizing) return;
        recognition = new SpeechRecognition();
        recognition.lang = navigator.language || 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onstart = function(){
          recognizing = true;
          if (btn) { btn.classList.add('primary'); btn.textContent = ''; btn.innerHTML = '<i class="fas fa-microphone"></i> Recording...'; }
          try {
            const overlay = document.getElementById('speechListeningOverlay');
            const hasBotInner = overlay && overlay.querySelector('#speechBotInner');
            if (!overlay || !hasBotInner) {
              showSpeechOverlay(); setSpeechOverlayMessage('Listening...');
            } else {
              let indicator = overlay.querySelector('#speechListeningIndicator');
              if (!indicator) {
                indicator = document.createElement('div');
                indicator.id = 'speechListeningIndicator';
                indicator.style = 'margin-top:8px;color:#ddd;font-size:0.95rem;';
                indicator.textContent = 'Listening...';
                const botInner = overlay.querySelector('#speechBotInner');
                if (botInner) botInner.appendChild(indicator);
              } else {
                indicator.style.display = '';
              }
            }
          } catch (e) {}
        };
        recognition.onerror = function(event){
          console.error('Speech recognition error', event);
          recognizing = false;
          try { setSpeechOverlayMessage('Error during speech recognition'); setTimeout(hideSpeechOverlay, 3000); } catch (e) {}
          cleanupUI();
        };
        recognition.onend = function(){
          recognizing = false;
          cleanupUI();
          try {
            if (finalTranscript) {
              setOverlayToProcessing();
              if (window.receiveSpeechTranscript) window.receiveSpeechTranscript(finalTranscript, { append: false, send: true });
              finalTranscript = '';
            } else {
              setSpeechOverlayMessage('No speech detected');
              setTimeout(hideSpeechOverlay, 2500);
            }
          } catch (e) { console.error(e); hideSpeechOverlay(); }
        };
        recognition.onresult = function(event){
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
            else interim += event.results[i][0].transcript;
          }
        };
        try { recognition.start(); } catch (e) { console.error('recognition.start failed', e); }
      }
      function stopRecognition() {
        if (!recognition) return;
        try { recognition.stop(); } catch (e) { console.error('recognition.stop failed', e); }
      }
      function cleanupUI(){ if (btn) { btn.classList.remove('primary'); btn.innerHTML = '<i class="fas fa-microphone"></i>'; btn.title='Speech-to-Text (Click to start recording)'; } }
      window.__jumboSpeech = window.__jumboSpeech || {};
      window.__jumboSpeech.startRecognition = () => { finalTranscript = ''; startRecognition(); };
      window.__jumboSpeech.stopRecognition = () => stopRecognition();
      if (btn) {
        btn.title = 'Speech-to-Text (Click to start recording)';
        btn.addEventListener('click', (e)=>{
          e.preventDefault();
          if (!recognizing) { finalTranscript = ''; startRecognition(); }
          else { stopRecognition(); }
        });
      }
      console.debug('[speech] in-page recorder initialized, buttonPresent=' + !!document.getElementById('speechToggle'));
    } catch (err) { console.error('Speech integration init failed', err); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSpeechIntegration, { once: true }); else initSpeechIntegration();
})();