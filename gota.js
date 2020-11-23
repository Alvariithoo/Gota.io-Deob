const build = 2011020;
var version, showSideMenu, hideSideMenu;
(function() {
    var _0x5E54 = [
     "gota.io",
     "",
     ":",
     "split",
     "/",
     "://",
     "href",
     "location",
     "",
     "",
     "length",
     ".",
     "error",
     "3.2.13",
     "#",
     "display",
     "css",
     "none",
     "show",
     "block",
     "hide",
     "each",
     "children",
     "#main-right",
     "PIXI",
     "Container",
     "EMPTY",
     "Texture",
     "Sprite",
     "addChild",
     "PI",
     "https://gota.io/blog/changelog",
     "GoogleAuthProvider",
     "auth",
     "https://accounts.gota.io",
     "halloween2020",
     "enabled",
     "endDate",
     "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
     "accounts.gota.io",
     "https://gota-io.firebaseio.com",
     "gota-io",
     "gota-io.appspot.com",
     "570450309042",
     "1:570450309042:web:380ab6c94d44de2f",
     "initializeApp",
     "All",
     "Party",
     "ALL",
     "AUTO",
     "NONE",
     "ULTRA",
     "360px",
     "250px",
     "stringify",
     "parse",
     "assign",
     "rgb(255, 255, 255)",
     "rgba(23, 22, 23, 0.9)",
     "rgba(255, 255, 255, .2)",
     "rgb(14, 14, 14)",
     "rgba(50, 50, 50, 0.8)",
     "#121212",
     "rgba(170, 170, 170, .25)",
     "#ff0000",
     "#ffaaaa",
     "#ffff00",
     "#00ffff",
     "#00ff00",
     "canvas",
     "getElementById",
     "minimap-canvas",
     "2d",
     "getContext",
     "#main",
     "#party-panel",
     ".hud-panel",
     "#score-panel",
     "#main-scrimmage",
     "#context-menu",
     "#chat-input",
     "#leaderboard-header",
     "#scrimmage-custom",
     "mouseFrozenDiv",
     "#score-mouse",
     "playerScore",
     "#playerScore",
     "playerCells",
     "#playerCells",
     "playerFps",
     "#playerFps",
     "resetInfo",
     "#extra-reset-timer",
     "resetTime",
     "#resetTime",
     "spectatorCount",
     "#spectatorCount",
     "playerCellCount",
     "minimapCoords",
     "#minimap-coordinates",
     "partyPanel",
     "onmousemove",
     "mouseRawX",
     "clientX",
     "mouseRawY",
     "clientY",
     "onkeydown",
     "which",
     "keyCode",
     "charCode",
     "preventDefault",
     ":focus",
     "is",
     "input",
     "#popup-profile",
     "#popup-account-username",
     "handleKey",
     "onkeyup",
     "kEjectMass",
     "onmousedown",
     "button",
     "onmouseup",
     "mousewheel",
     "id",
     "target",
     "wheelDelta",
     "originalEvent",
     "deltaY",
     "mouseZoom",
     "on",
     "contextmenu",
     "addEventListener",
     "&",
     "join",
     "slice",
     "toLowerCase",
     "toUpperCase",
     "name",
     "region",
     "value",
     "val",
     "version",
     "Woah! Version ",
     " is now available. Press Ctrl+R to update!",
     "selfMsg",
     "motd",
     "listRefresh",
     "titles",
     "/game",
     "ref",
     "database",
     "POST",
     "json",
     "/api/v1/utilities/servers",
     "servers",
     "players",
     "playersMax",
     "address",
     "gamemode",
     "ssl",
     "order",
     "playersCurrent",
     "push",
     "sort",
     "ajax",
     "eu",
     "Vendetta",
     "NOT_LOADED",
     "unload",
     "init",
     "sRenderType",
     "CANVAS",
     "cDisableAA",
     "autoDetectRenderer",
     "resize",
     "now",
     "Welcome to Gota.io!",
     "particles",
     "cDisableEventSkins",
     "particlesMax",
     "GET",
     "jsonp",
     "https://gamedata.gota.io/skinData.php",
     "get",
     "names",
     "log",
     "Text status: ",
     "Error thrown: ",
     "width",
     "innerWidth",
     "resolution",
     "height",
     "innerHeight",
     "renderer",
     "x",
     "position",
     "stage",
     "y",
     "charAt",
     "u",
     "rAnimationDelay",
     "min",
     "foodObjects",
     "steps",
     "animate",
     "handleFood",
     "bucket",
     "handle",
     "myCells",
     "size",
     "centerX",
     "centerY",
     "centerSteps",
     "cDisableAutoZoom",
     "scale_base",
     "max",
     "pow",
     "centerX_",
     "centerY_",
     "scale",
     "pivot",
     "isConnected",
     "mouseFrozen",
     "sendMouse",
     "sendPacket",
     "sendKey",
     "cHideMinimap",
     "cShowCoordinates",
     "update",
     "buffHolder",
     "render",
     "html",
     "resetType",
     "serverData",
     "floor",
     "handleUpdatedPlayers",
     "playerRegistry",
     "cShowBorder",
     "border",
     "removeChild",
     "parent",
     "destroy",
     "Graphics",
     "rBorderSize",
     "toHexString",
     "uiGameBorderColor",
     "string2hex",
     "utils",
     "lineStyle",
     "left",
     "top",
     "drawRect",
     "visible",
     "uiForegroundColor",
     "X: ",
     "toFixed",
     " Y: ",
     "clearRect",
     "font",
     "12px Calibri",
     "party",
     "state",
     "ALIVE",
     "playerId",
     "mmColor",
     "x_",
     "y_",
     "#fefefe",
     "socket",
     "currentServer",
     "currentServerName",
     "spectate",
     "scale_",
     "offsetX",
     "offsetY",
     "mouseX",
     "mouseY",
     "partyIds",
     "subPanelOverride",
     "score",
     "accountListeners",
     "clearStats",
     "bind",
     "sendPing",
     "prototype",
     "stats",
     "An unnamed cell",
     "play",
     "No server selected!",
     "#name-box",
     "#playerServer",
     "ip",
     "setName",
     "connect",
     "send",
     "event",
     "Game",
     "webMenu",
     "Play",
     "spec",
     "sendSpectate",
     "Spectate",
     "nextUrl",
     "disconnect",
     "Connecting to ",
     "...",
     "wss://",
     "ws://",
     "binaryType",
     "arraybuffer",
     "onopen",
     "onConnect",
     "onmessage",
     "onMessage",
     "onclose",
     "reset",
     "You have been disconnected from the server. Reason: ",
     "reason",
     "Unknown",
     "onerror",
     "Error connecting to server... Retrying every second.",
     "visibility",
     "style",
     "grecaptcha-badge",
     "getElementsByClassName",
     "hidden",
     "close",
     "clearBuckets",
     "onDelete",
     "clear",
     "clearParty",
     "clearBuffs",
     "hasSentSubPanel",
     "#playerId",
     "kSplit",
     "kToggleSpec",
     "kDoubleSplit",
     "kTripleSplit",
     "kQuadSplit",
     "kHexaSplit",
     "kFreezeMouse",
     "kContextMenu",
     "readyState",
     "connectionStart",
     "currentUser",
     "catch",
     "sendAuthToken",
     "then",
     "getIdToken",
     "td",
     "createElement",
     "span",
     "color",
     "#DDDD00",
     "innerHTML",
     "[System] ",
     "appendChild",
     "SYSTEM",
     "selfMsgWithJoinCode",
     "pointerEvents",
     "all",
     "userSelect",
     "partyLeader",
     "partyIndex",
     "handleCustomGameLeave",
     "partyCode",
     "page",
     " ",
     "pushState",
     "history",
     "isPartyLeader",
     "getServerMaxCells",
     "maxCells",
     "bonusMaxCells",
     "data",
     "getUint8",
     "offset",
     "handleUpdate",
     "handlePosition",
     "handleStats",
     "showSubPanel",
     "updateSubPanel",
     "handleInvite",
     "handlePartyInfo",
     "handlePartyData",
     "handlePartyJoinCode",
     "handleLeaderboard",
     "handleLeaderboardCustom",
     "handleMapData",
     "handleClearNodes",
     "handleUpdateBorder",
     "handleResetTime",
     "handleSpectators",
     "handleSystemMsg",
     "handlePing",
     "handleChat",
     "handleWhisper",
     "handleShowScrimmageMenu",
     "handleQueueData",
     "handleQueueLeave",
     "handleMatchState",
     "handleScrimmageData",
     "handleCustomGameShow",
     "handleCustomGameUpdate",
     "handleAddBuff",
     "handleRemoveBuff",
     "handleClearBuffs",
     "handleAuthenticated",
     "handleProfile",
     "getUint16",
     "getPlayer",
     "cellColor",
     "setFlags",
     "flags",
     "nameColor",
     "parseEffect",
     "setSkin",
     "skin",
     "add",
     "updatePlayer",
     "setType",
     "getInt16",
     "setX",
     "setY",
     "setSize",
     "parsedColor",
     "buff",
     "onCreate",
     "updateX",
     "updateY",
     "size_",
     "remove",
     "type",
     "keys",
     "cAutoRespawn",
     "GOT_gota-io_336x280",
     "refresh",
     "cmd",
     "sortCells",
     "getFloat32",
     "updateCellCounter",
     "sendPartyJoin",
     "#scrimmage-btn-leave",
     "right",
     "bottom",
     "getFloat64",
     "spectators",
     "updateSpectators",
     "leaderboard-canvas",
     "Leaderboard",
     "text",
     "getUint32",
     "16px Calibri",
     "fillStyle",
     "uiLeaderboardHighlightSelf",
     "uiLeaderboardHighlightParty",
     ". ",
     "fillText",
     "Respawn: ",
     "cColoredPing",
     "uiGameColorSuccess",
     "#playerPing",
     "uiGameColorWarning",
     "uiGameColorError",
     "ms",
     "rgb(",
     ")",
     "includes",
     "PARTY",
     "Admin",
     "ADMIN",
     " - ",
     "[",
     "] ",
     "innerText",
     "dataset",
     "className",
     "chat-name",
     "oncontextmenu",
     ": ",
     " > ",
     "WHISPER",
     "SUCCESS",
     "Invalid authentication token! Please logout and try again!",
     "FAILURE",
     "cAutoDecline",
     "sendInviteResponse",
     "popup-party-text",
     " has invited you to a party.",
     "#popup-party",
     "isLeader",
     "cache",
     "team",
     "UNKNOWN",
     "checkLeader",
     "drawParty",
     "getInt32",
     "#popup-party-code-content input",
     "#popup-party-code",
     "alive",
     "eatenFood",
     "eatenEject",
     "eatenVirus",
     "eatenPlayer",
     "gainFood",
     "gainEject",
     "gainVirus",
     "gainPlayer",
     "#main-stats",
     "empty",
     "<span>Name: ",
     " (",
     ")</span><br>",
     "append",
     "<span>Alive: ",
     "</span><br>",
     "<span>Food eaten: ",
     "<span>Ejected mass eaten: ",
     "<span>Viruses eaten: ",
     "<span>Player cells eaten: ",
     "hide-captcha-badge",
     "classList",
     "body",
     "uid",
     "onAddBuff",
     "onRemoveBuff",
     "parentCell",
     "updateScorePanel",
     "getRealMass",
     "toLocaleString",
     "cColoredCellCount",
     "cHidePartyPanel",
     "party-canvas",
     "measureText",
     "scoreText",
     "DEAD",
     "SPECTATE",
     "SPEC",
     "uiPartyLeaderColor",
     "Total:",
     "stop",
     "byteLength",
     "Queue",
     "Mode: ",
     "Time: ",
     "Queued players: ",
     "You have left the queue for [",
     "]",
     "A match has been found. Good luck and have fun!",
     "#scrimmage-mode-select",
     "#scrimmage-mode-info",
     "option",
     "div",
     "scrimmage-info-",
     "modes",
     "sizes",
     "startmass",
     "maps",
     "#scrimmage-custom-btn-container",
     "#scrimmage-map",
     "<option value='",
     "'>",
     "</option>",
     "change",
     "trigger",
     "selectedIndex",
     "prop",
     "updateMap",
     "MAP",
     "updateMode",
     "MODE",
     "updateSize",
     "SIZE",
     "updateStartMass",
     "STARTMASS",
     "updateLock",
     "LOCK",
     "updatePlayerById",
     "PLAYER_UPDATE",
     "updatePlayers",
     "PLAYER_LIST",
     "updateVirusDensity",
     "VIRUS_DENSITY",
     "#scrimmage-menu",
     "selected",
     "#scrimmage-map option[value='",
     "']",
     "#scrimmage-mapmode",
     "#scrimmage-mapsize",
     "placeholder",
     "attr",
     "#scrimmage-startmass",
     "#scrimmage-mapmode option[value='",
     "#scrimmage-mapsize option[value='",
     "#scrimmage-virusDensity",
     "checked",
     "#scrimmage-lockteams",
     "checkLock",
     "disabled",
     "#cgp-",
     "removeAttr",
     ".custom-game",
     " option[value='",
     "#cgp-name-",
     "#scrimmage-custom-players",
     "<tr><td><span id='cgp-name-",
     "</span></td><td><select class='custom-game' id='cgp-",
     "'><option value='0'>Spectator</option><option value='1' class='t1'>Blue</option><option value='2' class='t2'>Red</option></select></td></tr>",
     "\d+",
     "match",
     "option:selected",
     "find",
     "PLAYER_UPDATE_SELF",
     "sendCustomGameUpdate",
     "nameCache",
     "massLastAmount",
     "getMass",
     "round",
     "getSizeCache",
     "toString",
     "getNumber",
     "create",
     "RenderTexture",
     "cacheContainer",
     "getSizeCacheSprite",
     "texture",
     "clearCacheContainer",
     "sprites",
     "spritesIndex",
     "buildSizeCache",
     "Verdana",
     "bold",
     "#fff",
     "black",
     "textOutlineSize",
     "Text",
     "needsPixiUpdate",
     "container",
     "cThemeEnabled",
     "beginFill",
     "drawCircle",
     "endFill",
     "set",
     "cHideFood",
     "drawSpikeData",
     "spiked",
     "spikeSprite",
     "anchor",
     "addChildAt",
     "circle",
     "aCustomSpike",
     "aCustomMother",
     "naturalHeight",
     "skinId",
     "ejectedMassSprite",
     "getSkin",
     "getPlayerById",
     "SELF",
     "skinsContainer",
     "needsPixiSkinUpdate",
     "massSprite",
     "cacheUpdate",
     "getNameCache",
     "nameSprite",
     "nameEffectSprite",
     "levelSkins",
     "skinSprite",
     "isGif",
     "getTexture",
     "cDisableAutoNameHiding",
     "levelNames",
     "lowerName",
     "effect",
     "cShowMass",
     "debuffSprite",
     "shieldSprite",
     "sprite",
     "motherCustomEnabled",
     "motherCustom",
     "setDefaultSpriteAnchor",
     "defaultData",
     "updatedPlayers",
     "shift",
     "skinCache",
     "fill",
     "updateText",
     "indexOf",
     "substring",
     "replace",
     "LOADING",
     "loadFromFrameData",
     "LOADED",
     "https://gamedata.gota.io/gifs/",
     ".gif",
     "crossOrigin",
     "load",
     "beginPath",
     "arc",
     "closePath",
     "clip",
     "drawImage",
     "fromCanvas",
     "src",
     "https://gamedata.gota.io/skins/",
     ".png",
     "createMaskCache",
     "count",
     "globalCompositeOperation",
     "source-in",
     "rect",
     "from",
     "cacheAsBitmap",
     "Gota Web ",
     "setUint8",
     "cSilentLogin",
     "setInt32",
     "setUint16",
     "sendChat",
     "sendPartyAction",
     "setUint32",
     "sendShowProfile",
     "sendWhisper",
     "sendSubPanel",
     "skinName",
     "r",
     "g",
     "b",
     "chatColor",
     "sendQueue",
     "sendCustomGame",
     "sendLeaveMatch",
     "sendCaptcha", 
     "charCodeAt", 
     "fromCharCode", 
     "message", 
     "code", 
     "This account has been permanently suspended by an administrator.", 
     "auth/user-disabled", 
     "auth/popup-closed-by-user", 
     "Classic", 
     "classic", 
     "Instant Merge", 
     "instant", 
     "Mega Split", 
     "megasplit", 
     "white", 
     "STAFF", 
     "Gota.io Staff", 
     "build", 
     "royalblue", 
     "VERIFIED", 
     "Verified Player", 
     "check_circle", 
     "i", 
     "material-icons", 
     "user-badge", 
     "data-balloon", 
     "data-balloon-pos", 
     "up", 
     "setAttribute", 
     "li", 
     "user-embed", 
     "img", 
     "avatar", 
     "alt", 
     "username", 
     "info", 
     "server", 
     "presence", 
     "timestamp", 
     "getTime", 
     "status offline", 
     "Not playing on any server", 
     "status ", 
     "status", 
     "ONLINE", 
     "online", 
     "Playing ", 
     "Spectating ", 
     " on ", 
     " (ID ", 
     "status pending", 
     "Pending Friend Request", 
     "actions", 
     "face", 
     "View Profile", 
     "click", 
     "#main-social", 
     "Join Server", 
     "'s ID is ", 
     "done", 
     "Add as Friend", 
     "isHandlingRequest", 
     "/api/v1/social/friends", 
     "application/json", 
     "Remove Friend", 
     "Are you sure you want to remove", 
     "as your friend?", 
     "off", 
     "callbacks", 
     "elements", 
     "#profile-username", 
     "#profile-avatar", 
     "Level ", 
     "level", 
     "levelData", 
     "&nbsp;&nbsp;&nbsp;[", 
     "xp_current", 
     "xp_needed", 
     "#profile-level", 
     "title", 
     "#profile-title", 
     "#profile-name", 
     "cursor", 
     "pointer", 
     "default", 
     "spin", 
     "addClass", 
     "removeClass", 
     "#social-friends .user-list", 
     "#social-uid", 
     "title-text center", 
     "You have no friends \uD83D\uDE25", 
     "pendingFriends", 
     "replaceChild", 
     "forEach", 
     "profiles", 
     "/api/v1/social/friends/pending", 
     "/users/", 
     "timestamps", 
     "map", 
     "/friendships/", 
     "hasOwnProperty", 
     "balloon", 
     "event-", 
     "key", 
     "toggleClass", 
     ".server-tab", 
     "incrementPlay", 
     "undefined", 
     "startPreRoll", 
     "player", 
     "#btn-play", 
     "main-servers", 
     "#btn-servers", 
     "main-options", 
     "#btn-options", 
     "main-themes", 
     "#btn-themes", 
     "main-subpanel", 
     "#btn-cellpanel", 
     "https://www.reddit.com/r/PlayGotaIO/", 
     "_blank", 
     "open", 
     "#btn-reddit", 
     "https://gota.io/discord", 
     "#btn-discord", 
     "keypress", 
     "#btn-spec", 
     "endsWith", 
     "#autocomplete-panel", 
     "startsWith", 
     "<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>", 
     "findIndex", 
     "triggers", 
     "<tr><td>", 
     "</td><td>", 
     "description", 
     "</td></tr>", 
     "#autocomplete-panel tbody", 
     "values", 
     "filter", 
     "<h3>Emotes</h3>", 
     "<img name='", 
     "' title='", 
     "' src='https://gamedata.gota.io/emotes/", 
     ".png' />", 
     "<h3>Gifs</h3>", 
     "' src='https://gamedata.gota.io/emotes/gifs/", 
     ".gif' />", 
     "keyup", 
     "nodeName", 
     "TD", 
     "parentElement", 
     "focus", 
     "IMG", 
     "nodeValue", 
     "attributes", 
     "#animationDelay", 
     "#rAnimationDelay", 
     "rUiScale", 
     "parseFloat", 
     "#uiScale", 
     "#rUiScale", 
     "transform", 
     "scale(", 
     ".ui-scale", 
     "background-image", 
     "url(https://gamedata.gota.io/emotes/", 
     "random", 
     ".png)", 
     "#chat-emote-btn", 
     "toggle", 
     "#emote-panel", 
     "#emote-panel ul li img", 
     "chat-panel", 
     "mousedown", 
     "chat-resize", 
     "getComputedStyle", 
     "defaultView", 
     "mousemove", 
     "documentElement", 
     "mouseup", 
     "px", 
     "removeEventListener", 
     ".checkbox-options", 
     ".options-container select", 
     ".options-container input[type=range]", 
     "#popup-changelog", 
     "#btn-changelog", 
     "#btn-close-changelog", 
     "#btn-accept", 
     "#btn-decline", 
     "select", 
     "Copy", 
     "execCommand", 
     "#popup-party-code-content button", 
     "#menu-invite", 
     "/t ", 
     "#menu-whisper", 
     "#menu-profile", 
     "Private", 
     "#menu-pu_pr span", 
     "Public", 
     "#menu-pu_pr", 
     "#menu-promote", 
     "#menu-kick", 
     "#menu-spectate", 
     "#menu-block", 
     "chat-emote-btn", 
     "popup-party-code", 
     "#popup-chat-tab-editor", 
     "#aEditChatTabs", 
     "#cte-tab-selector", 
     "#btn-chat-tab-editor-add", 
     "#btn-chat-tab-editor-remove", 
     "#btn-chat-tab-editor-update", 
     "#popup-asset-skinner .title-text", 
     "asset", 
     "#input-asset-skinner", 
     "#popup-asset-skinner", 
     ".custom-asset-skinner", 
     "a", 
     "#popup-asset-skinner .back-button", 
     "#btn-custom-asset-set", 
     "#btn-custom-asset-clear", 
     "drop", 
     "test", 
     "result", 
     "readAsDataURL", 
     "dragover", 
     "#popup-food-colors", 
     "#btn-food-colors", 
     "theme.json", 
     "text/plain", 
     "#btn-theme-export", 
     "#theme-import", 
     "#btn-theme-import", 
     "files", 
     "#main-themes .options-container", 
     "/api/v1/options/setFlags", 
     "#cGlobalLeaderboard", 
     "consented", 
     "signOut", 
     "users/", 
     "#account-loader", 
     "#authed", 
     "display: flex;", 
     "PUBLIC", 
     "#account-avatar", 
     "#account-username", 
     "&nbsp;&nbsp;&nbsp;&nbsp;", 
     " XP", 
     "#account-level", 
     "%", 
     ".xp-meter > span", 
     "loadServers", 
     "port", 
     "?", 
     "servers/account/", 
     "DISCORD_LINKED", 
     "loadDiscord", 
     "exists", 
     "Your account is linked with ", 
     "discrim", 
     "#discordLinkStatus", 
     "#discordLink", 
     "#discordUnlink", 
     "padding", 
     "15px", 
     ".discord-login-container", 
     "30px", 
     "onSnapshot", 
     "doc", 
     "discord", 
     "collection", 
     "firestore", 
     "tokens", 
     "getMonth", 
     "setMonth", 
     "#redeem-tokens", 
     "You have 0 tokens.", 
     "#token-amount", 
     "You have ", 
     " tokens, maximum expiry date: ", 
     "#redeem-spend", 
     "#account-titles", 
     "loadPrivateData", 
     "<option value='0'>Default Title</option>", 
     "inline-block", 
     "content", 
     "read", 
     "#popup-message-title", 
     "#popup-message-content", 
     "#popup-message", 
     "private/", 
     "#guest", 
     "#no_cookie_consent", 
     "onAuthStateChanged", 
     "signInWithPopup", 
     "#account-login", 
     "#account-logout", 
     "https://trello.com/c/Hdnxuxuc/2-account-system", 
     "#account-shop", 
     "#account-social", 
     "#social-back-button", 
     "#account-profile", 
     "#profile-close-btn", 
     "#food-colors-close-btn", 
     "Set", 
     "/api/v1/options/setTitle", 
     "/api/v1/options/markAsRead", 
     "#popup-message-read-btn", 
     "#account-username-input", 
     "trim", 
     "Please provide a username!", 
     "/api/v1/social/username", 
     "#account-set-username-btn", 
     ".popup-panel .back-button", 
     "https://accounts.gota.io/api/v1/options/discord/redirect?token=", 
     "popup", 
     "width=600,height=700", 
     "/api/v1/options/discord/unlink", 
     "By redeeming, you are agreeing the locked name rules linked below the form.ABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.Press OK to redeem.", 
     "#redeem-name", 
     "/api/v1/options/redeem", 
     "submit", 
     ".error-banner", 
     "Enter friend's UID (found above add friend button)", 
     "string", 
     "Please enter a valid UID", 
     "#btn-add-friend", 
     "tagName", 
     "activeElement", 
     "INPUT", 
     "setSelectionRange", 
     "blur", 
     "beforeunload", 
     "Are you sure you want to leave Gota.io?", 
     "keybinds-btn-selected", 
     ".keybinds-btn", 
     "#btn-reset-keybinds", 
     "#scrimmage-info-", 
     "#btn-queue", 
     "#btn-leave-match", 
     "#btn-custom-create", 
     "#btn-custom-return", 
     "#btn-custom-start", 
     "grecaptcha", 
     "ready", 
     "6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", 
     "login", 
     "execute", 
     "hex", 
     "toRgbString", 
     "spectrum", 
     "showAlpha", 
     "#uiGameBackgroundColor", 
     "#uiGameBorderColor", 
     "Add", 
     "_FoodColors", 
     "#pFoodColors", 
     "#food-color-list", 
     "<div c='", 
     "' style='background:", 
     ";color:", 
     ";'><span>", 
     "</span><div><button class='btn-food-color'>X</button></div></div>", 
     "c", 
     "eq", 
     "parents", 
     "splice", 
     ".btn-food-color", 
     ".keybinds-btn-selected", 
     "first", 
     "&nbsp;", 
     "logo", 
     "backgroundImage", 
     "url('images/logo.png')", 
     "url('images/events/", 
     "/logo.png')", 
     "<li><img name='", 
     ".png' /></li>", 
     ".emote-list", 
     ".gif' /></li>", 
     ".gif-list", 
     // "<option value="", 
     // "">",
     "#spEffect", 
     "images/ejectedmass_skins/", 
     "customEjectedMass", 
     "images/events/", 
     "/ejected_mass.png", 
     "images/effects/", 
     "/spike_mother_happy.png", 
     "images", 
     "/spike_mother.png", 
     "/spike.png", 
     "table-row", 
     "#performance-refresh", 
     "cHideId", 
     ".pID", 
     "cHideServerDisplay", 
     ".psvr", 
     "alpha", 
     "cTransCells", 
     "cHideChat", 
     "#chat-panel", 
     "#minimap-panel", 
     "cHideScorePanel", 
     "cHideLeaderboard", 
     "#leaderboard-panel", 
     "cHideExtraPanel", 
     "#extra-panel", 
     "disable", 
     "enable", 
     "cResizableChat", 
     "#chat-resize", 
     "sShowNames", 
     "sShowSkins", 
     "sTextOutlines", 
     "strokeThickness", 
     "sQuality", 
     ".fg-interface-color", 
     ".interface-color", 
     "border-color", 
     ".gota-btn", 
     ".popup-panel", 
     ".main", 
     ".main-bottom-stats", 
     "background-color", 
     ".ui-pane", 
     "#chat-tab-container", 
     ".chat-tab", 
     ".options-container", 
     ".server-active", 
     "#server-content", 
     "#main-account", 
     "getAlpha", 
     "setAlpha", 
     ".server-table tbody", 
     "background", 
     "#borderSize", 
     "rBackgroundOpacity", 
     "#backgroundOpacity", 
     "opacity", 
     "canvas-background", 
     "url('", 
     "')", 
     "backgroundSize", 
     "100% 100%", 
     "Unable to load custom theme virus.", 
     "Unable to load custom theme mother cell.", 
     "0", 
     "#minimap-canvas", 
     "2px solid rgba(255, 255, 255, .2)", 
     "270px", 
     "Enter new locked name!", 
     "Please enter a valid name!", 
     "Locked names must be 2 or more characters long.", 
     "Locked names must be 20 or less characters long.", 
     "You are about to change your locked name to: '", 
     "'.Locked names can only be changed once per week.Are you sure you wish to continue?", 
     "#btn-chg-ln", 
     "#btn-updateSP", 
     "rules", 
     "#btn-subpanel-rules", 
     "rgb", 
     "#spNameColor", 
     "#spChatColor", 
     "#spSkinName", 
     "#spLowerName", 
     "#spEffect select", 
     "toRgb", 
     ".subpanel-name-dashboard", 
     "#subpanel-rules", 
     "#subpanel-content", 
     "loadSubPanel", 
     "locked", 
     "#main-subpanel", 
     "#spLockedName", 
     "lastChange", 
     "Last Changed: ", 
     "expiry", 
     "seconds", 
     "#spExpiry", 
     "Never", 
     "accounts", 
     "mode", 
     "#servers-body-eu", 
     "#servers-body-na", 
     "#servers-body-ap", 
     // "<tr id="s_"", 
     // "" class="server-row" server="", 
     // ""><td class="server-table-name">", 
     // "</td><td class="server-table-players">", 
     // "</td><td class="server-table-mode">", 
     "#servers-body-", 
     // "" class="account-server server-row" server="", 
     "prepend", 
     ".server-row", 
     "server-selected", 
     "#s_", 
     "#server-tab-", 
     "inherit", 
     "server-active", 
     "#server-tab-container", 
     "uiMenuSubBackgroundColor", 
     "#servers-", 
     "_ChatTabs", 
     "#chat-body-", 
     " tr", 
     "maxMessages", 
     " tr:first-child", 
     "cloneNode", 
     "tr", 
     "chat-body-", 
     "#chat-container-", 
     "scrollHeight", 
     "scrollTop", 
     "outerHeight", 
     "action", 
     "Invalid command!", 
     "#chat-container", 
     "Unnamed", 
     "<li class='chat-tab' id='chat-tab-", 
     "' name='", 
     "'><span>", 
     "</span></li>", 
     "<div class='chat-inner-container' id='chat-container-", 
     "'><table class='chat-table'><tbody id='chat-body-", 
     "'></tbody></table></div>", 
     "uiBorderColor", 
     "#chat-tab-", 
     "<span>", 
     "</span>", 
     "chat-active-tab", 
     "chat-active-container", 
     ".chat-inner-container", 
     "#cte-tab-name", 
     "#cte-type-", 
     "#cte-max-messages", 
     "New", 
     "context-name", 
     ".context-action", 
     "&gt;", 
     "&lt;", 
     "iChatWidth", 
     "iChatHeight", 
     "options", 
     "setItem", 
     "localStorage", 
     "keybinds", 
     "theme", 
     "subpanel", 
     "getItem", 
     "isInteger", 
     "s", 
     "lockedName", 
     "readAsText", 
     "#cThemeEnabled", 
     // "<img src="https://gamedata.gota.io/emotes/", 
     // ".png" height="17" width="17" alt="", 
     // "<img src="https://gamedata.gota.io/emotes/gifs/", 
     // ".gif" height="17" width="17" alt="", 
     "MAX_PARTICLES", 
     "/particles.png", 
     "onTick", 
     "draw", 
     "image", 
     "frame", 
     "speed", 
     "angle", 
     "sin", 
     "cos", 
     "Random", 
     "Maximum Cells Upgrade", 
     "extracells", 
     "MODIFIER", 
     "Extra Consumable Slot", 
     "extraconsumable", 
     "Merge", 
     "merge", 
     "PASSIVE", 
     "Grow", 
     "grow", 
     "Speed", 
     "Shield", 
     "shield", 
     "Virus", 
     "spike", 
     "CONSUMABLE", 
     "Disrupt", 
     "disrupt", 
     "Teleport", 
     "teleport", 
     "_disrupt", 
     "DEBUFF", 
     "Silver", 
     "phoenix", 
     "Consumable Shield", 
     "_shield", 
     "Magnet", 
     "magnet", 
     "Decay", 
     "decay", 
     "_decay", 
     "images/powerups/", 
     "images/shield.png", 
     "images/debuff.png", 
     "passiveBuffs", 
     "passiveSortedBuffs", 
     "consumableBuffs", 
     "nextCacheUpdate", 
     "sortPassiveBuffs", 
     "onPassiveBuffsUpdate", 
     "markCacheForUpdate", 
     "Recieved buff: ", 
     "powerup", 
     "Lost buff: ", 
     "stack", 
     "updateCache", 
     "#222", 
     "bold 16pt Calibri", 
     "startTime", 
     "expireTime", 
     "getCooldown", 
     "#000", 
     "moveTo", 
     "globalAlpha", 
     "hearts", 
     "delay", 
     "frames", 
     "getFrame", 
     "getLength", 
     "getImage", 
     "frameInfo", 
     "foodColors", 
     "#FFFFFF", 
     "#FF9BDC", 
     "#FF00FF", 
     "#FF0000", 
     "#C80000", 
     "#FF6900", 
     "#FFFF00", 
     "#00FF00", 
     "#008000", 
     "#008080", 
     "#00FFFF", 
     "#0096FF", 
     "#0000FF", 
     "#CA48FA", 
     "#8A2BE2", 
     "#D2C878", 
     "#8C4614", 
     "You cannot block that player.", 
     "Unblocked player with ID: ", 
     "Blocked player with ID: ", 
     "Whisper a player by ID", 
     "whisper", 
     "t", 
     "w", 
     "Invalid player id.", 
     "Reply to previous whisper", 
     "reply", 
     "/r ", 
     "Send a message to other party members", 
     "p", 
     "/p ", 
     "Invite a player to the party", 
     "invite", 
     "Invalid ID.", 
     "Leave your current party", 
     "leave", 
     "l", 
     "Promote a party member to leader", 
     "promote", 
     "Kick a player from the party", 
     "kick", 
     "Clear the chat", 
     "chat-body", 
     "firstChild", 
     "Get your current ID", 
     "Your id is ", 
     "You need to be connected to a server to use this command.", 
     "Show the scrimmage menu", 
     "scrimmenu", 
     "Join a party with a code", 
     "j", 
     "Set the party to private", 
     "private", 
     "Allow players to join the party without an invite", 
     "public", 
     "Reset chat size", 
     "resetchat", 
     "Reset chat tab settings", 
     "resetchattabs", 
     "Spectate a player", 
     "Disconnect from the server", 
     "Get Account UID", 
     "account", 
     "You are not logged in.", 
     "UID: ", 
     "Block or unblock a player by ID", 
     "Reloads the skin list", 
     "reloadskins", 
     "4Head", 
     "BibleThump", 
     "DansGame", 
     "DatSheffy", 
     "FailFish", 
     "FeelsBadMan", 
     "FeelsGoodMan", 
     "FeelsMadMan", 
     "GabeN", 
     "HassanChop", 
     "HeyGuys", 
     "Kappa", 
     "KappaPride", 
     "Keepo", 
     "Kreygasm", 
     "NotLikeThis", 
     "OMGScoots", 
     "PJSalt", 
     "PogChamp", 
     "rekt", 
     "rip", 
     "SaltyCorn", 
     "sodaC", 
     "sodaHeyGuys", 
     "sodaNOPE", 
     "sodaW", 
     "sodaWut", 
     "SwiftRage", 
     "WutFace", 
     "ResidentSleeper", 
     "LUL", 
     "MikuFail", 
     "PepoHype", 
     "KKona", 
     "MeguFace", 
     "AngryBork", 
     "AngeryBOYE", 
     "TohruFlex", 
     "Sadness", 
     "nou", 
     "MarioFP", 
     "Ditto", 
     "MichaelPls", 
     "RareParrot", 
     "PepePls", 
     "RooNoticeMe", 
     "PepeEyes", 
     "EverythingsFine", 
     "WeSmart", 
     "PandaAww", 
     "SleepyCat", 
     "Clap", 
     "1", 
     "2", 
     "3", 
     "4", 
     "5", 
     "6", 
     "7", 
     "8", 
     "9", 
     "A", 
     "B", 
     "C", 
     "D", 
     "E", 
     "F", 
     "MOUSE1", 
     "MOUSE2", 
     "MOUSE3", 
     "MOUSE4", 
     "MOUSE5", 
     "HELP", 
     "BACK_SPACE", 
     "TAB", 
     "CLEAR", 
     "ENTER", 
     "ENTER_SPECIAL", 
     "SHIFT", 
     "CONTROL", 
     "ALT", 
     "PAUSE", 
     "CAPS_LOCK", 
     "KANA", 
     "EISU", 
     "JUNJA", 
     "FINAL", 
     "HANJA", 
     "ESCAPE", 
     "CONVERT", 
     "NONCONVERT", 
     "ACCEPT", 
     "MODECHANGE", 
     "SPACE", 
     "PAGE_UP", 
     "PAGE_DOWN", 
     "END", 
     "HOME", 
     "LEFT", 
     "UP", 
     "RIGHT", 
     "DOWN", 
     "SELECT", 
     "PRINT", 
     "EXECUTE", 
     "PRINTSCREEN", 
     "INSERT", 
     "DELETE", 
     ";", 
     "<", 
     "=", 
     ">", 
     "AT", 
     "G", 
     "H", 
     "I", 
     "J", 
     "K", 
     "L", 
     "M", 
     "N", 
     "O", 
     "P", 
     "Q", 
     "R", 
     "S", 
     "T", 
     "U", 
     "V", 
     "W", 
     "X", 
     "Y", 
     "Z", 
     "OS_KEY", 
     "CONTEXT_MENU", 
     "SLEEP", 
     "NUMPAD0", 
     "NUMPAD1", 
     "NUMPAD2", 
     "NUMPAD3", 
     "NUMPAD4", 
     "NUMPAD5", 
     "NUMPAD6", 
     "NUMPAD7", 
     "NUMPAD8", 
     "NUMPAD9", 
     "MULTIPLY", 
     "ADD", 
     "SEPARATOR", 
     "SUBTRACT", 
     "DECIMAL", 
     "DIVIDE", 
     "F1", 
     "F2", 
     "F3", 
     "F4", 
     "F5", 
     "F6", 
     "F7", 
     "F8", 
     "F9", 
     "F10", 
     "F11", 
     "F12", 
     "F13", 
     "F14", 
     "F15", 
     "F16", 
     "F17", 
     "F18", 
     "F19", 
     "F20", 
     "F21", 
     "F22", 
     "F23", 
     "F24", 
     "NUM_LOCK", 
     "SCROLL_LOCK", 
     "WIN_OEM_FJ_JISHO", 
     "WIN_OEM_FJ_MASSHOU", 
     "WIN_OEM_FJ_TOUROKU", 
     "WIN_OEM_FJ_LOYA", 
     "WIN_OEM_FJ_ROYA", 
     "CIRCUMFLEX", 
     "EXCLAMATION", 
     "DOUBLE_QUOTE", 
     "HASH", 
     "DOLLAR", 
     "PERCENT", 
     "AMPERSAND", 
     "UNDERSCORE", 
     "OPEN_PAREN", 
     "CLOSE_PAREN", 
     "ASTERISK", 
     "PLUS", 
     "PIPE", 
     "HYPHEN_MINUS", 
     "OPEN_CURLY_BRACKET", 
     "CLOSE_CURLY_BRACKET", 
     "TILDE", 
     "VOLUME_MUTE", 
     "VOLUME_DOWN", 
     "VOLUME_UP", 
     "SEMICOLON", 
     "EQUALS", 
     "COMMA", 
     "MINUS", 
     "PERIOD", 
     "SLASH", 
     "BACK_QUOTE", 
     "OPEN_BRACKET", 
     "BACK_SLASH", 
     "CLOSE_BRACKET", 
     "QUOTE", 
     "META", 
     "ALTGR", 
     "WIN_ICO_HELP", 
     "WIN_ICO_00", 
     "WIN_ICO_CLEAR", 
     "WIN_OEM_RESET", 
     "WIN_OEM_JUMP", 
     "WIN_OEM_PA1", 
     "WIN_OEM_PA2", 
     "WIN_OEM_PA3", 
     "WIN_OEM_WSCTRL", 
     "WIN_OEM_CUSEL", 
     "WIN_OEM_ATTN",
     "WIN_OEM_FINISH",
     "WIN_OEM_COPY",
     "WIN_OEM_AUTO",
     "WIN_OEM_ENLW",
     "WIN_OEM_BACKTAB",
     "ATTN",
     "CRSEL",
     "EXSEL",
     "EREOF",
     "PLAY",
     "ZOOM",
     "PA1",
     "WIN_OEM_CLEAR",
     "heart",
     "star",
     "home",
     "apple",
     "spiral",
     "dice",
     "chicken",
     "ghost",
     "burger",
     "bow",
     "cloud",
     "skull",
     "mug",
     "flower",
     "music",
     "checkmark",
     "clover",
     "crown",
     "fancy",
     "fish",
     "flower2",
     "lightning",
     "paw",
     "duck",
     "snowflake",
     "bomb",
     "butterfly",
     "cherry",
     "watermelon",
     "0:00",
     "Invalid HEX color.",
     "#000000",
     "items",
     "dataTransfer",
     "kind",
     "file",
     "getAsFile",
     "msSaveOrOpenBlob",
     "navigator",
     "createObjectURL",
     "download",
     "revokeObjectURL",
     "URL",
     "regex",
     "#25f",
     "#f31",
     "green",
     "yellow",
     "purple",
     "orange",
     "Notification",
     "permission",
     "granted",
     "Your match has started.",
     "https://gota.io/assets/images/favicon.png",
     "policyID",
     "CP_0918_01",
     "policyLink",
     "https://gota.io/policies/privacy?v=",
     "#cookies",
     "consentOption",
     "#cc_acceptCookies",
     "consentCookie",
     "cookieConsent",
     "yes+",
     "/web",
     "cookieBanner",
     "#cookie-banner",
     "#declineCookies",
     "#acceptCookies",
     "backwardsCompatable",
     "consentHandler",
     "getConsentCookie",
     "showCookieBanner",
     "deleteConsentCookie",
     "createConsentCookie",
     "handlersBound",
     "bindBannerHandlers",
     "slideDown",
     "banner",
     "slideUp",
     "decline",
     "accept",
     // " <a href="",
     // "" target="_blank">Our Cookie Policy!</a>",
     "#cookie-banner .description",
     "exdays",
     "setTime",
     "expires=",
     "toUTCString",
     "cookie",
     ";path=",
     "path",
     "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=",
     "cookieconsent_status",
     "allow",
     "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;",
     "playCounter",
     "deathCounter",
     "Advertisement Loading...",
     "preroll"];
    
    function _0x5E6E(_0x5EA2, _0x5F0A, _0x5EF0) {
        if (!_0x5EA2) {
            return
        };
        var _0x5EBC = this[_0x5E54[7]][_0x5E54[6]][_0x5E54[3]](_0x5E54[5])[1][_0x5E54[3]](_0x5E54[4])[0][_0x5E54[3]](_0x5E54[2])[0];
        var _0x5E6E = _0x5EA2[_0x5E54[3]](_0x5E54[8]);
        for (var _0x5ED6 = 0; _0x5ED6 < _0x5E6E[_0x5E54[9]]; _0x5ED6++) {
            var _0x5E88 = _0x5E6E[_0x5ED6];
            if (_0x5E88 == _0x5EBC) {
                return
            };
            if (!_0x5F0A) {
                continue
            };
            _0x5E88 = _0x5EBC[_0x5E54[3]](_0x5E54[10] + _0x5E88);
            if (_0x5E88[_0x5E54[9]] == 2 && !_0x5E88[1]) {
                return
            }
        };
        throw (_0x5EF0 || _0x5E54[11])
    }
    
    function _0x5E88(_0x5E88) {
        var _0x5E6E = $(_0x5E54[13] + _0x5E88);
        if (_0x5E6E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16]) {
            _0x5EA2();
            _0x5E6E[_0x5E54[17]](500)
        }
    }
    
    function _0x5EA2() {
        $(_0x5E54[22])[_0x5E54[21]]()[_0x5E54[20]](function() {
            if ($(this)[_0x5E54[15]](_0x5E54[14]) == _0x5E54[18]) {
                $(this)[_0x5E54[19]](500)
            }
        })
    }
    
    function _0x5EBC() {
        var _0x6D76 = window[_0x5E54[23]];
        const _0x6EE2 = _0x6D76;
        window[_0x5E54[23]] = null;
        var _0x6EFC;
        const _0x6F16 = new _0x6EE2[_0x5E54[24]]();
        const _0x5F3E = new _0x6EE2[_0x5E54[24]]();
        const _0x5FC0 = new _0x6EE2[_0x5E54[24]]();
        const _0x6C3E = new _0x6EE2[_0x5E54[24]]();
        const _0x65D8 = new _0x6EE2[_0x5E54[24]]();
        const _0x612C = new _0x6EE2[_0x5E54[24]]();
        const _0x6FE6 = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
        var _0x5FA6;
        _0x6C3E[_0x5E54[28]](_0x5FC0);
        _0x6C3E[_0x5E54[28]](_0x65D8);
        _0x6C3E[_0x5E54[28]](_0x612C);
        _0x6F16[_0x5E54[28]](_0x5F3E);
        _0x6F16[_0x5E54[28]](_0x6C3E);
        _0x6F16[_0x5E54[28]](_0x6FE6);
        var _0x605C, _0x6C72, _0x6C8C, _0x6F30, _0x6D90, _0x6A02, _0x73A8, _0x73DC, _0x73C2, _0x6EC8, _0x742A, _0x7444, _0x745E, _0x71EE, _0x6C58, _0x6E94, _0x68B0, _0x6A36, _0x71A0, _0x631A, _0x6146, _0x764C, _0x653C, _0x5F24, _0x6E12, _0x7186, _0x641E, _0x716C, _0x6A1C, _0x6C24 = false,
            _0x6674 = 0,
            _0x665A = 0,
            _0x7632 = null,
            _0x7618 = null,
            _0x67E0 = false,
            _0x7562 = {
                elements: [],
                callbacks: [],
                pendingFriends: [],
                timestamps: []
            },
            _0x5F72 = [],
            _0x668E = false,
            _0x6090 = null,
            _0x6932 = true,
            _0x6486;
        const _0x6EAE = Math[_0x5E54[29]] * 2;
        const _0x60F8 = 32,
            _0x60C4 = _0x60F8 * 2,
            _0x60DE = (_0x60F8 + 6) * 2,
            _0x6112 = _0x60F8 / 2;
        const _0x64A0 = {};
        const _0x757C = _0x5E54[30];
        const _0x5EF0 = new firebase[_0x5E54[32]][_0x5E54[31]]();
        const _0x5E6E = _0x5E54[33];
        var _0x658A = {
            key: _0x5E54[34],
            foodColors: [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
            customEjectedMass: false,
            particles: false,
            particlesMax: 100,
            motd: _0x5E54[1],
            endDate: 1604188800000,
            enabled: false,
            motherCustomEnabled: false,
            motherCustom: function(_0x5E54) {},
            happyMotherCells: []
        };
        _0x658A[_0x5E54[35]] = new Date() < _0x658A[_0x5E54[36]];
        firebase[_0x5E54[44]]({
            apiKey: _0x5E54[37],
            authDomain: _0x5E54[38],
            databaseURL: _0x5E54[39],
            projectId: _0x5E54[40],
            storageBucket: _0x5E54[41],
            messagingSenderId: _0x5E54[42],
            appId: _0x5E54[43]
        });
        var _0x728A = {};
        var _0x5EA2 = {};
        var _0x6D5C = {
            levelNames: 3,
            levelSkins: 3,
            textOutlineSize: 0,
            resolution: 1
        };
        var _0x6438 = [{
            name: _0x5E54[45],
            flags: 255,
            maxMessages: 100
        }, {
            name: _0x5E54[46],
            flags: 2,
            maxMessages: 100
        }];
        var _0x71D4 = 0;
        var _0x6D42 = {
            cDisableAA: false,
            cAutoRespawn: false,
            cHideId: false,
            cHideServerDisplay: true,
            sShowNames: _0x5E54[47],
            sShowSkins: _0x5E54[47],
            sRenderType: _0x5E54[48],
            sTextOutlines: _0x5E54[49],
            sQuality: _0x5E54[50],
            cTransCells: false,
            cShowMass: false,
            cShowBorder: false,
            cSilentLogin: false,
            cHideChat: false,
            cHideMinimap: false,
            cShowCoordinates: false,
            cHideFood: false,
            cColoredPing: false,
            cColoredCellCount: false,
            cThemeEnabled: false,
            cDisableAutoZoom: false,
            cAutoDecline: false,
            cDisableEventSkins: false,
            cResizableChat: false,
            cDisableAutoNameHiding: false,
            iChatWidth: _0x5E54[51],
            iChatHeight: _0x5E54[52],
            rUiScale: 1.0,
            rAnimationDelay: 90,
            _ChatTabs: JSON[_0x5E54[54]](JSON[_0x5E54[53]](_0x6438))
        };
        var _0x69B4 = {
            kContextMenu: 3,
            kEjectMass: 87,
            kSplit: 32,
            kToggleSpec: 81,
            kDoubleSplit: -1,
            kTripleSplit: -1,
            kQuadSplit: -1,
            kHexaSplit: -1,
            kFreezeMouse: -1
        };
        var _0x699A = false;
        const _0x6452 = Object[_0x5E54[55]]({}, _0x69B4);
        const _0x74FA = {
            uiForegroundColor: _0x5E54[56],
            uiBackgroundColor: _0x5E54[57],
            uiBorderColor: _0x5E54[58],
            uiMenuBackgroundColor: _0x5E54[59],
            uiMenuSubBackgroundColor: _0x5E54[60],
            uiGameBackgroundColor: _0x5E54[61],
            uiGameGridColor: _0x5E54[62],
            uiGameBorderColor: _0x5E54[63],
            uiLeaderboardHighlightSelf: _0x5E54[64],
            uiLeaderboardHighlightParty: _0x5E54[65],
            uiPartyLeaderColor: _0x5E54[66],
            uiGameColorSuccess: _0x5E54[67],
            uiGameColorWarning: _0x5E54[65],
            uiGameColorError: _0x5E54[63],
            _FoodColors: [],
            aCustomBackground: _0x5E54[1],
            aCustomSpike: _0x5E54[1],
            aCustomMother: _0x5E54[1],
            rBorderSize: 64,
            rBackgroundOpacity: 1
        };
        const _0x646C = {};
        for (var _0x6980 in _0x74FA) {
            _0x646C[_0x6980] = _0x74FA[_0x6980]
        };
        const _0x63B6 = {
            aCustomSpike: null,
            aCustomMother: null
        };
        var _0x63D0 = [];
        var _0x74C6 = {
            rules: false,
            nameColor: {
                r: 0,
                g: 255,
                b: 255
            },
            chatColor: 0,
            lowerName: false,
            skinName: _0x5E54[1],
            effect: 0
        };
        var _0x68FE = null;
        var _0x7270 = null;
        var _0x6A50 = 0;
        
        function _0x7478() {
            _0x605C = document[_0x5E54[69]](_0x5E54[68]);
            _0x6C72 = document[_0x5E54[69]](_0x5E54[70]);
            _0x6C8C = _0x6C72[_0x5E54[72]](_0x5E54[71]);
            _0x6C58 = $(_0x5E54[73]);
            _0x6E94 = $(_0x5E54[74]);
            _0x68B0 = $(_0x5E54[75]);
            _0x716C = $(_0x5E54[76]);
            _0x71A0 = $(_0x5E54[77]);
            _0x631A = $(_0x5E54[78]);
            _0x6146 = $(_0x5E54[79]);
            _0x6A36 = $(_0x5E54[80]);
            _0x641E = $(_0x5E54[81]);
            _0x64A0[_0x5E54[82]] = $(_0x5E54[83]);
            _0x64A0[_0x5E54[84]] = $(_0x5E54[85]);
            _0x64A0[_0x5E54[86]] = $(_0x5E54[87]);
            _0x64A0[_0x5E54[88]] = $(_0x5E54[89]);
            _0x64A0[_0x5E54[90]] = $(_0x5E54[91]);
            _0x64A0[_0x5E54[92]] = $(_0x5E54[93]);
            _0x64A0[_0x5E54[94]] = $(_0x5E54[95]);
            _0x64A0[_0x5E54[96]] = 0;
            _0x64A0[_0x5E54[97]] = $(_0x5E54[98]);
            _0x64A0[_0x5E54[99]] = _0x6E94;
            _0x682E();
            _0x764C = false;
            window[_0x5E54[100]] = function(_0x5E6E) {
                _0x6F30[_0x5E54[101]] = _0x5E6E[_0x5E54[102]];
                _0x6F30[_0x5E54[103]] = _0x5E6E[_0x5E54[104]]
            };
            window[_0x5E54[105]] = function(_0x5E6E) {
                var _0x5E88 = _0x5E6E[_0x5E54[106]] || _0x5E6E[_0x5E54[107]] || _0x5E6E[_0x5E54[108]];
                if (_0x5E88 <= 5) {
                    return
                };
                if (_0x699A) {
                    _0x5F58(_0x5E88);
                    _0x5E6E[_0x5E54[109]]();
                    return
                };
                if ($(_0x5E54[112])[_0x5E54[111]](_0x5E54[110])) {
                    return
                };
                if (_0x5E88 == 27) {
                    _0x7548(_0x6C58);
                    if (_0x6966($(_0x5E54[113]) || _0x6966($(_0x5E54[114])))) {
                        _0x6848($(_0x5E54[113]));
                        _0x6848($(_0x5E54[114]))
                    }
                };
                if (_0x6C58[_0x5E54[15]](_0x5E54[14]) != _0x5E54[16]) {
                    return
                };
                _0x6F30[_0x5E54[115]](_0x5E88)
            };
            window[_0x5E54[116]] = function(_0x5E6E) {
                var _0x5E88 = _0x5E6E[_0x5E54[106]] || _0x5E6E[_0x5E54[107]] || _0x5E6E[_0x5E54[108]];
                if (_0x5E88 == _0x69B4[_0x5E54[117]]) {
                    _0x764C = false
                }
            };
            window[_0x5E54[118]] = function(_0x5E6E) {
                var _0x5E88 = _0x5E6E[_0x5E54[119]] + 1;
                if (_0x699A) {
                    _0x5F58(_0x5E88);
                    _0x5E6E[_0x5E54[109]]();
                    return
                };
                if ($(_0x5E54[112])[_0x5E54[111]](_0x5E54[110]) || _0x6C58[_0x5E54[15]](_0x5E54[14]) != _0x5E54[16]) {
                    return
                };
                _0x6F30[_0x5E54[115]](_0x5E88)
            };
            window[_0x5E54[120]] = function(_0x5E6E) {
                var _0x5E88 = _0x5E6E[_0x5E54[119]] + 1;
                if (_0x5E88 == _0x69B4[_0x5E54[117]]) {
                    _0x764C = false
                }
            };
            $(document)[_0x5E54[128]](_0x5E54[121], function(_0x5E88) {
                if (_0x6C58[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16] && _0x5E88[_0x5E54[123]][_0x5E54[122]] == _0x5E54[68]) {
                    var _0x5E6E = _0x5E88[_0x5E54[125]][_0x5E54[124]] || (_0x5E88[_0x5E54[125]][_0x5E54[126]] * -1);
                    if (_0x5E6E > 0) {
                        _0x6F30[_0x5E54[127]] *= 1.1
                    } else {
                        _0x6F30[_0x5E54[127]] *= 0.9
                    };
                    _0x6F30[_0x5E54[127]] = _0x6F30[_0x5E54[127]] > 3 ? 3 : (_0x6F30[_0x5E54[127]] < 0.25 ? 0.25 : _0x6F30[_0x5E54[127]])
                }
            });
            document[_0x5E54[130]](_0x5E54[129], function(_0x5E6E) {
                _0x5E6E[_0x5E54[109]]()
            });
            _0x6AB8();
            _0x6A9E();
            var _0x5EBC = window[_0x5E54[7]][_0x5E54[6]][_0x5E54[3]](_0x5E54[13])[_0x5E54[133]](1)[_0x5E54[132]](_0x5E54[13])[_0x5E54[3]](_0x5E54[131]);
            var _0x5EF0 = _0x5E54[1];
            if (_0x5EBC[0]) {
                _0x5EF0 = _0x5EBC[0][_0x5E54[134]]()
            };
            if (_0x5EBC[1]) {
                _0x5F24 = _0x5EBC[1]
            };
            if (_0x5EF0 != null && _0x5EF0 != _0x5E54[1]) {
                _0x5EF0 = _0x5EF0[0][_0x5E54[135]]() + _0x5EF0[_0x5E54[133]](1);
                _0x7270 = function() {
                    var _0x5E6E = null;
                    if ((_0x5E6E = _0x6744(_0x5EF0)) != null) {
                        _0x7222(_0x5E6E[_0x5E54[136]]);
                        _0x7208(_0x5E6E[_0x5E54[137]])
                    } else {
                        _0x5E88()
                    }
                }
            } else {
                _0x7270 = _0x5E88
            };
            firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5E54[147])[_0x5E54[128]](_0x5E54[138], function(_0x5EBC) {
                var _0x5E6E = _0x5EBC[_0x5E54[139]]();
                if (_0x5E6E[_0x5E54[140]] !== version) {
                    _0x6F30[_0x5E54[143]](_0x5E54[141] + _0x5E6E[_0x5E54[140]] + _0x5E54[142])
                };
                if (_0x6A1C != _0x5E6E[_0x5E54[144]] && _0x5E6E[_0x5E54[144]] !== _0x5E54[1]) {
                    _0x6A1C = _0x5E6E[_0x5E54[144]];
                    _0x6F30[_0x5E54[143]](_0x5E6E[_0x5E54[144]])
                };
                if (_0x5E6E[_0x5E54[145]] != _0x6A50) {
                    _0x6A50 = _0x5E6E[_0x5E54[145]];
                    _0x728A = {};
                    _0x5EA2(_0x7270);
                    clearInterval(_0x68FE);
                    _0x68FE = setInterval(() => {
                        _0x5EA2()
                    }, _0x5E6E[_0x5E54[145]])
                };
                for (var _0x5E88 in _0x5E6E[_0x5E54[146]]) {
                    _0x752E[_0x5E88] = _0x5E6E[_0x5E54[146]][_0x5E88]
                }
            });
            
            function _0x5EA2(_0x5E88) {
                jQuery[_0x5E54[163]]({
                    type: _0x5E54[150],
                    dataType: _0x5E54[151],
                    url: _0x5E6E + _0x5E54[152],
                    success: function(_0x5E6E) {
                        for (var _0x5EF0 of _0x5E6E) {
                            var _0x5F24 = [];
                            for (var _0x5EBC of _0x5EF0[_0x5E54[153]]) {
                                var _0x5ED6 = _0x5EBC[_0x5E54[154]] + _0x5E54[4] + _0x5EBC[_0x5E54[155]];
                                var _0x5F0A = new _0x7256(_0x5EBC[_0x5E54[136]], _0x5EBC[_0x5E54[156]], _0x5ED6, _0x5EBC[_0x5E54[157]], _0x5EF0[_0x5E54[137]], _0x5EBC[_0x5E54[158]], _0x5EBC[_0x5E54[159]]);
                                _0x5F0A[_0x5E54[160]] = _0x5EBC[_0x5E54[154]];
                                _0x5F24[_0x5E54[161]](_0x5F0A)
                            };
                            _0x5F24[_0x5E54[162]]((_0x5E6E, _0x5E88) => {
                                return _0x5E6E[_0x5E54[159]] - _0x5E88[_0x5E54[159]]
                            });
                            _0x728A[_0x5EF0[_0x5E54[137]]] = {};
                            for (var _0x5EA2 = 0; _0x5EA2 < _0x5F24[_0x5E54[9]]; _0x5EA2++) {
                                var _0x5F0A = _0x5F24[_0x5EA2];
                                _0x728A[_0x5EF0[_0x5E54[137]]][_0x5F0A[_0x5E54[136]]] = _0x5F0A
                            }
                        };
                        _0x6B3A();
                        if (_0x5E88 != null) {
                            _0x5E88()
                        } else {
                            if (_0x71EE != null) {
                                _0x7222(_0x71EE[_0x5E54[136]])
                            }
                        }
                    },
                    error: function(_0x5E54) {
                        _0x6B3A()
                    }
                })
            }
            
            function _0x5E88() {
                if (_0x71EE != null) {
                    _0x7222(_0x71EE[_0x5E54[136]]);
                    return
                };
                _0x7208(_0x5E54[164]);
                _0x7222(_0x5E54[165])
            }
            _0x73A8 = {};
            _0x73DC = {};
            _0x73C2 = _0x73F6[_0x5E54[166]];
            _0x6B54();
            _0x6BF0();
            $(window)[_0x5E54[167]](_0x6CF4);
            _0x6F30 = new _0x62B2();
            _0x6D90 = new _0x6DAA();
            _0x6A6A();
            _0x6334[_0x5E54[168]]();
            _0x70B6();
            var _0x5ED6 = {
                view: _0x605C,
                transparent: true,
                forceCanvas: _0x6D42[_0x5E54[169]] === _0x5E54[170],
                antialias: !_0x6D42[_0x5E54[171]]
            };
            _0x6EFC = {
                renderer: _0x6EE2[_0x5E54[172]](_0x5ED6),
                stage: _0x6F16
            };
            $(window)[_0x5E54[173]](_0x6D0E);
            _0x6D0E();
            _0x6A02 = Date[_0x5E54[174]]();
            fps = 0;
            _0x6F30[_0x5E54[143]](_0x5E54[175]);
            if (_0x658A[_0x5E54[35]] && _0x658A[_0x5E54[144]] !== _0x5E54[1]) {
                _0x6F30[_0x5E54[143]](_0x658A[_0x5E54[144]])
            };
            if (_0x658A[_0x5E54[35]] && _0x658A[_0x5E54[176]] && !_0x6D42[_0x5E54[177]]) {
                _0x6E12 = new _0x6E2C(_0x658A[_0x5E54[178]])
            };
            _0x75CA();
            requestAnimationFrame(_0x7514)
        }
        
        function _0x6B54() {
            if (_0x73C2 != _0x73F6[_0x5E54[166]]) {
                return
            };
            jQuery[_0x5E54[163]]({
                type: _0x5E54[179],
                dataType: _0x5E54[180],
                crossDomain: true,
                url: _0x5E54[181],
                data: {
                    "action": _0x5E54[182]
                },
                async: false,
                success: function(_0x5E6E) {
                    var _0x5EA2 = JSON[_0x5E54[54]](JSON[_0x5E54[54]](_0x5E6E[_0x5E54[151]])[_0x5E54[183]]);
                    for (var _0x5E88 in _0x5EA2) {
                        var _0x5EBC = _0x5EA2[_0x5E88];
                        if (_0x73DC[_0x5EBC] === undefined) {
                            _0x73DC[_0x5EBC] = _0x73F6[_0x5E54[166]]
                        }
                    }
                },
                error: function(_0x5E6E, _0x5EA2, _0x5E88) {
                    console[_0x5E54[184]](_0x5E6E);
                    console[_0x5E54[184]](_0x5E54[185] + _0x5EA2);
                    console[_0x5E54[184]](_0x5E54[186] + _0x5E88)
                }
            })
        }
        
        function _0x6D0E() {
            _0x605C[_0x5E54[187]] = window[_0x5E54[188]] * _0x6D5C[_0x5E54[189]];
            _0x605C[_0x5E54[190]] = window[_0x5E54[191]] * _0x6D5C[_0x5E54[189]];
            _0x6EFC[_0x5E54[192]][_0x5E54[173]](_0x605C[_0x5E54[187]], _0x605C[_0x5E54[190]]);
            _0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[193]] = (window[_0x5E54[188]] * _0x6D5C[_0x5E54[189]]) / 2;
            _0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[196]] = (window[_0x5E54[191]] * _0x6D5C[_0x5E54[189]]) / 2
        }
        
        function _0x660C(_0x5E6E) {
            for (var _0x5E88 in _0x74FA) {
                if (_0x5E88[_0x5E54[197]](0) == _0x5E54[198]) {
                    _0x5E6E(_0x5E88)
                }
            }
        }
        
        function _0x7514() {
            var _0x5EA2 = (Date[_0x5E54[174]]() - _0x6A02);
            _0x6A02 = Date[_0x5E54[174]]();
            var _0x5E88 = Math[_0x5E54[200]](_0x5EA2 / _0x6D42[_0x5E54[199]], 1.0);
            _0x6674 += _0x5EA2;
            for (var _0x5EBC in _0x6F30[_0x5E54[201]]) {
                _0x5F58 = _0x6F30[_0x5E54[201]][_0x5EBC];
                if (_0x5F58[_0x5E54[202]] > 0) {
                    _0x5F58[_0x5E54[203]](_0x5E88)
                };
                _0x5F58[_0x5E54[204]]()
            };
            for (var _0x5EBC in _0x6F30[_0x5E54[205]]) {
                _0x5F58 = _0x6F30[_0x5E54[205]][_0x5EBC];
                if (_0x5F58[_0x5E54[202]] > 0) {
                    _0x5F58[_0x5E54[203]](_0x5E88)
                };
                _0x5F58[_0x5E54[206]]()
            };
            var _0x5F24 = 0,
                _0x5F3E = 0,
                _0x5E6E = 0,
                _0x5F8C = 0,
                _0x5F58 = null;
            for (var _0x5EBC in _0x6F30[_0x5E54[207]]) {
                _0x5F58 = _0x6F30[_0x5E54[207]][_0x5EBC];
                if (_0x5F58 != null) {
                    _0x5F24 += _0x5F58[_0x5E54[193]];
                    _0x5F3E += _0x5F58[_0x5E54[196]];
                    _0x5F8C += _0x5F58[_0x5E54[208]];
                    _0x5E6E++
                }
            };
            if (_0x5E6E != 0) {
                _0x6F30[_0x5E54[209]] = _0x5F24 / _0x5E6E;
                _0x6F30[_0x5E54[210]] = _0x5F3E / _0x5E6E;
                _0x6F30[_0x5E54[211]] = 0;
                if (_0x6D42[_0x5E54[212]]) {
                    _0x6F30[_0x5E54[213]] = 0.25 * Math[_0x5E54[214]](_0x605C[_0x5E54[190]] / 1080, _0x605C[_0x5E54[187]] / 1920)
                } else {
                    _0x6F30[_0x5E54[213]] = Math[_0x5E54[215]](Math[_0x5E54[200]](64.0 / _0x5F8C, 1), 0.4) * Math[_0x5E54[214]](_0x605C[_0x5E54[190]] / 1080, _0x605C[_0x5E54[187]] / 1920)
                }
            };
            if (_0x6F30[_0x5E54[211]] > 0) {
                _0x6F30[_0x5E54[209]] += (_0x6F30[_0x5E54[216]] - _0x6F30[_0x5E54[209]]) * _0x5E88;
                _0x6F30[_0x5E54[210]] += (_0x6F30[_0x5E54[217]] - _0x6F30[_0x5E54[210]]) * _0x5E88
            };
            var _0x5F0A = _0x6F30[_0x5E54[213]] * _0x6F30[_0x5E54[127]];
            _0x6F30[_0x5E54[218]] = (9 * _0x6F30[_0x5E54[218]] + _0x5F0A) / 10;
            _0x6C3E[_0x5E54[218]][_0x5E54[193]] = _0x6F30[_0x5E54[218]];
            _0x6C3E[_0x5E54[218]][_0x5E54[196]] = _0x6F30[_0x5E54[218]];
            _0x6C3E[_0x5E54[219]][_0x5E54[193]] = _0x6F30[_0x5E54[209]];
            _0x6C3E[_0x5E54[219]][_0x5E54[196]] = _0x6F30[_0x5E54[210]];
            if (_0x6F30[_0x5E54[220]]() && _0x6C58[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16]) {
                if (!_0x6F30[_0x5E54[221]]) {
                    var _0x5ED6 = _0x6C3E[_0x5E54[219]][_0x5E54[193]] - (_0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[193]] / _0x6F30[_0x5E54[218]]) + ((_0x6F30[_0x5E54[101]] * _0x6D5C[_0x5E54[189]]) / _0x6F30[_0x5E54[218]]);
                    var _0x5EF0 = _0x6C3E[_0x5E54[219]][_0x5E54[196]] - (_0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[196]] / _0x6F30[_0x5E54[218]]) + ((_0x6F30[_0x5E54[103]] * _0x6D5C[_0x5E54[189]]) / _0x6F30[_0x5E54[218]]);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[222]](_0x5ED6, _0x5EF0))
                };
                if (_0x764C) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[224]](21))
                }
            };
            if (!_0x6D42[_0x5E54[225]]) {
                _0x64EE(_0x5E88)
            };
            if (_0x6D42[_0x5E54[226]]) {
                _0x64D4()
            };
            _0x6F30[_0x5E54[228]][_0x5E54[227]]();
            _0x6EFC[_0x5E54[192]][_0x5E54[229]](_0x6EFC[_0x5E54[195]]);
            _0x665A++;
            if (_0x6674 >= 1000) {
                _0x64A0[_0x5E54[88]][_0x5E54[230]](_0x665A);
                if (_0x6F30[_0x5E54[232]][_0x5E54[231]] > 0 && _0x6F30[_0x5E54[232]][_0x5E54[92]] > 0) {
                    _0x64A0[_0x5E54[90]][_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                    var _0x5F72 = Math[_0x5E54[214]](0, Math[_0x5E54[233]]((_0x6F30[_0x5E54[232]][_0x5E54[92]] - Date[_0x5E54[174]]()) / 1000));
                    _0x64A0[_0x5E54[92]][_0x5E54[230]](_0x6640(_0x5F72))
                } else {
                    _0x64A0[_0x5E54[90]][_0x5E54[15]](_0x5E54[14], _0x5E54[16])
                };
                _0x6674 = 0;
                _0x665A = 0
            };
            _0x6F30[_0x5E54[235]][_0x5E54[234]]();
            requestAnimationFrame(_0x7514)
        }
        
        function _0x67AC() {
            if (_0x6D42[_0x5E54[236]] && _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[35]]) {
                if (_0x5FA6 != null) {
                    _0x5FA6[_0x5E54[239]][_0x5E54[238]](_0x5FA6);
                    _0x5FA6[_0x5E54[240]]();
                    _0x5FA6 = null
                };
                _0x5FA6 = new _0x6EE2[_0x5E54[241]]();
                _0x5FA6[_0x5E54[247]](_0x74FA[_0x5E54[242]], _0x6EE2[_0x5E54[246]][_0x5E54[245]](tinycolor(_0x74FA[_0x5E54[244]])[_0x5E54[243]]()));
                _0x5FA6[_0x5E54[250]](_0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[248]], _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[249]], _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[187]], _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[190]]);
                _0x5FC0[_0x5E54[28]](_0x5FA6);
                _0x5FA6[_0x5E54[251]] = true
            } else {
                if (_0x5FA6 != null) {
                    _0x5FA6[_0x5E54[239]][_0x5E54[238]](_0x5FA6);
                    _0x5FA6[_0x5E54[240]]();
                    _0x5FA6 = null
                }
            }
        }
        
        function _0x64D4() {
            _0x64A0[_0x5E54[97]][_0x5E54[15]]({
                "color": _0x74FA[_0x5E54[252]]
            });
            _0x64A0[_0x5E54[97]][_0x5E54[230]](_0x5E54[253] + _0x6F30[_0x5E54[209]][_0x5E54[254]](0) + _0x5E54[255] + _0x6F30[_0x5E54[210]][_0x5E54[254]](0))
        }
        
        function _0x64EE(_0x5E6E) {
            if (!_0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[35]]) {
                return
            };
            _0x6C8C[_0x5E54[256]](0, 0, _0x6C72[_0x5E54[187]], _0x6C72[_0x5E54[190]]);
            _0x6C8C[_0x5E54[257]] = _0x5E54[258];
            for (var _0x5E88 = 0; _0x5E88 < _0x6F30[_0x5E54[259]][_0x5E54[9]]; _0x5E88++) {
                var _0x5EA2 = _0x6F30[_0x5E54[259]][_0x5E88];
                if (_0x5EA2[_0x5E54[260]] === _0x6E7A[_0x5E54[261]] && _0x5EA2[_0x5E54[122]] != _0x6F30[_0x5E54[262]]) {
                    _0x6CA6(_0x6C8C, _0x5EA2[_0x5E54[136]], _0x5EA2[_0x5E54[193]], _0x5EA2[_0x5E54[196]], 4, _0x5EA2[_0x5E54[263]], true);
                    _0x5EA2[_0x5E54[193]] += (_0x5EA2[_0x5E54[264]] - _0x5EA2[_0x5E54[193]]) * _0x5E6E;
                    _0x5EA2[_0x5E54[196]] += (_0x5EA2[_0x5E54[265]] - _0x5EA2[_0x5E54[196]]) * _0x5E6E
                }
            };
            _0x6CA6(_0x6C8C, _0x6F30[_0x5E54[136]], _0x6F30[_0x5E54[209]], _0x6F30[_0x5E54[210]], 6, _0x5E54[266], false)
        }
        
        function _0x6CF4() {
            _0x7152()
        }
        
        function _0x62B2() {
            this[_0x5E54[267]] = null;
            this[_0x5E54[268]] = null;
            this[_0x5E54[269]] = null;
            this[_0x5E54[270]] = false;
            this[_0x5E54[136]] = _0x5E54[1];
            this[_0x5E54[262]] = 0;
            this[_0x5E54[205]] = {};
            this[_0x5E54[201]] = {};
            this[_0x5E54[207]] = {};
            this[_0x5E54[235]] = new _0x6F64();
            this[_0x5E54[228]] = new _0x600E();
            this[_0x5E54[209]] = 0;
            this[_0x5E54[210]] = 0;
            this[_0x5E54[216]] = 0;
            this[_0x5E54[217]] = 0;
            this[_0x5E54[211]] = 0;
            this[_0x5E54[218]] = 1.0;
            this[_0x5E54[271]] = 1.0;
            this[_0x5E54[213]] = 1.0;
            this[_0x5E54[127]] = 1.0;
            this[_0x5E54[272]] = 0;
            this[_0x5E54[273]] = 0;
            this[_0x5E54[101]] = 0;
            this[_0x5E54[103]] = 0;
            this[_0x5E54[274]] = 0;
            this[_0x5E54[275]] = 0;
            this[_0x5E54[221]] = false;
            this[_0x5E54[259]] = [];
            this[_0x5E54[276]] = {};
            this[_0x5E54[277]] = false;
            this[_0x5E54[232]] = {
                hasSentSubPanel: false,
                border: {},
                maxCells: 16
            };
            this[_0x5E54[278]] = 0;
            this[_0x5E54[279]] = {};
            this[_0x5E54[280]]();
            setInterval(this[_0x5E54[282]][_0x5E54[281]](this), 30000)
        }
        _0x62B2[_0x5E54[283]][_0x5E54[280]] = function() {
            this[_0x5E54[284]] = {
                name: _0x5E54[285],
                alive: 0,
                eatenFood: 0,
                eatenEject: 0,
                eatenVirus: 0,
                eatenPlayer: 0,
                gainFood: 0,
                gainEject: 0,
                gainVirus: 0,
                gainPlayer: 0
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[286]] = function() {
            if (_0x71EE == null) {
                this[_0x5E54[143]](_0x5E54[287]);
                return
            };
            this[_0x5E54[136]] = $(_0x5E54[288])[_0x5E54[139]]();
            this[_0x5E54[270]] = false;
            this[_0x5E54[269]] = _0x71EE[_0x5E54[136]];
            $(_0x5E54[289])[_0x5E54[230]](this[_0x5E54[269]]);
            _0x6B20();
            if (this[_0x5E54[220]]() && this[_0x5E54[268]] == _0x71EE[_0x5E54[290]]) {
                this[_0x5E54[223]](new _0x6D90[_0x5E54[291]](this[_0x5E54[136]]))
            } else {
                this[_0x5E54[292]](_0x71EE[_0x5E54[290]])
            };
            _0x7326();
            _0x6848(_0x6C58);
            ga(_0x5E54[293], _0x5E54[294], _0x5E54[295], _0x5E54[296], _0x5E54[297])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[298]] = function() {
            if (_0x71EE == null) {
                this[_0x5E54[143]](_0x5E54[287]);
                return
            };
            this[_0x5E54[270]] = true;
            _0x6B20();
            if (this[_0x5E54[220]]() && this[_0x5E54[268]] == _0x71EE[_0x5E54[290]]) {
                this[_0x5E54[223]](new _0x6D90[_0x5E54[299]]())
            } else {
                this[_0x5E54[292]](_0x71EE[_0x5E54[290]])
            };
            _0x7326();
            _0x6848(_0x6C58);
            ga(_0x5E54[293], _0x5E54[294], _0x5E54[295], _0x5E54[296], _0x5E54[300])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[292]] = function(_0x5E88) {
            if (this[_0x5E54[267]] != null) {
                this[_0x5E54[267]][_0x5E54[301]] = _0x5E88;
                this[_0x5E54[302]](_0x5E88);
                return
            };
            this[_0x5E54[268]] = _0x5E88;
            this[_0x5E54[269]] = _0x71EE[_0x5E54[136]];
            this[_0x5E54[143]](_0x5E54[303] + this[_0x5E54[269]] + _0x5E54[304]);
            if (_0x71EE[_0x5E54[158]] == 1) {
                this[_0x5E54[267]] = new WebSocket(_0x5E54[305] + _0x5E88)
            } else {
                this[_0x5E54[267]] = new WebSocket(_0x5E54[306] + _0x5E88)
            };
            this[_0x5E54[267]][_0x5E54[307]] = _0x5E54[308];
            var _0x5E6E = this;
            this[_0x5E54[267]][_0x5E54[309]] = this[_0x5E54[310]][_0x5E54[281]](this);
            this[_0x5E54[267]][_0x5E54[311]] = this[_0x5E54[312]][_0x5E54[281]](this);
            this[_0x5E54[267]][_0x5E54[313]] = function(_0x5E88) {
                _0x5E6E[_0x5E54[314]]();
                _0x5E6E[_0x5E54[143]](_0x5E54[315] + (_0x5E88[_0x5E54[316]] === _0x5E54[1] ? _0x5E54[317] : _0x5E88[_0x5E54[316]]));
                if (this[_0x5E54[301]] != null) {
                    _0x5E6E[_0x5E54[292]](this[_0x5E54[301]])
                }
            };
            this[_0x5E54[267]][_0x5E54[318]] = function(_0x5EA2) {
                _0x5E6E[_0x5E54[314]]();
                this[_0x5E54[301]] = null;
                _0x5E6E[_0x5E54[143]](_0x5E54[319]);
                setTimeout(function() {
                    if (_0x5E6E[_0x5E54[220]]() == false && _0x5E6E[_0x5E54[267]] == null) {
                        _0x5E6E[_0x5E54[292]](_0x5E88)
                    }
                }, 1000)
            };
            document[_0x5E54[323]](_0x5E54[322])[0][_0x5E54[321]][_0x5E54[320]] = _0x5E54[324]
        };
        _0x62B2[_0x5E54[283]][_0x5E54[302]] = function(_0x5E6E) {
            if (this[_0x5E54[267]] != null) {
                this[_0x5E54[267]][_0x5E54[325]]()
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[326]] = function() {
            for (var _0x5E6E in this[_0x5E54[205]]) {
                this[_0x5E54[205]][_0x5E6E][_0x5E54[327]]();
                delete this[_0x5E54[205]][_0x5E6E]
            };
            for (var _0x5E6E in this[_0x5E54[201]]) {
                this[_0x5E54[201]][_0x5E6E][_0x5E54[327]]();
                delete this[_0x5E54[201]][_0x5E6E]
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[314]] = function() {
            this[_0x5E54[326]]();
            this[_0x5E54[207]] = {};
            this[_0x5E54[235]][_0x5E54[328]]();
            this[_0x5E54[262]] = 0;
            this[_0x5E54[278]] = 0;
            this[_0x5E54[268]] = null;
            this[_0x5E54[280]]();
            this[_0x5E54[329]]();
            this[_0x5E54[228]][_0x5E54[330]]();
            this[_0x5E54[232]][_0x5E54[331]] = false;
            this[_0x5E54[232]][_0x5E54[231]] = 0;
            if (this[_0x5E54[267]] != null) {
                this[_0x5E54[267]] = null
            };
            $(_0x5E54[332])[_0x5E54[230]](this[_0x5E54[262]]);
            if (this[_0x5E54[277]]) {
                this[_0x5E54[277]] = false;
                _0x75FE()
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[115]] = function(_0x5E88) {
            if (_0x5E88 == _0x69B4[_0x5E54[117]]) {
                _0x764C = true
            } else {
                if (_0x5E88 == _0x69B4[_0x5E54[333]]) {
                    this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17))
                } else {
                    if (_0x5E88 == _0x69B4[_0x5E54[334]]) {
                        this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](18))
                    } else {
                        if (_0x5E88 == _0x69B4[_0x5E54[335]]) {
                            this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17));
                            this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17))
                        } else {
                            if (_0x5E88 == _0x69B4[_0x5E54[336]]) {
                                for (var _0x5E6E = 0; _0x5E6E < 3; _0x5E6E++) {
                                    this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17))
                                }
                            } else {
                                if (_0x5E88 == _0x69B4[_0x5E54[337]]) {
                                    for (var _0x5E6E = 0; _0x5E6E < 4; _0x5E6E++) {
                                        this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17))
                                    }
                                } else {
                                    if (_0x5E88 == _0x69B4[_0x5E54[338]]) {
                                        for (var _0x5E6E = 0; _0x5E6E < 6; _0x5E6E++) {
                                            this[_0x5E54[223]](new _0x6D90[_0x5E54[224]](17))
                                        }
                                    } else {
                                        if (_0x5E88 == 38) {
                                            this[_0x5E54[127]] *= 1.025;
                                            this[_0x5E54[127]] = _0x6F30[_0x5E54[127]] > 3 ? 3 : (this[_0x5E54[127]] < 0.2 ? 0.2 : this[_0x5E54[127]])
                                        } else {
                                            if (_0x5E88 == 40) {
                                                this[_0x5E54[127]] *= 0.975;
                                                this[_0x5E54[127]] = _0x6F30[_0x5E54[127]] > 3 ? 3 : (this[_0x5E54[127]] < 0.2 ? 0.2 : this[_0x5E54[127]])
                                            } else {
                                                if (_0x5E88 == _0x69B4[_0x5E54[339]]) {
                                                    this[_0x5E54[221]] = !this[_0x5E54[221]];
                                                    if (this[_0x5E54[221]]) {
                                                        _0x64A0[_0x5E54[82]][_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                                                    } else {
                                                        _0x64A0[_0x5E54[82]][_0x5E54[15]](_0x5E54[14], _0x5E54[16])
                                                    }
                                                } else {
                                                    if (_0x5E88 == _0x69B4[_0x5E54[340]]) {
                                                        _0x624A()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[220]] = function() {
            if (this[_0x5E54[267]] == null) {
                return false
            } else {
                return this[_0x5E54[267]][_0x5E54[341]] == 1
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[223]] = function(_0x5E6E) {
            if (this[_0x5E54[220]]()) {
                this[_0x5E54[267]][_0x5E54[293]](_0x5E6E)
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[310]] = function() {
            _0x5F72 = [];
            _0x65BE();
            this[_0x5E54[223]](new _0x6D90[_0x5E54[342]]());
            this[_0x5E54[282]]();
            if (firebase[_0x5E54[32]]()[_0x5E54[343]] !== null) {
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]](true)[_0x5E54[346]]((_0x5E6E) => {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[345]](_0x5E6E))
                })[_0x5E54[344]]((_0x5E54) => {
                    return _0x67C6(_0x5E54, true)
                });
                return
            } else {
                if (!this[_0x5E54[270]]) {
                    this[_0x5E54[223]](new _0x6D90[_0x5E54[291]](this[_0x5E54[136]]))
                } else {
                    this[_0x5E54[223]](new _0x6D90[_0x5E54[299]]())
                }
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[282]] = function() {
            if (this[_0x5E54[220]]()) {
                _0x6EC8 = +new Date;
                this[_0x5E54[223]](new _0x6D90[_0x5E54[282]]())
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[143]] = function(_0x5E88) {
            var _0x5E6E = document[_0x5E54[349]](_0x5E54[348]);
            var _0x5EA2 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5EA2[_0x5E54[321]][_0x5E54[351]] = _0x5E54[352];
            _0x5EA2[_0x5E54[353]] = _0x5E54[354] + _0x6DF8(_0x5E88);
            _0x5E6E[_0x5E54[355]](_0x5EA2);
            _0x5EBC(_0x6216[_0x5E54[356]], _0x5E6E)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[357]] = function(_0x5ED6, _0x5E6E) {
            var _0x5EA2 = document[_0x5E54[349]](_0x5E54[348]);
            var _0x5EF0 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5EF0[_0x5E54[321]][_0x5E54[351]] = _0x5E54[352];
            _0x5EF0[_0x5E54[353]] = _0x5E54[354] + _0x6DF8(_0x5ED6);
            _0x5EA2[_0x5E54[355]](_0x5EF0);
            var _0x5E88 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5E88[_0x5E54[321]][_0x5E54[351]] = _0x5E54[352];
            _0x5E88[_0x5E54[353]] = _0x5E6E;
            _0x5E88[_0x5E54[321]][_0x5E54[358]] = _0x5E54[359];
            _0x5E88[_0x5E54[321]][_0x5E54[360]] = _0x5E54[359];
            _0x5EA2[_0x5E54[355]](_0x5E88);
            _0x5EBC(_0x6216[_0x5E54[356]], _0x5EA2)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[329]] = function(_0x5E6E) {
            this[_0x5E54[259]] = [];
            this[_0x5E54[276]] = {};
            this[_0x5E54[361]] = -1;
            this[_0x5E54[362]] = -1;
            $(_0x5E54[74])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            if (_0x641E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[18]) {
                this[_0x5E54[363]]()
            };
            if (this[_0x5E54[364]] != null || _0x5F24 != null) {
                this[_0x5E54[364]] = _0x5F24 = null;
                window[_0x5E54[368]][_0x5E54[367]](_0x5E54[365], _0x5E54[1], _0x5E54[366])
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[369]] = function() {
            return this[_0x5E54[361]] == this[_0x5E54[262]]
        };
        _0x62B2[_0x5E54[283]][_0x5E54[370]] = function() {
            return this[_0x5E54[232]][_0x5E54[371]] + this[_0x5E54[228]][_0x5E54[372]]
        };
        _0x62B2[_0x5E54[283]][_0x5E54[312]] = function(_0x5E88) {
            var _0x5E6E = new DataView(_0x5E88[_0x5E54[373]]);
            var _0x5EA2 = _0x5E6E[_0x5E54[374]](0);
            _0x5E6E[_0x5E54[375]] = 1;
            switch (_0x5EA2) {
                case 2:
                    this[_0x5E54[376]](_0x5E6E);
                    break;
                case 10:
                    this[_0x5E54[377]](_0x5E6E);
                    break;
                case 21:
                    this[_0x5E54[378]](_0x5E6E);
                    break;
                case 22:
                    this[_0x5E54[379]](_0x5E6E);
                    break;
                case 23:
                    this[_0x5E54[380]](_0x5E6E);
                    break;
                case 40:
                    this[_0x5E54[381]](_0x5E6E);
                    break;
                case 41:
                    this[_0x5E54[382]](_0x5E6E);
                    break;
                case 45:
                    this[_0x5E54[383]](_0x5E6E);
                    break;
                case 43:
                    this[_0x5E54[384]](_0x5E6E);
                    break;
                case 49:
                    this[_0x5E54[385]](_0x5E6E);
                    break;
                case 50:
                    this[_0x5E54[386]](_0x5E6E);
                    break;
                case 64:
                    this[_0x5E54[387]](_0x5E6E);
                    break;
                case 65:
                    this[_0x5E54[388]]();
                    break;
                case 66:
                    this[_0x5E54[389]](_0x5E6E);
                    break;
                case 68:
                    this[_0x5E54[390]](_0x5E6E);
                    break;
                case 69:
                    this[_0x5E54[391]](_0x5E6E);
                    break;
                case 70:
                    this[_0x5E54[392]](_0x5E6E);
                    break;
                case 71:
                    this[_0x5E54[393]]();
                    break;
                case 72:
                    this[_0x5E54[394]](_0x5E6E);
                    break;
                case 73:
                    this[_0x5E54[395]](_0x5E6E);
                    break;
                case 80:
                    this[_0x5E54[396]]();
                    break;
                case 81:
                    this[_0x5E54[397]](_0x5E6E);
                    break;
                case 82:
                    this[_0x5E54[398]](_0x5E6E);
                    break;
                case 83:
                    this[_0x5E54[399]](_0x5E6E);
                    break;
                case 90:
                    this[_0x5E54[400]](_0x5E6E);
                    break;
                case 91:
                    this[_0x5E54[401]](_0x5E6E);
                    break;
                case 92:
                    this[_0x5E54[402]](_0x5E6E);
                    break;
                case 93:
                    this[_0x5E54[363]]();
                    break;
                case 100:
                    this[_0x5E54[403]](_0x5E6E);
                    break;
                case 101:
                    this[_0x5E54[404]](_0x5E6E);
                    break;
                case 102:
                    this[_0x5E54[405]](_0x5E6E);
                    break;
                case 103:
                    this[_0x5E54[406]](_0x5E6E);
                    break;
                case 104:
                    this[_0x5E54[407]](_0x5E6E);
                    break
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[376]] = function(_0x5F0A) {
            while (true) {
                var _0x5EA2 = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                _0x5F0A[_0x5E54[375]] += 2;
                if (_0x5EA2 == 0) {
                    break
                };
                var _0x5ED6 = this[_0x5E54[235]][_0x5E54[409]](_0x5EA2);
                var _0x5E88 = false;
                if (_0x5ED6 == null) {
                    _0x5ED6 = new _0x6F4A(_0x5EA2)
                } else {
                    _0x5E88 = true
                };
                _0x5ED6[_0x5E54[410]] = (_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++) << 16) + (_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++) << 8) + _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++);
                _0x5ED6[_0x5E54[136]] = _0x7082(_0x5F0A);
                _0x5ED6[_0x5E54[411]](_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++));
                if ((_0x5ED6[_0x5E54[412]] & 2) == 2) {
                    _0x5ED6[_0x5E54[413]] = _0x5E54[13] + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++)) + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++)) + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++));
                    _0x5ED6[_0x5E54[414]](_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++));
                    _0x5ED6[_0x5E54[415]](_0x709C(_0x5F0A), true)
                };
                if (_0x5ED6[_0x5E54[416]] == null) {
                    _0x5ED6[_0x5E54[415]](_0x5ED6[_0x5E54[136]])
                };
                if (!_0x5E88) {
                    _0x6F30[_0x5E54[235]][_0x5E54[417]](_0x5ED6)
                } else {
                    _0x6F30[_0x5E54[235]][_0x5E54[418]](_0x5ED6)
                }
            };
            while (true) {
                var _0x5EA2 = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                _0x5F0A[_0x5E54[375]] += 2;
                if (_0x5EA2 == 0) {
                    break
                };
                var _0x5EF0 = _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++);
                var _0x5EBC;
                if (_0x5EF0 == 0) {
                    _0x5EBC = this[_0x5E54[201]][_0x5EA2]
                } else {
                    _0x5EBC = this[_0x5E54[205]][_0x5EA2]
                };
                if (_0x5EBC == null) {
                    _0x5EBC = new _0x60AA(_0x5EA2);
                    _0x5EBC[_0x5E54[419]](_0x5EF0);
                    _0x5EBC[_0x5E54[421]](_0x5F0A[_0x5E54[420]](_0x5F0A[_0x5E54[375]], true));
                    _0x5EBC[_0x5E54[422]](_0x5F0A[_0x5E54[420]](_0x5F0A[_0x5E54[375]] + 2, true));
                    _0x5F0A[_0x5E54[375]] += 4;
                    switch (_0x5EF0) {
                        case 0:
                            _0x5EBC[_0x5E54[351]] = _0x6710(_0x5EBC[_0x5E54[122]]);
                            break;
                        case 1:
                            _0x5EBC[_0x5E54[423]](_0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true));
                            _0x5F0A[_0x5E54[375]] += 2;
                            _0x5EBC[_0x5E54[424]] = _0x5E54[13] + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]])) + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]] + 1)) + _0x6042(_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]] + 2));
                            _0x5EBC[_0x5E54[351]] = (_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++) << 16) + (_0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++) << 8) + _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++);
                            _0x5EBC[_0x5E54[416]] = _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++) - 1;
                            break;
                        case 2:
                            _0x5EBC[_0x5E54[423]](_0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true));
                            _0x5F0A[_0x5E54[375]] += 2;
                            _0x5EBC[_0x5E54[262]] = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 3:
                            _0x5EBC[_0x5E54[423]](_0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true));
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 4:
                            _0x5EBC[_0x5E54[423]](_0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true));
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 5:
                            _0x5EBC[_0x5E54[423]](80);
                            _0x5EBC[_0x5E54[425]] = _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]++);
                            break
                    };
                    _0x5EBC[_0x5E54[426]]();
                    if (_0x5EF0 == 0) {
                        this[_0x5E54[201]][_0x5EA2] = _0x5EBC
                    } else {
                        this[_0x5E54[205]][_0x5EA2] = _0x5EBC
                    };
                    if (_0x5EBC[_0x5E54[262]] == this[_0x5E54[262]]) {
                        this[_0x5E54[207]][_0x5EA2] = _0x5EBC
                    }
                } else {
                    _0x5EBC[_0x5E54[427]](_0x5F0A[_0x5E54[420]](_0x5F0A[_0x5E54[375]], true));
                    _0x5EBC[_0x5E54[428]](_0x5F0A[_0x5E54[420]](_0x5F0A[_0x5E54[375]] + 2, true));
                    _0x5F0A[_0x5E54[375]] += 4;
                    switch (_0x5EF0) {
                        case 0:
                            break;
                        case 1:
                            _0x5EBC[_0x5E54[429]] = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                            _0x5F0A[_0x5E54[375]] += 2;
                            _0x5F0A[_0x5E54[375]] += 4;
                            break;
                        case 2:
                            _0x5EBC[_0x5E54[429]] = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                            _0x5F0A[_0x5E54[375]] += 2;
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 3:
                            _0x5EBC[_0x5E54[429]] = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 4:
                            _0x5EBC[_0x5E54[429]] = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                            _0x5F0A[_0x5E54[375]] += 2;
                            break;
                        case 5:
                            _0x5F0A[_0x5E54[375]]++;
                            break
                    };
                    _0x5EBC[_0x5E54[202]] = 30
                }
            };
            var _0x5E6E = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
            _0x5F0A[_0x5E54[375]] += 2;
            while (_0x5E6E > 0) {
                var _0x5EA2 = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                _0x5F0A[_0x5E54[375]] += 2;
                _0x6F30[_0x5E54[235]][_0x5E54[430]](_0x5EA2);
                _0x5E6E--
            };
            _0x5E6E = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
            _0x5F0A[_0x5E54[375]] += 2;
            while (_0x5E6E > 0) {
                var _0x5EA2 = _0x5F0A[_0x5E54[408]](_0x5F0A[_0x5E54[375]], true);
                _0x5F0A[_0x5E54[375]] += 2;
                var _0x5EBC = this[_0x5E54[205]][_0x5EA2] || this[_0x5E54[201]][_0x5EA2];
                if (_0x5EBC != null) {
                    if (_0x5EBC[_0x5E54[431]] == 0) {
                        delete this[_0x5E54[201]][_0x5EA2]
                    } else {
                        delete this[_0x5E54[205]][_0x5EA2]
                    };
                    if (_0x5EBC[_0x5E54[262]] == this[_0x5E54[262]]) {
                        delete this[_0x5E54[207]][_0x5EA2];
                        if (Object[_0x5E54[432]](this[_0x5E54[207]])[_0x5E54[9]] == 0) {
                            if (_0x6D42[_0x5E54[433]]) {
                                if ($(_0x5E54[73])[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16]) {
                                    _0x6F30[_0x5E54[286]]()
                                }
                            } else {
                                if (_0x71A0[_0x5E54[15]](_0x5E54[14]) != _0x5E54[18]) {
                                    _0x7340(_0x6C58)
                                };
                                aiptag[_0x5E54[436]][_0x5E54[14]][_0x5E54[161]](function() {
                                    aipDisplayTag[_0x5E54[435]](_0x5E54[434])
                                })
                            }
                        }
                    };
                    _0x5EBC[_0x5E54[327]]()
                };
                _0x5E6E--
            };
            this[_0x5E54[437]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[377]] = function(_0x5E6E) {
            this[_0x5E54[216]] = _0x5E6E[_0x5E54[438]](_0x5E6E[_0x5E54[375]], true);
            _0x5E6E[_0x5E54[375]] += 4;
            this[_0x5E54[217]] = _0x5E6E[_0x5E54[438]](_0x5E6E[_0x5E54[375]], true);
            _0x5E6E[_0x5E54[375]] += 4;
            this[_0x5E54[211]] = 30;
            if (!_0x6D42[_0x5E54[212]]) {
                this[_0x5E54[213]] = _0x5E6E[_0x5E54[438]](_0x5E6E[_0x5E54[375]], true)
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[387]] = function(_0x5E6E) {
            this[_0x5E54[262]] = _0x5E6E[_0x5E54[408]](_0x5E6E[_0x5E54[375]], true);
            _0x5E6E[_0x5E54[375]] += 2 + 1;
            this[_0x5E54[389]](_0x5E6E);
            this[_0x5E54[232]][_0x5E54[371]] = _0x5E6E[_0x5E54[408]](_0x5E6E[_0x5E54[375]], true);
            _0x5E6E[_0x5E54[375]] += 2;
            $(_0x5E54[332])[_0x5E54[230]](_0x6F30[_0x5E54[262]]);
            this[_0x5E54[439]](0, true);
            if (_0x5F24 != null) {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[440]](_0x5F24))
            };
            _0x71A0[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            $(_0x5E54[441])[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[389]] = function(_0x5E6E) {
            this[_0x5E54[232]][_0x5E54[237]] = {};
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[248]] = _0x5E6E[_0x5E54[420]](_0x5E6E[_0x5E54[375]], true);
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[249]] = _0x5E6E[_0x5E54[420]](_0x5E6E[_0x5E54[375]] + 2, true);
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[442]] = _0x5E6E[_0x5E54[420]](_0x5E6E[_0x5E54[375]] + 4, true);
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[443]] = _0x5E6E[_0x5E54[420]](_0x5E6E[_0x5E54[375]] + 6, true);
            _0x5E6E[_0x5E54[375]] += 8;
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[187]] = this[_0x5E54[232]][_0x5E54[237]][_0x5E54[442]] - this[_0x5E54[232]][_0x5E54[237]][_0x5E54[248]];
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[190]] = this[_0x5E54[232]][_0x5E54[237]][_0x5E54[443]] - this[_0x5E54[232]][_0x5E54[237]][_0x5E54[249]];
            this[_0x5E54[232]][_0x5E54[237]][_0x5E54[35]] = this[_0x5E54[232]][_0x5E54[237]][_0x5E54[187]] != 0 && this[_0x5E54[232]][_0x5E54[237]][_0x5E54[190]] != 0;
            _0x67AC()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[390]] = function(_0x5EA2) {
            var _0x5E88 = _0x5EA2[_0x5E54[374]](_0x5EA2[_0x5E54[375]]++);
            var _0x5E6E = _0x5EA2[_0x5E54[444]](_0x5EA2[_0x5E54[375]], true);
            this[_0x5E54[232]][_0x5E54[231]] = _0x5E88;
            this[_0x5E54[232]][_0x5E54[92]] = _0x5E6E
        };
        _0x62B2[_0x5E54[283]][_0x5E54[391]] = function(_0x5E6E) {
            this[_0x5E54[445]] = _0x5E6E[_0x5E54[408]](_0x5E6E[_0x5E54[375]], true);
            this[_0x5E54[446]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[388]] = function(_0x5E6E) {
            this[_0x5E54[326]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[385]] = function(_0x5F24) {
            var _0x5ED6 = document[_0x5E54[69]](_0x5E54[447]);
            var _0x5E88 = _0x5ED6[_0x5E54[72]](_0x5E54[71]);
            _0x6A36[_0x5E54[449]](_0x5E54[448]);
            var _0x5E6E = _0x5F24[_0x5E54[450]](_0x5F24[_0x5E54[375]], true);
            _0x5F24[_0x5E54[375]] += 4;
            _0x5ED6[_0x5E54[187]] = 200;
            _0x5ED6[_0x5E54[190]] = (20 * _0x5E6E) + 5;
            _0x5E88[_0x5E54[257]] = _0x5E54[451];
            var _0x5F0A = 20;
            for (var _0x5EA2 = 0; _0x5EA2 < _0x5E6E; _0x5EA2++) {
                var _0x5EBC = _0x5F24[_0x5E54[408]](_0x5F24[_0x5E54[375]], true);
                _0x5F24[_0x5E54[375]] += 2;
                var _0x5EF0 = _0x7082(_0x5F24) || _0x5E54[285];
                if (_0x5EBC == this[_0x5E54[262]]) {
                    _0x5E88[_0x5E54[452]] = _0x74FA[_0x5E54[453]]
                } else {
                    if (this[_0x5E54[276]][_0x5EBC] != null) {
                        _0x5E88[_0x5E54[452]] = _0x74FA[_0x5E54[454]]
                    } else {
                        _0x5E88[_0x5E54[452]] = _0x74FA[_0x5E54[252]]
                    }
                };
                _0x5E88[_0x5E54[456]]((_0x5EA2 + 1) + _0x5E54[455] + _0x5EF0, 10, _0x5F0A);
                _0x5F0A += 20
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[386]] = function(_0x5F3E) {
            var _0x5ED6 = document[_0x5E54[69]](_0x5E54[447]);
            var _0x5EA2 = _0x5ED6[_0x5E54[72]](_0x5E54[71]);
            _0x6A36[_0x5E54[230]](_0x5E54[448]);
            var _0x5E6E = _0x5F3E[_0x5E54[408]](_0x5F3E[_0x5E54[375]], true);
            var _0x5E88 = _0x5F3E[_0x5E54[374]](_0x5F3E[_0x5E54[375]] + 2, true);
            var _0x5F24 = _0x5F3E[_0x5E54[374]](_0x5F3E[_0x5E54[375]] + 3, true);
            _0x5F3E[_0x5E54[375]] += 4;
            _0x5ED6[_0x5E54[187]] = 200;
            _0x5ED6[_0x5E54[190]] = (20 * _0x5E6E) + 5 + (_0x5F24 != 0 ? 40 : 0);
            _0x5EA2[_0x5E54[257]] = _0x5E54[451];
            var _0x5F0A = 20;
            for (var _0x5EBC = 0; _0x5EBC < _0x5E6E; _0x5EBC++) {
                var _0x5EF0 = _0x709C(_0x5F3E);
                if (_0x5EBC == _0x5E88) {
                    _0x5EA2[_0x5E54[452]] = _0x74FA[_0x5E54[453]]
                } else {
                    _0x5EA2[_0x5E54[452]] = _0x74FA[_0x5E54[252]]
                };
                _0x5EA2[_0x5E54[456]](_0x5EF0, 5, _0x5F0A);
                _0x5F0A += 20
            };
            if (_0x5F24 != 0) {
                _0x5F0A += 20;
                _0x5EA2[_0x5E54[456]](_0x5E54[457] + _0x5F24, 10, _0x5F0A)
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[393]] = function() {
            var _0x5E6E = +new Date - _0x6EC8;
            if (!_0x6D42[_0x5E54[458]]) {
                if (_0x5E6E < 100) {
                    $(_0x5E54[460])[_0x5E54[15]]({
                        "color": _0x74FA[_0x5E54[459]]
                    })
                } else {
                    if (_0x5E6E < 200) {
                        $(_0x5E54[460])[_0x5E54[15]]({
                            "color": _0x74FA[_0x5E54[461]]
                        })
                    } else {
                        $(_0x5E54[460])[_0x5E54[15]]({
                            "color": _0x74FA[_0x5E54[462]]
                        })
                    }
                }
            } else {
                $(_0x5E54[460])[_0x5E54[15]]({
                    "color": _0x74FA[_0x5E54[252]]
                })
            };
            $(_0x5E54[460])[_0x5E54[230]](_0x5E6E + _0x5E54[463])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[394]] = function(_0x6028) {
            var _0x5E6E = _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++);
            var _0x5F58 = _0x5E54[464] + _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++) + _0x5E54[8] + _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++) + _0x5E54[8] + _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++) + _0x5E54[465];
            var _0x5EA2 = _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++);
            var _0x5FA6 = _0x6028[_0x5E54[408]](_0x6028[_0x5E54[375]], true);
            _0x6028[_0x5E54[375]] += 2;
            if (_0x5F72[_0x5E54[466]](_0x5FA6)) {
                return
            };
            var _0x5FDA = _0x7082(_0x6028);
            var _0x5FF4 = _0x6028[_0x5E54[374]](_0x6028[_0x5E54[375]]++);
            var _0x5F3E = _0x6DF8(_0x7082(_0x6028)) || _0x5E54[285];
            var _0x5F24 = _0x6DF8(_0x7082(_0x6028));
            var _0x5ED6 = _0x6216[_0x5E54[47]];
            var _0x5E88;
            switch (_0x5E6E) {
                case 1:
                    _0x5E88 = _0x5E54[46];
                    _0x5ED6 = _0x6216[_0x5E54[467]];
                    break;
                case 2:
                    _0x5E88 = _0x5E54[468];
                    _0x5ED6 = _0x6216[_0x5E54[469]];
                    break;
                default:
                    _0x5E88 = _0x5E54[45];
                    break
            };
            if (_0x5FDA[_0x5E54[9]] > 0) {
                _0x6DF8(_0x5E88 += _0x5E54[470] + _0x5FDA)
            };
            var _0x5F0A = document[_0x5E54[349]](_0x5E54[348]);
            var _0x5FC0 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5FC0[_0x5E54[353]] = _0x5E54[471] + _0x5E88 + _0x5E54[472];
            _0x5F0A[_0x5E54[355]](_0x5FC0);
            var _0x5F8C = document[_0x5E54[349]](_0x5E54[350]);
            _0x5F8C[_0x5E54[473]] = _0x5F3E;
            _0x5F8C[_0x5E54[474]][_0x5E54[262]] = _0x5FA6;
            _0x5F8C[_0x5E54[321]][_0x5E54[351]] = _0x5F58;
            _0x5F8C[_0x5E54[475]] = _0x5E54[476];
            _0x5F8C[_0x5E54[477]] = _0x617A;
            _0x5F0A[_0x5E54[355]](_0x5F8C);
            var _0x600E = document[_0x5E54[349]](_0x5E54[350]);
            _0x600E[_0x5E54[321]][_0x5E54[351]] = _0x6160[_0x5EA2];
            if (_0x5EA2 == 0) {
                _0x600E[_0x5E54[353]] = _0x5E54[478] + _0x6DDE(_0x5F24)
            } else {
                var _0x5EF0 = document[_0x5E54[349]](_0x5E54[350]);
                _0x5EF0[_0x5E54[353]] = _0x5E54[478];
                _0x5F0A[_0x5E54[355]](_0x5EF0);
                _0x600E[_0x5E54[353]] = _0x6DDE(_0x5F24)
            };
            _0x5F0A[_0x5E54[355]](_0x600E);
            _0x5EBC(_0x5ED6, _0x5F0A)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[395]] = function(_0x5FDA) {
            var _0x5F3E = _0x6DF8(_0x7082(_0x5FDA)) || _0x5E54[285];
            var _0x5F8C = _0x5FDA[_0x5E54[408]](_0x5FDA[_0x5E54[375]], true);
            _0x5FDA[_0x5E54[375]] += 2;
            if (_0x5F72[_0x5E54[466]](_0x5F8C)) {
                return
            };
            var _0x5F58 = _0x5E54[464] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[8] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[8] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[465];
            var _0x5ED6 = _0x6DF8(_0x7082(_0x5FDA)) || _0x5E54[285];
            var _0x5F0A = _0x5FDA[_0x5E54[408]](_0x5FDA[_0x5E54[375]], true);
            _0x5FDA[_0x5E54[375]] += 2;
            var _0x5EF0 = _0x5E54[464] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[8] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[8] + _0x5FDA[_0x5E54[374]](_0x5FDA[_0x5E54[375]]++) + _0x5E54[465];
            var _0x5EA2 = _0x6DF8(_0x7082(_0x5FDA));
            var _0x5E88 = document[_0x5E54[349]](_0x5E54[348]);
            var _0x5FA6 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5FA6[_0x5E54[473]] = _0x5F3E;
            _0x5FA6[_0x5E54[474]][_0x5E54[262]] = _0x5F8C;
            _0x5FA6[_0x5E54[321]][_0x5E54[351]] = _0x5F58;
            _0x5FA6[_0x5E54[475]] = _0x5E54[476];
            _0x5FA6[_0x5E54[477]] = _0x617A;
            _0x5E88[_0x5E54[355]](_0x5FA6);
            var _0x5E6E = document[_0x5E54[349]](_0x5E54[350]);
            _0x5E6E[_0x5E54[353]] = _0x5E54[479];
            _0x5E88[_0x5E54[355]](_0x5E6E);
            var _0x5F24 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5F24[_0x5E54[473]] = _0x5ED6;
            _0x5F24[_0x5E54[474]][_0x5E54[262]] = _0x5F0A;
            _0x5F24[_0x5E54[321]][_0x5E54[351]] = _0x5EF0;
            _0x5F24[_0x5E54[475]] = _0x5E54[476];
            _0x5F24[_0x5E54[477]] = _0x617A;
            _0x5E88[_0x5E54[355]](_0x5F24);
            var _0x5FC0 = document[_0x5E54[349]](_0x5E54[350]);
            _0x5FC0[_0x5E54[353]] = _0x5E54[478] + _0x6DDE(_0x5EA2);
            _0x5E88[_0x5E54[355]](_0x5FC0);
            _0x5EBC(_0x6216[_0x5E54[480]], _0x5E88)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[392]] = function(_0x5E88) {
            var _0x5E6E = _0x7082(_0x5E88);
            this[_0x5E54[143]](_0x5E6E)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[406]] = function(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[374]](1);
            switch (_0x5E6E) {
                case _0x5F0A[_0x5E54[481]]:
                    break;
                case _0x5F0A[_0x5E54[483]]:
                    this[_0x5E54[143]](_0x5E54[482]);
                    break
            };
            if (!this[_0x5E54[270]]) {
                this[_0x5E54[223]](new _0x6D90[_0x5E54[291]](this[_0x5E54[136]]))
            } else {
                this[_0x5E54[223]](new _0x6D90[_0x5E54[299]]())
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[407]] = function(_0x5EA2) {
            var _0x5E6E = _0x709C(_0x5EA2);
            var _0x5E88 = JSON[_0x5E54[54]](_0x5E6E);
            _0x6B06(_0x5E88, _0x6C58)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[381]] = function(_0x5EA2) {
            if (_0x6D42[_0x5E54[484]]) {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[485]](false))
            } else {
                var _0x5E88 = _0x6DF8(_0x7082(_0x5EA2));
                var _0x5E6E = document[_0x5E54[69]](_0x5E54[486]);
                _0x5E6E[_0x5E54[473]] = _0x5E88 + _0x5E54[487];
                _0x7340($(_0x5E54[488]))
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[382]] = function(_0x5F3E) {
            var _0x5ED6 = {};
            var _0x5F0A = [];
            var _0x5EF0 = -1;
            var _0x5E6E = _0x5F3E[_0x5E54[408]](_0x5F3E[_0x5E54[375]], true);
            _0x5F3E[_0x5E54[375]] += 2;
            for (var _0x5EA2 = 0; _0x5EA2 < _0x5E6E; _0x5EA2++) {
                var _0x5EBC = {};
                var _0x5E88 = _0x5F3E[_0x5E54[374]](_0x5F3E[_0x5E54[375]]++);
                _0x5EBC[_0x5E54[122]] = _0x5F3E[_0x5E54[408]](_0x5F3E[_0x5E54[375]], true);
                _0x5ED6[_0x5EBC[_0x5E54[122]]] = _0x5EA2;
                _0x5F3E[_0x5E54[375]] += 2;
                if (_0x5E88 == 1) {
                    _0x5EF0 = _0x5EBC[_0x5E54[122]];
                    _0x5EBC[_0x5E54[489]] = true
                } else {
                    _0x5EBC[_0x5E54[489]] = false
                };
                _0x5EBC[_0x5E54[136]] = _0x7082(_0x5F3E) || _0x5E54[285];
                _0x5EBC[_0x5E54[193]] = 0;
                _0x5EBC[_0x5E54[196]] = 0;
                _0x5EBC[_0x5E54[264]] = 0;
                _0x5EBC[_0x5E54[265]] = 0;
                _0x5EBC[_0x5E54[278]] = 0;
                _0x5EBC[_0x5E54[490]] = -1;
                _0x5EBC[_0x5E54[491]] = 0;
                _0x5EBC[_0x5E54[260]] = _0x6E7A[_0x5E54[492]];
                if (this[_0x5E54[276]][_0x5EBC[_0x5E54[122]]] != null) {
                    var _0x5F24 = this[_0x5E54[259]][this[_0x5E54[276]][_0x5EBC[_0x5E54[122]]]];
                    _0x5EBC[_0x5E54[193]] = _0x5F24[_0x5E54[193]];
                    _0x5EBC[_0x5E54[196]] = _0x5F24[_0x5E54[196]];
                    _0x5EBC[_0x5E54[264]] = _0x5F24[_0x5E54[264]];
                    _0x5EBC[_0x5E54[265]] = _0x5F24[_0x5E54[265]];
                    _0x5EBC[_0x5E54[260]] = _0x5F24[_0x5E54[260]];
                    _0x5EBC[_0x5E54[278]] = _0x5F24[_0x5E54[278]];
                    _0x5EBC[_0x5E54[490]] = _0x5F24[_0x5E54[490]];
                    _0x5EBC[_0x5E54[263]] = _0x5F24[_0x5E54[263]]
                } else {
                    _0x5EBC[_0x5E54[263]] = _0x66F6(_0x5EBC[_0x5E54[122]])
                };
                _0x5F0A[_0x5E54[161]](_0x5EBC)
            };
            this[_0x5E54[259]] = _0x5F0A;
            this[_0x5E54[276]] = _0x5ED6;
            if (this[_0x5E54[361]] != _0x5EF0) {
                this[_0x5E54[361]] = _0x5EF0;
                if (_0x641E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[18]) {
                    ScrimmageHelper[_0x5E54[493]]()
                }
            };
            if (_0x5E6E > 0) {
                this[_0x5E54[494]]()
            } else {
                this[_0x5E54[329]]()
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[383]] = function(_0x5EBC) {
            var _0x5E6E = _0x5EBC[_0x5E54[408]](_0x5EBC[_0x5E54[375]], true);
            _0x5EBC[_0x5E54[375]] += 2;
            if (_0x5E6E != this[_0x5E54[259]][_0x5E54[9]]) {
                return
            };
            for (var _0x5E88 = 0; _0x5E88 < _0x5E6E; _0x5E88++) {
                var _0x5EA2 = this[_0x5E54[259]][_0x5E88];
                _0x5EA2[_0x5E54[260]] = _0x5EBC[_0x5E54[374]](_0x5EBC[_0x5E54[375]]++);
                if (_0x5EA2[_0x5E54[260]] === _0x6E7A[_0x5E54[261]]) {
                    _0x5EA2[_0x5E54[264]] = _0x5EBC[_0x5E54[420]](_0x5EBC[_0x5E54[375]], true);
                    _0x5EA2[_0x5E54[265]] = _0x5EBC[_0x5E54[420]](_0x5EBC[_0x5E54[375]] + 2, true);
                    _0x5EA2[_0x5E54[278]] = _0x5EBC[_0x5E54[495]](_0x5EBC[_0x5E54[375]] + 4, true);
                    _0x5EBC[_0x5E54[375]] += 8
                }
            };
            this[_0x5E54[494]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[384]] = function(_0x5EA2) {
            var _0x5E6E = _0x709C(_0x5EA2);
            this[_0x5E54[364]] = _0x709C(_0x5EA2);
            if (this[_0x5E54[364]][_0x5E54[9]] != 0) {
                this[_0x5E54[357]](_0x5E6E, this[_0x5E54[364]]);
                $(_0x5E54[496])[_0x5E54[139]](this[_0x5E54[364]]);
                $(_0x5E54[497])[_0x5E54[17]]();
                var _0x5E88 = _0x5E54[13] + this[_0x5E54[269]] + _0x5E54[131] + this[_0x5E54[364]];
                window[_0x5E54[368]][_0x5E54[367]](_0x5E54[365], _0x5E54[1], _0x5E88)
            } else {
                this[_0x5E54[143]](_0x5E6E);
                this[_0x5E54[364]] = null;
                window[_0x5E54[368]][_0x5E54[367]](_0x5E54[365], _0x5E54[1], _0x5E54[366])
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[378]] = function(_0x5EA2) {
            var _0x5E6E = _0x5EA2[_0x5E54[408]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 2;
            this[_0x5E54[284]][_0x5E54[136]] = _0x7082(_0x5EA2) || _0x5E54[285];
            this[_0x5E54[284]][_0x5E54[498]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[499]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[500]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[501]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[502]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[503]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[504]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[505]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            this[_0x5E54[284]][_0x5E54[506]] += _0x5EA2[_0x5E54[450]](_0x5EA2[_0x5E54[375]], true);
            _0x5EA2[_0x5E54[375]] += 4;
            var _0x5E88 = $(_0x5E54[507]);
            _0x5E88[_0x5E54[508]]();
            _0x5E88[_0x5E54[512]](_0x5E54[509] + this[_0x5E54[284]][_0x5E54[136]] + _0x5E54[510] + _0x5E6E + _0x5E54[511]);
            _0x5E88[_0x5E54[512]](_0x5E54[513] + _0x6640(this[_0x5E54[284]][_0x5E54[498]]) + _0x5E54[514]);
            _0x5E88[_0x5E54[512]](_0x5E54[515] + this[_0x5E54[284]][_0x5E54[499]] + _0x5E54[510] + this[_0x5E54[284]][_0x5E54[503]] + _0x5E54[511]);
            _0x5E88[_0x5E54[512]](_0x5E54[516] + this[_0x5E54[284]][_0x5E54[500]] + _0x5E54[510] + this[_0x5E54[284]][_0x5E54[504]] + _0x5E54[511]);
            _0x5E88[_0x5E54[512]](_0x5E54[517] + this[_0x5E54[284]][_0x5E54[501]] + _0x5E54[510] + this[_0x5E54[284]][_0x5E54[505]] + _0x5E54[511]);
            _0x5E88[_0x5E54[512]](_0x5E54[518] + this[_0x5E54[284]][_0x5E54[502]] + _0x5E54[510] + this[_0x5E54[284]][_0x5E54[506]] + _0x5E54[511])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[379]] = function(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[374]](_0x5E88[_0x5E54[375]]++) == 1;
            this[_0x5E54[277]] = _0x5E6E;
            _0x75FE();
            if (_0x5E6E) {
                if (!this[_0x5E54[232]][_0x5E54[331]]) {
                    _0x75E4();
                    this[_0x5E54[232]][_0x5E54[331]] = true
                };
                document[_0x5E54[521]][_0x5E54[520]][_0x5E54[417]](_0x5E54[519])
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[380]] = function(_0x5E6E) {
            if (_0x7632) {
                _0x6A84(_0x7632[_0x5E54[522]])
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[446]] = function() {
            _0x64A0[_0x5E54[94]][_0x5E54[230]](this[_0x5E54[445]])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[403]] = function(_0x5EBC) {
            var _0x5E6E = _0x5EBC[_0x5E54[374]](_0x5EBC[_0x5E54[375]]++);
            var _0x5EA2 = _0x5EBC[_0x5E54[374]](_0x5EBC[_0x5E54[375]]++);
            var _0x5E88 = _0x5EBC[_0x5E54[444]](_0x5EBC[_0x5E54[375]], true);
            _0x5EBC[_0x5E54[375]] += 8;
            this[_0x5E54[228]][_0x5E54[523]](_0x5E6E, _0x5EA2, _0x5E88)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[404]] = function(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[374]](_0x5E88[_0x5E54[375]]++);
            this[_0x5E54[228]][_0x5E54[524]](_0x5E6E)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[405]] = function(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[374]](_0x5E88[_0x5E54[375]]++) == 1 ? true : false;
            this[_0x5E54[228]][_0x5E54[330]](_0x5E6E)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[437]] = function() {
            _0x612C[_0x5E54[21]][_0x5E54[162]](function(_0x5E6E, _0x5E88) {
                return _0x5E6E[_0x5E54[525]][_0x5E54[208]] - _0x5E88[_0x5E54[525]][_0x5E54[208]]
            });
            this[_0x5E54[526]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[526]] = function() {
            var _0x5E88 = 0;
            var _0x5E6E = 0;
            for (var _0x5EA2 in this[_0x5E54[207]]) {
                var _0x5EBC = this[_0x5E54[207]][_0x5EA2];
                _0x5E88 += _0x5EBC[_0x5E54[527]]();
                _0x5E6E++
            };
            if (_0x5E88 > this[_0x5E54[278]]) {
                this[_0x5E54[278]] = _0x5E88;
                _0x64A0[_0x5E54[84]][_0x5E54[230]](this[_0x5E54[278]][_0x5E54[528]]())
            };
            this[_0x5E54[439]](_0x5E6E)
        };
        _0x62B2[_0x5E54[283]][_0x5E54[439]] = function(_0x5E6E, _0x5E88) {
            if (_0x64A0[_0x5E54[96]] != _0x5E6E || _0x5E88) {
                _0x64A0[_0x5E54[96]] = _0x5E6E;
                _0x64A0[_0x5E54[86]][_0x5E54[230]](_0x5E6E + _0x5E54[4] + this[_0x5E54[370]]());
                if (!_0x6D42[_0x5E54[529]]) {
                    var _0x5EA2 = _0x5E6E / this[_0x5E54[370]]();
                    if (_0x5EA2 >= 1.0) {
                        _0x64A0[_0x5E54[86]][_0x5E54[15]]({
                            "color": _0x74FA[_0x5E54[462]]
                        })
                    } else {
                        if (_0x5EA2 >= 0.5) {
                            _0x64A0[_0x5E54[86]][_0x5E54[15]]({
                                "color": _0x74FA[_0x5E54[461]]
                            })
                        } else {
                            _0x64A0[_0x5E54[86]][_0x5E54[15]]({
                                "color": _0x74FA[_0x5E54[459]]
                            })
                        }
                    }
                } else {
                    _0x64A0[_0x5E54[86]][_0x5E54[15]]({
                        "color": _0x74FA[_0x5E54[252]]
                    })
                }
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[494]] = function() {
            if (this[_0x5E54[259]][_0x5E54[9]] == 0) {
                return
            };
            if (_0x6D42[_0x5E54[530]]) {
                _0x64A0[_0x5E54[99]][_0x5E54[15]](_0x5E54[14], _0x5E54[16])
            } else {
                if (_0x64A0[_0x5E54[99]][_0x5E54[15]](_0x5E54[14]) == _0x5E54[16] && _0x68B0[_0x5E54[15]](_0x5E54[14]) != _0x5E54[16]) {
                    _0x64A0[_0x5E54[99]][_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                }
            };
            var _0x5F24 = document[_0x5E54[69]](_0x5E54[531]);
            var _0x5E6E = _0x5F24[_0x5E54[72]](_0x5E54[71]);
            _0x5E6E[_0x5E54[257]] = _0x5E54[451];
            var _0x5EA2 = 0;
            var _0x5EBC = 0;
            var _0x5F58 = 0;
            for (var _0x5E88 = 0; _0x5E88 < this[_0x5E54[259]][_0x5E54[9]]; _0x5E88++) {
                var _0x5ED6 = this[_0x5E54[259]][_0x5E88];
                if (_0x5ED6[_0x5E54[490]] == -1) {
                    _0x5ED6[_0x5E54[490]] = _0x5E6E[_0x5E54[532]]((_0x5E88 + 1) + _0x5E54[455] + _0x5ED6[_0x5E54[136]])[_0x5E54[187]]
                };
                if (_0x5ED6[_0x5E54[490]] > _0x5EA2) {
                    _0x5EA2 = _0x5ED6[_0x5E54[490]]
                };
                if (_0x5ED6[_0x5E54[260]] === _0x6E7A[_0x5E54[261]] || _0x5ED6[_0x5E54[260]] === _0x6E7A[_0x5E54[492]]) {
                    _0x5ED6[_0x5E54[533]] = _0x5ED6[_0x5E54[278]][_0x5E54[528]]();
                    _0x5F58 += _0x5ED6[_0x5E54[278]]
                } else {
                    if (_0x5ED6[_0x5E54[260]] === _0x6E7A[_0x5E54[534]]) {
                        _0x5ED6[_0x5E54[533]] = _0x5E54[534]
                    } else {
                        if (_0x5ED6[_0x5E54[260]] === _0x6E7A[_0x5E54[535]]) {
                            _0x5ED6[_0x5E54[533]] = _0x5E54[536]
                        }
                    }
                };
                var _0x5F3E = _0x5E6E[_0x5E54[532]](_0x5ED6[_0x5E54[533]])[_0x5E54[187]];
                if (_0x5F3E > _0x5EBC) {
                    _0x5EBC = _0x5F3E
                }
            };
            var _0x5F72 = _0x5F58[_0x5E54[528]]();
            _0x5EBC = Math[_0x5E54[214]](_0x5EBC, _0x5E6E[_0x5E54[532]](_0x5F72)[_0x5E54[187]]);
            _0x5F24[_0x5E54[187]] = 15 + _0x5EA2 + 50 + _0x5EBC;
            _0x5F24[_0x5E54[190]] = (20 * this[_0x5E54[259]][_0x5E54[9]]) + 5 + (this[_0x5E54[259]][_0x5E54[9]] > 1 ? 20 : 0);
            _0x5E6E[_0x5E54[257]] = _0x5E54[451];
            var _0x5F0A = 20;
            var _0x5EF0 = 5 + _0x5EA2 + 50;
            for (var _0x5E88 = 0; _0x5E88 < this[_0x5E54[259]][_0x5E54[9]]; _0x5E88++) {
                var _0x5ED6 = this[_0x5E54[259]][_0x5E88];
                _0x5E6E[_0x5E54[452]] = _0x5ED6[_0x5E54[489]] ? _0x74FA[_0x5E54[537]] : _0x74FA[_0x5E54[252]];
                _0x5E6E[_0x5E54[456]]((_0x5E88 + 1) + _0x5E54[455] + _0x5ED6[_0x5E54[136]], 5, _0x5F0A);
                _0x5E6E[_0x5E54[456]](_0x5ED6[_0x5E54[533]], _0x5EF0, _0x5F0A);
                _0x5F0A += 20
            };
            if (this[_0x5E54[259]][_0x5E54[9]] > 1) {
                _0x5E6E[_0x5E54[452]] = _0x74FA[_0x5E54[252]];
                _0x5E6E[_0x5E54[456]](_0x5E54[538], 5, _0x5F0A);
                _0x5E6E[_0x5E54[456]](_0x5F72, _0x5EF0, _0x5F0A)
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[396]] = function() {
            _0x6C58[_0x5E54[539]](true, false);
            _0x6C58[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            _0x71A0[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
            $(_0x5E54[441])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[35]] = false
        };
        _0x62B2[_0x5E54[283]][_0x5E54[397]] = function(_0x5F0A) {
            var _0x5EA2 = _0x709C(_0x5F0A);
            var _0x5EF0 = _0x5F0A[_0x5E54[450]](_0x5F0A[_0x5E54[375]], true);
            _0x5F0A[_0x5E54[375]] += 4;
            var _0x5ED6 = _0x5F0A[_0x5E54[375]] < _0x5F0A[_0x5E54[540]] ? _0x5F0A[_0x5E54[374]](_0x5F0A[_0x5E54[375]]) : -1;
            var _0x5E88 = document[_0x5E54[69]](_0x5E54[447]);
            var _0x5E6E = _0x5E88[_0x5E54[72]](_0x5E54[71]);
            _0x6A36[_0x5E54[230]](_0x5E54[541]);
            _0x5E88[_0x5E54[187]] = 200;
            _0x5E88[_0x5E54[190]] = (20 * (2 + (_0x5ED6 != -1 ? 1 : 0))) + 5;
            _0x5E6E[_0x5E54[257]] = _0x5E54[451];
            var _0x5EBC = 20;
            _0x5E6E[_0x5E54[452]] = _0x74FA[_0x5E54[252]];
            _0x5E6E[_0x5E54[456]](_0x5E54[542] + _0x5EA2, 5, _0x5EBC);
            _0x5EBC += 20;
            _0x5E6E[_0x5E54[456]](_0x5E54[543] + _0x6640(_0x5EF0), 5, _0x5EBC);
            if (_0x5ED6 != -1) {
                _0x5EBC += 20;
                _0x5E6E[_0x5E54[456]](_0x5E54[544] + _0x5ED6, 5, _0x5EBC)
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[398]] = function(_0x5EBC) {
            var _0x5EA2 = _0x709C(_0x5EBC);
            var _0x5E88 = document[_0x5E54[69]](_0x5E54[447]);
            var _0x5E6E = _0x5E88[_0x5E54[72]](_0x5E54[71]);
            _0x5E88[_0x5E54[187]] = 0;
            _0x5E88[_0x5E54[190]] = 0;
            this[_0x5E54[143]](_0x5E54[545] + _0x5EA2 + _0x5E54[546])
        };
        _0x62B2[_0x5E54[283]][_0x5E54[399]] = function(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[540]] == 1 ? 0 : _0x5E88[_0x5E54[374]](_0x5E88[_0x5E54[375]]++);
            if (_0x5E6E == 0) {
                this[_0x5E54[143]](_0x5E54[547]);
                _0x723C()
            } else {
                if (_0x5E6E == 1) {
                    $(_0x5E54[441])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                }
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[400]] = function(_0x5F8C) {
            var _0x5E6E = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
            var _0x5F3E = $(_0x5E54[548]);
            var _0x5F24 = $(_0x5E54[549]);
            var _0x5F72 = parseInt(_0x5F3E[_0x5E54[139]]());
            _0x5F3E[_0x5E54[508]]();
            _0x5F24[_0x5E54[508]]();
            var _0x5E88 = {};
            while (_0x5E6E > 0) {
                var _0x5ED6 = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                var _0x5F58 = _0x709C(_0x5F8C);
                var _0x5EF0 = _0x709C(_0x5F8C);
                var _0x5EA2 = document[_0x5E54[349]](_0x5E54[550]);
                _0x5EA2[_0x5E54[353]] = _0x5F58;
                _0x5EA2[_0x5E54[138]] = _0x5ED6;
                _0x5F3E[_0x5E54[512]](_0x5EA2);
                _0x5EA2 = document[_0x5E54[349]](_0x5E54[551]);
                _0x5EA2[_0x5E54[353]] = _0x5EF0;
                _0x5EA2[_0x5E54[122]] = _0x5E54[552] + _0x5ED6;
                _0x5EA2[_0x5E54[321]][_0x5E54[14]] = _0x5E54[16];
                _0x5F24[_0x5E54[512]](_0x5EA2);
                _0x5E88[_0x5ED6] = true;
                _0x5E6E--
            };
            _0x7186 = {
                "modes": {},
                "sizes": {},
                "maps": []
            };
            if (_0x5F8C[_0x5E54[540]] - 1 > _0x5F8C[_0x5E54[375]]) {
                _0x5E6E = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                while (_0x5E6E > 0) {
                    var _0x5ED6 = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                    var _0x5F58 = _0x709C(_0x5F8C);
                    _0x7186[_0x5E54[553]][_0x5ED6] = {
                        "id": _0x5ED6,
                        "name": _0x5F58
                    };
                    _0x5E6E--
                };
                _0x5E6E = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                while (_0x5E6E > 0) {
                    var _0x5ED6 = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                    var _0x5F58 = _0x709C(_0x5F8C);
                    _0x7186[_0x5E54[554]][_0x5ED6] = {
                        "id": _0x5ED6,
                        "name": _0x5F58
                    };
                    _0x5E6E--
                };
                _0x5E6E = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                while (_0x5E6E > 0) {
                    var _0x5F58 = _0x709C(_0x5F8C);
                    var _0x5F0A = {
                        "name": _0x5F58,
                        "startmass": 0,
                        "modes": [],
                        "sizes": []
                    };
                    var _0x5EBC = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                    while (_0x5EBC > 0) {
                        _0x5F0A[_0x5E54[553]][_0x5E54[161]](_0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++));
                        _0x5EBC--
                    };
                    var _0x5EBC = _0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++);
                    while (_0x5EBC > 0) {
                        _0x5F0A[_0x5E54[554]][_0x5E54[161]](_0x5F8C[_0x5E54[374]](_0x5F8C[_0x5E54[375]]++));
                        _0x5EBC--
                    };
                    _0x5F0A[_0x5E54[555]] = _0x5F8C[_0x5E54[408]](_0x5F8C[_0x5E54[375]], true);
                    _0x5F8C[_0x5E54[375]] += 2;
                    _0x7186[_0x5E54[556]][_0x5E54[161]](_0x5F0A);
                    _0x5E6E--
                }
            };
            $(_0x5E54[557])[_0x5E54[15]](_0x5E54[14], _0x7186[_0x5E54[556]][_0x5E54[9]] == 0 ? _0x5E54[16] : _0x5E54[18]);
            $(_0x5E54[558])[_0x5E54[508]]();
            for (var _0x5EBC = 0; _0x5EBC < _0x7186[_0x5E54[556]][_0x5E54[9]]; _0x5EBC++) {
                $(_0x5E54[558])[_0x5E54[512]](_0x5E54[559] + _0x5EBC + _0x5E54[560] + _0x7186[_0x5E54[556]][_0x5EBC][_0x5E54[136]] + _0x5E54[561])
            };
            if (_0x5E88[_0x5F72] != null) {
                _0x5F3E[_0x5E54[139]](_0x5F72);
                _0x5F3E[_0x5E54[563]](_0x5E54[562])
            } else {
                _0x5F3E[_0x5E54[565]](_0x5E54[564], 0);
                _0x5F3E[_0x5E54[563]](_0x5E54[562])
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[402]] = function(_0x5ED6) {
            var _0x5EA2 = _0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++);
            switch (_0x5EA2) {
                case _0x6404[_0x5E54[567]]:
                    ScrimmageHelper[_0x5E54[566]](_0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++));
                    break;
                case _0x6404[_0x5E54[569]]:
                    ScrimmageHelper[_0x5E54[568]](_0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++));
                    break;
                case _0x6404[_0x5E54[571]]:
                    ScrimmageHelper[_0x5E54[570]](_0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++));
                    break;
                case _0x6404[_0x5E54[573]]:
                    ScrimmageHelper[_0x5E54[572]](_0x5ED6[_0x5E54[408]](_0x5ED6[_0x5E54[375]], true));
                    _0x5ED6[_0x5E54[375]] += 2;
                    break;
                case _0x6404[_0x5E54[575]]:
                    ScrimmageHelper[_0x5E54[574]](_0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++) == 0 ? true : false);
                    break;
                case _0x6404[_0x5E54[577]]:
                    var _0x5E88 = _0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++);
                    var _0x5EBC = _0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++);
                    _0x6F30[_0x5E54[259]][_0x5E88][_0x5E54[491]] = _0x5EBC;
                    ScrimmageHelper[_0x5E54[576]](_0x5E88);
                    break;
                case _0x6404[_0x5E54[579]]:
                    var _0x5E6E = _0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++);
                    var _0x5E88 = 0;
                    while (_0x5E6E > 0) {
                        _0x6F30[_0x5E54[259]][_0x5E88][_0x5E54[491]] = _0x5ED6[_0x5E54[374]](_0x5ED6[_0x5E54[375]]++);
                        _0x5E6E--;
                        _0x5E88++
                    };
                    ScrimmageHelper[_0x5E54[578]]();
                    break;
                case _0x6404[_0x5E54[581]]:
                    ScrimmageHelper[_0x5E54[580]](_0x5ED6[_0x5E54[408]](_0x5ED6[_0x5E54[375]], true));
                    _0x5ED6[_0x5E54[375]] += 2;
                    break
            }
        };
        _0x62B2[_0x5E54[283]][_0x5E54[401]] = function(_0x5F24) {
            $(_0x5E54[582])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            $(_0x5E54[81])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
            var _0x5EBC = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++);
            var _0x5ED6 = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++);
            var _0x5EF0 = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++);
            var _0x5F0A = _0x5F24[_0x5E54[408]](_0x5F24[_0x5E54[375]], true);
            _0x5F24[_0x5E54[375]] += 2;
            var _0x5F3E = _0x5F24[_0x5E54[408]](_0x5F24[_0x5E54[375]], true);
            _0x5F24[_0x5E54[375]] += 2;
            var _0x5EA2 = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++) == 0 ? true : false;
            var _0x5E6E = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++);
            var _0x5E88 = 0;
            while (_0x5E6E > 0) {
                _0x6F30[_0x5E54[259]][_0x5E88][_0x5E54[491]] = _0x5F24[_0x5E54[374]](_0x5F24[_0x5E54[375]]++);
                _0x5E6E--;
                _0x5E88++
            };
            ScrimmageHelper[_0x5E54[566]](_0x5EBC);
            ScrimmageHelper[_0x5E54[568]](_0x5ED6);
            ScrimmageHelper[_0x5E54[570]](_0x5EF0);
            ScrimmageHelper[_0x5E54[572]](_0x5F0A);
            ScrimmageHelper[_0x5E54[580]](_0x5F3E);
            ScrimmageHelper[_0x5E54[574]](_0x5EA2);
            ScrimmageHelper[_0x5E54[578]]();
            ScrimmageHelper[_0x5E54[493]]()
        };
        _0x62B2[_0x5E54[283]][_0x5E54[363]] = function() {
            $(_0x5E54[81])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            $(_0x5E54[582])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
        };
        ScrimmageHelper = {
            updateMap: function(_0x5E88) {
                $(_0x5E54[584] + _0x5E88 + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                var _0x5EA2 = _0x7186[_0x5E54[556]][_0x5E88];
                $(_0x5E54[586])[_0x5E54[508]]();
                for (var _0x5E6E = 0; _0x5E6E < _0x5EA2[_0x5E54[553]][_0x5E54[9]]; _0x5E6E++) {
                    var _0x5EBC = _0x7186[_0x5E54[553]][_0x5EA2[_0x5E54[553]][_0x5E6E]];
                    $(_0x5E54[586])[_0x5E54[512]](_0x5E54[559] + _0x5E6E + _0x5E54[560] + _0x5EBC[_0x5E54[136]] + _0x5E54[561])
                };
                $(_0x5E54[587])[_0x5E54[508]]();
                for (var _0x5E6E = 0; _0x5E6E < _0x5EA2[_0x5E54[554]][_0x5E54[9]]; _0x5E6E++) {
                    var _0x5ED6 = _0x7186[_0x5E54[554]][_0x5EA2[_0x5E54[554]][_0x5E6E]];
                    $(_0x5E54[587])[_0x5E54[512]](_0x5E54[559] + _0x5E6E + _0x5E54[560] + _0x5ED6[_0x5E54[136]] + _0x5E54[561])
                };
                ScrimmageHelper[_0x5E54[568]](0);
                ScrimmageHelper[_0x5E54[570]](0);
                ScrimmageHelper[_0x5E54[572]](_0x5EA2[_0x5E54[555]]);
                $(_0x5E54[590])[_0x5E54[589]](_0x5E54[588], _0x5EA2[_0x5E54[555]]);
                $(_0x5E54[558])[_0x5E54[589]](_0x5E54[373], _0x5E88)
            },
            updateMode: function(_0x5E6E) {
                $(_0x5E54[591] + _0x5E6E + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                $(_0x5E54[586])[_0x5E54[589]](_0x5E54[373], _0x5E6E)
            },
            updateSize: function(_0x5E6E) {
                $(_0x5E54[592] + _0x5E6E + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                $(_0x5E54[587])[_0x5E54[589]](_0x5E54[373], _0x5E6E)
            },
            updateStartMass: function(_0x5E6E) {
                $(_0x5E54[590])[_0x5E54[139]](_0x5E6E);
                $(_0x5E54[590])[_0x5E54[589]](_0x5E54[373], _0x5E6E)
            },
            updateVirusDensity: function(_0x5E6E) {
                $(_0x5E54[593])[_0x5E54[139]](_0x5E6E);
                $(_0x5E54[593])[_0x5E54[589]](_0x5E54[373], _0x5E6E)
            },
            updateLock: function(_0x5E6E) {
                $(_0x5E54[595])[_0x5E54[565]](_0x5E54[594], _0x5E6E);
                ScrimmageHelper[_0x5E54[596]]()
            },
            checkLock: function() {
                if ($(_0x5E54[595])[_0x5E54[565]](_0x5E54[594]) && !_0x6F30[_0x5E54[369]]()) {
                    $(_0x5E54[598] + _0x6F30[_0x5E54[362]])[_0x5E54[589]](_0x5E54[597], _0x5E54[597])
                } else {
                    $(_0x5E54[598] + _0x6F30[_0x5E54[362]])[_0x5E54[599]](_0x5E54[597])
                }
            },
            checkLeader: function() {
                if (_0x6F30[_0x5E54[369]]()) {
                    $(_0x5E54[600])[_0x5E54[599]](_0x5E54[597])
                } else {
                    $(_0x5E54[600])[_0x5E54[589]](_0x5E54[597], _0x5E54[597]);
                    ScrimmageHelper[_0x5E54[596]]()
                }
            },
            updatePlayerById: function(_0x5E6E) {
                var _0x5E88 = _0x6F30[_0x5E54[259]][_0x5E6E];
                $(_0x5E54[598] + _0x5E6E + _0x5E54[601] + _0x5E88[_0x5E54[491]] + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                $(_0x5E54[602] + _0x5E6E)[_0x5E54[449]](_0x5E88[_0x5E54[136]]);
                $(_0x5E54[602] + _0x5E6E)[_0x5E54[15]](_0x5E54[351], _0x63EA[_0x5E88[_0x5E54[491]]])
            },
            updatePlayers: function() {
                $(_0x5E54[603])[_0x5E54[508]]();
                for (var _0x5E6E = 0; _0x5E6E < _0x6F30[_0x5E54[259]][_0x5E54[9]]; _0x5E6E++) {
                    var _0x5E88 = _0x6F30[_0x5E54[259]][_0x5E6E];
                    if (_0x5E88[_0x5E54[122]] == _0x6F30[_0x5E54[262]]) {
                        _0x6F30[_0x5E54[362]] = _0x5E6E
                    };
                    $(_0x5E54[603])[_0x5E54[512]](_0x5E54[604] + _0x5E6E + _0x5E54[560] + _0x5E88[_0x5E54[136]] + _0x5E54[605] + _0x5E6E + _0x5E54[606]);
                    $(_0x5E54[598] + _0x5E6E + _0x5E54[601] + _0x5E88[_0x5E54[491]] + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                    $(_0x5E54[602] + _0x5E6E)[_0x5E54[15]](_0x5E54[351], _0x63EA[_0x5E88[_0x5E54[491]]]);
                    $(_0x5E54[598] + _0x5E6E)[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                        var _0x5EA2 = parseInt($(this)[_0x5E54[589]](_0x5E54[122])[_0x5E54[608]](_0x5E54[607])[0]);
                        var _0x5EBC = $(this)[_0x5E54[610]](_0x5E54[609])[_0x5E54[139]]();
                        $(_0x5E54[598] + _0x5E6E + _0x5E54[601] + $(this)[_0x5E54[589]](_0x5E54[373]) + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                        if (_0x6F30[_0x5E54[259]][_0x5EA2][_0x5E54[122]] == _0x6F30[_0x5E54[262]]) {
                            _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[611]], 0, _0x5EBC))
                        } else {
                            _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[577]], _0x5EA2, _0x5EBC))
                        }
                    })
                };
                ScrimmageHelper[_0x5E54[493]]()
            }
        };
        
        function _0x60AA(_0x5E6E) {
            this[_0x5E54[122]] = _0x5E6E;
            this[_0x5E54[431]] = 0;
            this[_0x5E54[613]] = null;
            this[_0x5E54[416]] = null;
            this[_0x5E54[262]] = 0;
            this[_0x5E54[351]] = null;
            this[_0x5E54[193]] = 0;
            this[_0x5E54[196]] = 0;
            this[_0x5E54[264]] = 0;
            this[_0x5E54[265]] = 0;
            this[_0x5E54[208]] = 0;
            this[_0x5E54[429]] = 0;
            this[_0x5E54[202]] = 0;
            this[_0x5E54[614]] = -1;
            this[_0x5E54[490]] = null
        }
        _0x60AA[_0x5E54[283]][_0x5E54[419]] = function(_0x5E6E) {
            this[_0x5E54[431]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[421]] = function(_0x5E6E) {
            this[_0x5E54[264]] = _0x5E6E;
            this[_0x5E54[193]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[422]] = function(_0x5E6E) {
            this[_0x5E54[265]] = _0x5E6E;
            this[_0x5E54[196]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[427]] = function(_0x5E6E) {
            this[_0x5E54[264]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[428]] = function(_0x5E6E) {
            this[_0x5E54[265]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[423]] = function(_0x5E6E) {
            this[_0x5E54[429]] = _0x5E6E;
            this[_0x5E54[208]] = _0x5E6E
        };
        _0x60AA[_0x5E54[283]][_0x5E54[615]] = function() {
            return (this[_0x5E54[208]] * this[_0x5E54[208]]) / 100 >> 0
        };
        _0x60AA[_0x5E54[283]][_0x5E54[527]] = function() {
            return (this[_0x5E54[429]] * this[_0x5E54[429]]) / 100 >> 0
        };
        _0x60AA[_0x5E54[283]][_0x5E54[203]] = function(_0x5E6E) {
            this[_0x5E54[193]] += Math[_0x5E54[616]]((this[_0x5E54[264]] - this[_0x5E54[193]]) * _0x5E6E);
            this[_0x5E54[196]] += Math[_0x5E54[616]]((this[_0x5E54[265]] - this[_0x5E54[196]]) * _0x5E6E);
            this[_0x5E54[208]] += Math[_0x5E54[616]]((this[_0x5E54[429]] - this[_0x5E54[208]]) * _0x5E6E);
            this[_0x5E54[202]]--
        };
        _0x60AA[_0x5E54[283]][_0x5E54[617]] = function() {
            var _0x5EF0 = this[_0x5E54[615]]();
            if (_0x5EF0 != this[_0x5E54[614]] || this[_0x5E54[614]] < 0) {
                var _0x5F0A = _0x5EF0[_0x5E54[618]]();
                var _0x5F3E = 0;
                var _0x5EA2 = 0;
                for (var _0x5EBC = 0; _0x5EBC < _0x5F0A[_0x5E54[9]]; _0x5EBC++) {
                    var _0x5E6E = _0x5F0A[_0x5E54[197]](_0x5EBC);
                    var _0x5ED6 = _0x738E[_0x5E54[619]](_0x5E6E);
                    _0x5F3E += _0x5ED6[_0x5E54[187]] - 2;
                    _0x5EA2 = Math[_0x5E54[214]](_0x5ED6[_0x5E54[190]], _0x5EA2)
                };
                if (this[_0x5E54[490]] == null) {
                    this[_0x5E54[490]] = _0x6EE2[_0x5E54[621]][_0x5E54[620]](_0x5F3E, _0x5EA2)
                } else {
                    if (_0x5F3E != this[_0x5E54[490]][_0x5E54[187]] || _0x5EA2 != this[_0x5E54[490]][_0x5E54[190]]) {
                        this[_0x5E54[490]][_0x5E54[240]]({
                            children: true,
                            texture: true,
                            baseTexture: true
                        });
                        this[_0x5E54[490]] = _0x6EE2[_0x5E54[621]][_0x5E54[620]](_0x5F3E, _0x5EA2)
                    }
                };
                var _0x5E88 = _0x738E[_0x5E54[622]];
                var _0x5F24 = 0;
                for (var _0x5EBC = 0; _0x5EBC < _0x5F0A[_0x5E54[9]]; _0x5EBC++) {
                    var _0x5E6E = _0x5F0A[_0x5E54[197]](_0x5EBC);
                    var _0x5ED6 = _0x738E[_0x5E54[623]]();
                    _0x5ED6[_0x5E54[624]] = _0x738E[_0x5E54[619]](_0x5E6E)[_0x5E54[624]];
                    _0x5ED6[_0x5E54[194]][_0x5E54[193]] = _0x5F24;
                    _0x5E88[_0x5E54[28]](_0x5ED6);
                    _0x5F24 += _0x5ED6[_0x5E54[187]] - 2
                };
                _0x6EFC[_0x5E54[192]][_0x5E54[229]](_0x5E88, this[_0x5E54[490]], true);
                _0x738E[_0x5E54[625]]();
                this[_0x5E54[614]] = _0x5EF0
            };
            return this[_0x5E54[490]]
        };
        
        function _0x7374() {
            this[_0x5E54[490]] = {};
            this[_0x5E54[622]] = new _0x6EE2[_0x5E54[24]]();
            this[_0x5E54[626]] = [];
            this[_0x5E54[627]] = 0;
            this[_0x5E54[619]] = function(_0x5E6E) {
                return this[_0x5E54[490]][_0x5E6E]
            };
            this[_0x5E54[625]] = function() {
                while (this[_0x5E54[622]][_0x5E54[21]][0]) {
                    this[_0x5E54[622]][_0x5E54[238]](this[_0x5E54[622]][_0x5E54[21]][0])
                };
                this[_0x5E54[627]] = 0
            };
            this[_0x5E54[623]] = function() {
                while (this[_0x5E54[627]] >= this[_0x5E54[626]][_0x5E54[9]]) {
                    this[_0x5E54[626]][_0x5E54[161]](new _0x6EE2[_0x5E54[27]]())
                };
                return this[_0x5E54[626]][this[_0x5E54[627]]++]
            };
            this[_0x5E54[628]] = function() {
                for (var _0x5E6E = 0; _0x5E6E <= 9; _0x5E6E++) {
                    var _0x5E88 = new _0x6EE2[_0x5E54[634]](_0x5E6E, {
                        fontFamily: _0x5E54[629],
                        fontWeight: _0x5E54[630],
                        fontSize: 54,
                        fill: _0x5E54[631],
                        stroke: _0x5E54[632],
                        strokeThickness: _0x6D5C[_0x5E54[633]]
                    });
                    this[_0x5E54[490]][_0x5E6E[_0x5E54[618]]()] = _0x5E88
                }
            }
        }
        const _0x738E = new _0x7374();
        _0x60AA[_0x5E54[283]][_0x5E54[204]] = function() {
            if (this[_0x5E54[635]]) {
                while (this[_0x5E54[636]][_0x5E54[21]][0]) {
                    var _0x5E6E = this[_0x5E54[636]][_0x5E54[21]][0];
                    this[_0x5E54[636]][_0x5E54[238]](_0x5E6E);
                    _0x5E6E[_0x5E54[240]]()
                };
                var _0x5E88 = new _0x6EE2[_0x5E54[241]]();
                if (_0x6D42[_0x5E54[637]] && _0x63D0[_0x5E54[9]] > 0) {
                    _0x5E88[_0x5E54[638]](_0x672A(this[_0x5E54[122]]))
                } else {
                    _0x5E88[_0x5E54[638]](this[_0x5E54[351]])
                };
                _0x5E88[_0x5E54[639]](0, 0, 1);
                _0x5E88[_0x5E54[640]]();
                _0x5E88[_0x5E54[218]][_0x5E54[641]](12);
                this[_0x5E54[636]][_0x5E54[28]](_0x5E88);
                this[_0x5E54[635]] = false
            };
            this[_0x5E54[636]][_0x5E54[251]] = !_0x6D42[_0x5E54[642]];
            this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]])
        };
        _0x60AA[_0x5E54[283]][_0x5E54[643]] = function(_0x5E6E) {
            if (_0x5E6E[_0x5E54[644]] == 1) {
                if (this[_0x5E54[645]] == null) {
                    this[_0x5E54[645]] = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
                    this[_0x5E54[645]][_0x5E54[646]][_0x5E54[641]](0.5);
                    this[_0x5E54[645]][_0x5E54[187]] = _0x60C4;
                    this[_0x5E54[645]][_0x5E54[190]] = _0x60C4;
                    this[_0x5E54[636]][_0x5E54[647]](this[_0x5E54[645]], 0)
                };
                this[_0x5E54[648]][_0x5E54[251]] = false;
                if (_0x63B6[_0x5E54[649]]) {
                    this[_0x5E54[645]][_0x5E54[624]] = _0x63B6[_0x5E54[649]]
                } else {
                    this[_0x5E54[645]][_0x5E54[624]] = _0x742A
                };
                this[_0x5E54[645]][_0x5E54[251]] = true
            } else {
                if (_0x5E6E[_0x5E54[644]] == 2) {
                    if (this[_0x5E54[645]] == null) {
                        this[_0x5E54[645]] = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
                        this[_0x5E54[645]][_0x5E54[646]][_0x5E54[641]](0.5);
                        this[_0x5E54[645]][_0x5E54[187]] = _0x60C4;
                        this[_0x5E54[645]][_0x5E54[190]] = _0x60C4;
                        this[_0x5E54[636]][_0x5E54[647]](this[_0x5E54[645]], 0)
                    };
                    this[_0x5E54[648]][_0x5E54[251]] = false;
                    if (_0x63B6[_0x5E54[650]]) {
                        this[_0x5E54[645]][_0x5E54[624]] = _0x63B6[_0x5E54[650]]
                    } else {
                        this[_0x5E54[645]][_0x5E54[624]] = _0x7444
                    };
                    this[_0x5E54[645]][_0x5E54[251]] = true
                } else {
                    this[_0x5E54[648]][_0x5E54[251]] = true;
                    if (this[_0x5E54[645]]) {
                        this[_0x5E54[645]][_0x5E54[251]] = false
                    }
                }
            }
        };
        _0x60AA[_0x5E54[283]][_0x5E54[206]] = function() {
            switch (this[_0x5E54[431]]) {
                case 0:
                    break;
                case 1:
                    if (this[_0x5E54[635]]) {
                        if (this[_0x5E54[416]] >= 0 && this[_0x5E54[416]] < _0x6556[_0x5E54[9]] && _0x6556[this[_0x5E54[416]]][_0x5E54[651]] > 0) {
                            this[_0x5E54[652]] = this[_0x5E54[416]] + _0x5E54[2] + this[_0x5E54[351]];
                            this[_0x5E54[653]] = new _0x6EE2[_0x5E54[27]](_0x6508[_0x5E54[654]](this));
                            this[_0x5E54[653]][_0x5E54[646]][_0x5E54[641]](0.5);
                            this[_0x5E54[653]][_0x5E54[187]] = this[_0x5E54[208]] * 2;
                            this[_0x5E54[653]][_0x5E54[190]] = this[_0x5E54[208]] * 2;
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[653]])
                        } else {
                            var _0x5E6E = new _0x6EE2[_0x5E54[241]]();
                            _0x5E6E[_0x5E54[638]](this[_0x5E54[351]]);
                            _0x5E6E[_0x5E54[639]](0, 0, 8);
                            _0x5E6E[_0x5E54[640]]();
                            _0x5E6E[_0x5E54[218]][_0x5E54[641]](this[_0x5E54[208]] / 8);
                            this[_0x5E54[636]][_0x5E54[28]](_0x5E6E)
                        };
                        this[_0x5E54[635]] = false
                    };
                    this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]]);
                    break;
                case 2:
                    var _0x5EBC = _0x6F30[_0x5E54[235]][_0x5E54[655]](this[_0x5E54[262]]);
                    var _0x5ED6 = _0x6F7E[_0x5E54[47]];
                    if (_0x6F30[_0x5E54[262]] == this[_0x5E54[262]]) {
                        _0x5ED6 = _0x6F7E[_0x5E54[656]]
                    } else {
                        if (_0x6F30[_0x5E54[276]][this[_0x5E54[262]]] != null) {
                            _0x5ED6 = _0x6F7E[_0x5E54[467]]
                        }
                    };
                    if (this[_0x5E54[635]]) {
                        _0x5E6E = new _0x6EE2[_0x5E54[241]]();
                        _0x5E6E[_0x5E54[638]](_0x5EBC[_0x5E54[410]]);
                        _0x5E6E[_0x5E54[639]](0, 0, _0x60F8);
                        _0x5E6E[_0x5E54[640]]();
                        this[_0x5E54[636]][_0x5E54[28]](_0x5E6E);
                        this[_0x5E54[648]] = _0x5E6E;
                        this[_0x5E54[657]] = new _0x6EE2[_0x5E54[24]]();
                        this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[657]]);
                        this[_0x5E54[658]] = true;
                        this[_0x5E54[659]] = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
                        this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[659]]);
                        if (_0x5EBC[_0x5E54[136]][_0x5E54[9]] > 0) {
                            var _0x5EA2 = _0x5EBC[_0x5E54[661]](_0x5EBC[_0x5E54[660]]);
                            this[_0x5E54[662]] = new _0x6EE2[_0x5E54[27]](_0x5EA2[_0x5E54[624]]);
                            this[_0x5E54[662]][_0x5E54[251]] = false;
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[662]]);
                            this[_0x5E54[663]] = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
                            this[_0x5E54[662]][_0x5E54[28]](this[_0x5E54[663]])
                        };
                        this[_0x5E54[643]](_0x5EBC);
                        this[_0x5E54[635]] = false
                    };
                    this[_0x5E54[657]][_0x5E54[251]] = _0x6D5C[_0x5E54[664]] >= _0x5ED6 && _0x5EBC[_0x5E54[644]] == 0;
                    if (this[_0x5E54[657]][_0x5E54[251]]) {
                        var _0x5F24 = _0x5EBC[_0x5E54[654]]();
                        if (_0x5F24 != null) {
                            if (this[_0x5E54[658]]) {
                                this[_0x5E54[665]] = new _0x6EE2[_0x5E54[27]](_0x6EE2[_0x5E54[26]][_0x5E54[25]]);
                                this[_0x5E54[665]][_0x5E54[646]][_0x5E54[641]](0.5);
                                this[_0x5E54[665]][_0x5E54[187]] = _0x60C4;
                                this[_0x5E54[665]][_0x5E54[190]] = _0x60C4;
                                this[_0x5E54[657]][_0x5E54[28]](this[_0x5E54[665]]);
                                this[_0x5E54[658]] = false
                            };
                            if (!_0x5F24[_0x5E54[666]]) {
                                if (_0x5F24 !== this[_0x5E54[665]][_0x5E54[624]]) {
                                    this[_0x5E54[665]][_0x5E54[624]] = _0x5F24
                                }
                            } else {
                                this[_0x5E54[665]][_0x5E54[624]] = _0x5F24[_0x5E54[667]]()
                            }
                        }
                    };
                    if (_0x5EBC[_0x5E54[660]]) {
                        if (this[_0x5E54[662]]) {
                            this[_0x5E54[662]][_0x5E54[624]] = _0x5EBC[_0x5E54[661]](_0x5EBC[_0x5E54[660]])[_0x5E54[624]];
                            this[_0x5E54[662]][_0x5E54[624]][_0x5E54[227]]()
                        };
                        this[_0x5E54[643]](_0x5EBC)
                    };
                    var _0x5EF0 = 16 / this[_0x5E54[208]];
                    var _0x5F3E = Math[_0x5E54[214]](_0x5EF0, 0.16);
                    var _0x5F0A = _0x6F30[_0x5E54[218]] >= _0x5EF0 || _0x6D42[_0x5E54[668]];
                    if (this[_0x5E54[662]]) {
                        this[_0x5E54[662]][_0x5E54[251]] = _0x6D5C[_0x5E54[669]] >= _0x5ED6 && _0x5F0A;
                        if (this[_0x5E54[662]][_0x5E54[251]]) {
                            this[_0x5E54[662]][_0x5E54[218]][_0x5E54[641]](_0x5F3E);
                            this[_0x5E54[662]][_0x5E54[193]] = -Math[_0x5E54[233]](this[_0x5E54[662]][_0x5E54[187]] / 2);
                            if (!_0x5EBC[_0x5E54[670]]) {
                                this[_0x5E54[662]][_0x5E54[196]] = -Math[_0x5E54[233]](this[_0x5E54[662]][_0x5E54[190]] / 2)
                            } else {
                                this[_0x5E54[662]][_0x5E54[196]] = _0x6112 - Math[_0x5E54[233]](this[_0x5E54[662]][_0x5E54[190]] / 2)
                            };
                            if (_0x5EBC[_0x5E54[671]] == 1 && _0x6CC0[0] != null) {
                                var _0x5F58 = _0x6CC0[0][_0x5E54[667]]();
                                this[_0x5E54[663]][_0x5E54[218]][_0x5E54[641]](this[_0x5E54[662]][_0x5E54[624]][_0x5E54[187]] / _0x5F58[_0x5E54[187]], this[_0x5E54[662]][_0x5E54[624]][_0x5E54[190]] / _0x5F58[_0x5E54[190]]);
                                this[_0x5E54[663]][_0x5E54[624]] = _0x5F58
                            }
                        }
                    };
                    if (_0x6D42[_0x5E54[672]] && _0x5ED6 <= _0x6F7E[_0x5E54[467]] && _0x5F0A) {
                        var _0x5E88 = this[_0x5E54[617]]();
                        this[_0x5E54[659]][_0x5E54[624]] = _0x5E88;
                        this[_0x5E54[659]][_0x5E54[218]][_0x5E54[641]](_0x5F3E);
                        this[_0x5E54[659]][_0x5E54[193]] = -Math[_0x5E54[233]](this[_0x5E54[659]][_0x5E54[187]] / 2);
                        if (this[_0x5E54[662]] != null) {
                            this[_0x5E54[659]][_0x5E54[196]] = this[_0x5E54[662]][_0x5E54[196]] + Math[_0x5E54[233]](this[_0x5E54[659]][_0x5E54[190]] / 1.2)
                        } else {
                            this[_0x5E54[659]][_0x5E54[196]] = -Math[_0x5E54[233]](this[_0x5E54[659]][_0x5E54[190]] / 1.2)
                        };
                        this[_0x5E54[659]][_0x5E54[251]] = true
                    } else {
                        this[_0x5E54[659]][_0x5E54[251]] = false
                    };
                    if ((_0x5EBC[_0x5E54[412]] & 4) == 4) {
                        if (!this[_0x5E54[673]]) {
                            this[_0x5E54[673]] = new _0x6EE2[_0x5E54[27]](_0x6FB2);
                            this[_0x5E54[673]][_0x5E54[646]][_0x5E54[641]](0.5);
                            this[_0x5E54[673]][_0x5E54[187]] = _0x60DE;
                            this[_0x5E54[673]][_0x5E54[190]] = _0x60DE;
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[673]])
                        }
                    } else {
                        if (this[_0x5E54[673]]) {
                            this[_0x5E54[673]][_0x5E54[239]][_0x5E54[238]](this[_0x5E54[673]]);
                            this[_0x5E54[673]][_0x5E54[240]]();
                            this[_0x5E54[673]] = null
                        }
                    };
                    if ((_0x5EBC[_0x5E54[412]] & 1) == 1) {
                        if (!this[_0x5E54[674]]) {
                            this[_0x5E54[674]] = new _0x6EE2[_0x5E54[27]](_0x6FCC);
                            this[_0x5E54[674]][_0x5E54[646]][_0x5E54[641]](0.5);
                            this[_0x5E54[674]][_0x5E54[187]] = _0x60DE;
                            this[_0x5E54[674]][_0x5E54[190]] = _0x60DE;
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[674]])
                        }
                    } else {
                        if (this[_0x5E54[674]]) {
                            this[_0x5E54[674]][_0x5E54[239]][_0x5E54[238]](this[_0x5E54[674]]);
                            this[_0x5E54[674]][_0x5E54[240]]();
                            this[_0x5E54[674]] = null
                        }
                    };
                    this[_0x5E54[636]][_0x5E54[218]][_0x5E54[641]](this[_0x5E54[208]] / _0x60F8);
                    this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]]);
                    break;
                case 3:
                    if (this[_0x5E54[635]]) {
                        if (!this[_0x5E54[675]]) {
                            this[_0x5E54[675]] = new _0x6EE2[_0x5E54[27]]();
                            this[_0x5E54[675]][_0x5E54[646]][_0x5E54[641]](0.5);
                            this[_0x5E54[675]][_0x5E54[187]] = 128;
                            this[_0x5E54[675]][_0x5E54[190]] = 128;
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[675]])
                        };
                        if (_0x63B6[_0x5E54[649]]) {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x63B6[_0x5E54[649]]
                        } else {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x742A
                        };
                        this[_0x5E54[635]] = false
                    };
                    this[_0x5E54[636]][_0x5E54[218]][_0x5E54[641]](this[_0x5E54[208]] / 64);
                    this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]]);
                    break;
                case 4:
                    if (this[_0x5E54[635]]) {
                        if (!this[_0x5E54[675]]) {
                            this[_0x5E54[675]] = new _0x6EE2[_0x5E54[27]]();
                            this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[675]])
                        };
                        if (_0x63B6[_0x5E54[650]]) {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x63B6[_0x5E54[650]]
                        } else {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x7444
                        };
                        if (_0x658A[_0x5E54[35]] && _0x658A[_0x5E54[676]] && !_0x6D42[_0x5E54[177]] && !_0x63B6[_0x5E54[650]]) {
                            _0x658A[_0x5E54[677]](this)
                        } else {
                            this[_0x5E54[678]]()
                        };
                        this[_0x5E54[635]] = false
                    };
                    if (!_0x63B6[_0x5E54[650]] && _0x658A[_0x5E54[35]]) {
                        if (this[_0x5E54[208]] >= 200 && !_0x6D42[_0x5E54[177]]) {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x745E
                        } else {
                            this[_0x5E54[675]][_0x5E54[624]] = _0x7444
                        }
                    };
                    this[_0x5E54[636]][_0x5E54[218]][_0x5E54[641]](this[_0x5E54[208]] / 64);
                    this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]]);
                    break;
                case 5:
                    if (this[_0x5E54[635]]) {
                        this[_0x5E54[675]] = new _0x6EE2[_0x5E54[27]](_0x7000[this[_0x5E54[425]]][_0x5E54[624]]);
                        this[_0x5E54[675]][_0x5E54[646]][_0x5E54[641]](0.5);
                        this[_0x5E54[675]][_0x5E54[187]] = this[_0x5E54[208]] * 2;
                        this[_0x5E54[675]][_0x5E54[190]] = this[_0x5E54[208]] * 2;
                        this[_0x5E54[636]][_0x5E54[28]](this[_0x5E54[675]]);
                        this[_0x5E54[635]] = false
                    };
                    this[_0x5E54[636]][_0x5E54[194]][_0x5E54[641]](this[_0x5E54[193]], this[_0x5E54[196]]);
                    break
            }
        };
        _0x60AA[_0x5E54[283]][_0x5E54[678]] = function() {
            this[_0x5E54[675]][_0x5E54[646]][_0x5E54[641]](0.5);
            this[_0x5E54[675]][_0x5E54[187]] = 128;
            this[_0x5E54[675]][_0x5E54[190]] = 128
        };
        _0x60AA[_0x5E54[283]][_0x5E54[426]] = function() {
            if (!this[_0x5E54[636]]) {
                this[_0x5E54[636]] = new _0x6EE2[_0x5E54[24]]();
                this[_0x5E54[636]][_0x5E54[525]] = this;
                this[_0x5E54[635]] = true;
                if (this[_0x5E54[431]] != 0) {
                    _0x612C[_0x5E54[28]](this[_0x5E54[636]])
                } else {
                    _0x65D8[_0x5E54[28]](this[_0x5E54[636]])
                }
            }
        };
        _0x60AA[_0x5E54[283]][_0x5E54[327]] = function() {
            _0x6508[_0x5E54[327]](this);
            if (this[_0x5E54[636]]) {
                this[_0x5E54[636]][_0x5E54[239]][_0x5E54[238]](this[_0x5E54[636]]);
                this[_0x5E54[636]][_0x5E54[525]] = null;
                this[_0x5E54[636]][_0x5E54[240]]({
                    children: true
                });
                this[_0x5E54[636]] = null
            };
            if (this[_0x5E54[490]]) {
                this[_0x5E54[490]][_0x5E54[240]]();
                this[_0x5E54[490]] = null
            }
        };
        
        function _0x6F64() {
            this[_0x5E54[205]] = {};
            this[_0x5E54[679]];
            this[_0x5E54[680]] = [];
            this[_0x5E54[168]] = function() {
                this[_0x5E54[679]] = new _0x6F4A(0);
                this[_0x5E54[679]][_0x5E54[136]] = _0x5E54[1];
                this[_0x5E54[679]][_0x5E54[410]] = 0xaaaaaa
            };
            this[_0x5E54[417]] = function(_0x5E6E) {
                this[_0x5E54[205]][_0x5E6E[_0x5E54[122]]] = _0x5E6E
            };
            this[_0x5E54[430]] = function(_0x5E6E) {
                this[_0x5E54[205]][_0x5E6E][_0x5E54[327]]();
                delete this[_0x5E54[205]][_0x5E6E]
            };
            this[_0x5E54[328]] = function() {
                for (var _0x5E6E in this[_0x5E54[205]]) {
                    this[_0x5E54[430]](_0x5E6E)
                }
            };
            this[_0x5E54[409]] = function(_0x5E6E) {
                return this[_0x5E54[205]][_0x5E6E]
            };
            this[_0x5E54[655]] = function(_0x5E88) {
                var _0x5E6E = this[_0x5E54[205]][_0x5E88];
                return _0x5E6E != null ? _0x5E6E : this[_0x5E54[679]]
            };
            this[_0x5E54[418]] = function(_0x5E6E) {
                _0x5E6E[_0x5E54[660]] = true;
                this[_0x5E54[680]][_0x5E54[161]](_0x5E6E)
            };
            this[_0x5E54[234]] = function() {
                while (this[_0x5E54[680]][_0x5E54[9]] > 0) {
                    var _0x5E6E = this[_0x5E54[680]][_0x5E54[681]]();
                    _0x5E6E[_0x5E54[660]] = false
                }
            };
            this[_0x5E54[168]]()
        }
        
        function _0x6F4A(_0x5E6E) {
            this[_0x5E54[122]] = _0x5E6E;
            this[_0x5E54[136]];
            this[_0x5E54[416]];
            this[_0x5E54[682]];
            this[_0x5E54[410]];
            this[_0x5E54[413]] = _0x5E54[631];
            this[_0x5E54[412]] = 0;
            this[_0x5E54[671]] = 0;
            this[_0x5E54[670]] = false;
            this[_0x5E54[613]] = null;
            this[_0x5E54[660]] = false;
            this[_0x5E54[644]] = 0;
            this[_0x5E54[411]] = function(_0x5E6E) {
                this[_0x5E54[412]] = _0x5E6E;
                if ((this[_0x5E54[412]] & 8) == 8) {
                    this[_0x5E54[644]] = 1
                } else {
                    if ((this[_0x5E54[412]] & 16) == 16) {
                        this[_0x5E54[644]] = 2
                    } else {
                        this[_0x5E54[644]] = 0
                    }
                }
            };
            this[_0x5E54[414]] = function(_0x5E6E) {
                if (_0x5E6E >= 64) {
                    _0x5E6E -= 64;
                    this[_0x5E54[670]] = true
                } else {
                    this[_0x5E54[670]] = false
                };
                this[_0x5E54[671]] = _0x5E6E
            };
            this[_0x5E54[661]] = function(_0x5E6E) {
                if (_0x5E6E || this[_0x5E54[613]] == null) {
                    if (!this[_0x5E54[613]]) {
                        this[_0x5E54[613]] = new _0x6EE2[_0x5E54[634]](this[_0x5E54[136]], {
                            fontFamily: _0x5E54[629],
                            fontWeight: _0x5E54[630],
                            fontSize: 54,
                            fill: this[_0x5E54[413]],
                            stroke: _0x5E54[632],
                            strokeThickness: _0x6D5C[_0x5E54[633]]
                        })
                    } else {
                        this[_0x5E54[613]][_0x5E54[449]] = this[_0x5E54[136]];
                        this[_0x5E54[613]][_0x5E54[321]][_0x5E54[683]] = this[_0x5E54[413]];
                        this[_0x5E54[613]][_0x5E54[684]]()
                    };
                    this[_0x5E54[613]][_0x5E54[187]]
                };
                return this[_0x5E54[613]]
            };
            this[_0x5E54[415]] = function(_0x5EA2, _0x5E88) {
                if (_0x5EA2[_0x5E54[9]] == 0) {
                    return null
                };
                var _0x5ED6 = _0x5EA2[_0x5E54[685]](_0x5E54[471]);
                if (_0x5ED6 != -1) {
                    var _0x5E6E = _0x5EA2[_0x5E54[685]](_0x5E54[546], _0x5ED6);
                    if (_0x5E6E != -1) {
                        _0x5EA2 = _0x5EA2[_0x5E54[686]](_0x5ED6 + 1, _0x5E6E)
                    }
                };
                var _0x5EBC = _0x5EA2[_0x5E54[134]]();
                if (!_0x5E88) {
                    _0x5EBC = _0x5EBC[_0x5E54[687]](/#/g, _0x5E54[1])
                };
                if (_0x5EBC[_0x5E54[9]] != 0 && _0x5EBC != this[_0x5E54[416]]) {
                    this[_0x5E54[416]] = _0x5EBC;
                    this[_0x5E54[682]] = null
                }
            };
            this[_0x5E54[654]] = function() {
                if (this[_0x5E54[682]] != null) {
                    return this[_0x5E54[682]]
                };
                if (this[_0x5E54[416]] != null) {
                    if (_0x73DC[this[_0x5E54[416]]] != null || this[_0x5E54[416]][_0x5E54[197]](0) == _0x5E54[13]) {
                        if (!(_0x73DC[this[_0x5E54[416]]] > _0x73F6[_0x5E54[166]])) {
                            _0x73DC[this[_0x5E54[416]]] = _0x73F6[_0x5E54[688]];
                            if (this[_0x5E54[416]][_0x5E54[197]](0) == _0x5E54[13]) {
                                var _0x5EA2 = this[_0x5E54[416]];
                                var _0x5E6E = this;
                                gifFrames({
                                    url: _0x5E54[691] + _0x5EA2[_0x5E54[686]](1) + _0x5E54[692],
                                    frames: _0x5E54[359],
                                    cumulative: false,
                                    outputType: _0x5E54[68]
                                })[_0x5E54[346]](function(_0x5E6E) {
                                    var _0x5E88 = new _0x6778();
                                    _0x5E88[_0x5E54[689]](_0x5E6E);
                                    _0x73DC[_0x5EA2] = _0x73F6[_0x5E54[690]];
                                    _0x73A8[_0x5EA2] = _0x5E88
                                })[_0x5E54[344]](function(_0x5E88) {
                                    _0x5E6E[_0x5E54[416]] = null
                                });
                                console[_0x5E54[184]](this[_0x5E54[416]])
                            } else {
                                var _0x5E88 = new Image();
                                _0x5E88[_0x5E54[693]] = _0x5E54[1];
                                var _0x5EA2 = this[_0x5E54[416]];
                                _0x5E88[_0x5E54[130]](_0x5E54[694], function() {
                                    var _0x5E6E = document[_0x5E54[349]](_0x5E54[68]);
                                    _0x5E6E[_0x5E54[187]] = 512;
                                    _0x5E6E[_0x5E54[190]] = 512;
                                    var _0x5EBC = _0x5E6E[_0x5E54[72]](_0x5E54[71]);
                                    _0x5EBC[_0x5E54[695]]();
                                    _0x5EBC[_0x5E54[696]](256, 256, 256, 0, _0x6EAE, false);
                                    _0x5EBC[_0x5E54[697]]();
                                    _0x5EBC[_0x5E54[698]]();
                                    _0x5EBC[_0x5E54[699]](_0x5E88, 0, 0, 512, 512);
                                    var _0x5ED6 = _0x6EE2[_0x5E54[26]][_0x5E54[700]](_0x5E6E);
                                    _0x73DC[_0x5EA2] = _0x73F6[_0x5E54[690]];
                                    _0x73A8[_0x5EA2] = _0x5ED6
                                });
                                _0x5E88[_0x5E54[130]](_0x5E54[11], function() {
                                    delete _0x73DC[_0x5EA2]
                                });
                                _0x5E88[_0x5E54[701]] = _0x5E54[702] + this[_0x5E54[416]] + _0x5E54[703]
                            }
                        } else {
                            if (_0x73DC[this[_0x5E54[416]]] == _0x73F6[_0x5E54[690]]) {
                                this[_0x5E54[682]] = _0x73A8[this[_0x5E54[416]]];
                                return this[_0x5E54[682]]
                            }
                        }
                    } else {
                        this[_0x5E54[416]] = null
                    }
                };
                return null
            };
            this[_0x5E54[327]] = function() {
                if (this[_0x5E54[613]]) {
                    this[_0x5E54[613]][_0x5E54[240]]()
                }
            }
        }
        
        function _0x6522() {
            this[_0x5E54[205]] = {};
            this[_0x5E54[654]] = function(_0x5E6E) {
                if (!_0x5E6E[_0x5E54[652]]) {
                    return
                };
                if (this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]] == null) {
                    this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]] = {
                        count: 1,
                        cache: this[_0x5E54[704]](_0x5E6E)
                    }
                } else {
                    this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]][_0x5E54[705]] = this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]][_0x5E54[705]] + 1
                };
                return this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]][_0x5E54[490]]
            };
            this[_0x5E54[327]] = function(_0x5E6E) {
                if (_0x5E6E[_0x5E54[653]]) {
                    _0x5E6E[_0x5E54[653]][_0x5E54[624]] = _0x6EE2[_0x5E54[26]][_0x5E54[25]];
                    if (this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]] != null) {
                        var _0x5E88 = this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]];
                        _0x5E88[_0x5E54[705]] = _0x5E88[_0x5E54[705]] - 1;
                        if (_0x5E88[_0x5E54[705]] <= 0) {
                            delete this[_0x5E54[205]][_0x5E6E[_0x5E54[652]]];
                            _0x5E88[_0x5E54[490]][_0x5E54[240]]()
                        }
                    }
                }
            };
            this[_0x5E54[704]] = function(_0x5EBC, _0x5ED6) {
                var _0x5E6E = document[_0x5E54[349]](_0x5E54[68]);
                var _0x5EA2 = _0x5E6E[_0x5E54[72]](_0x5E54[71]);
                _0x5E6E[_0x5E54[187]] = 32;
                _0x5E6E[_0x5E54[190]] = 32;
                _0x5EA2[_0x5E54[699]](_0x6556[_0x5EBC[_0x5E54[416]]], 0, 0, 32, 32);
                _0x5EA2[_0x5E54[706]] = _0x5E54[707];
                _0x5EA2[_0x5E54[452]] = _0x5EBC[_0x5E54[424]];
                _0x5EA2[_0x5E54[708]](0, 0, 32, 32);
                _0x5EA2[_0x5E54[683]]();
                var _0x5E88 = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E6E);
                _0x5E88[_0x5E54[710]] = true;
                _0x5E88[_0x5E54[187]];
                return _0x5E88
            }
        }
        const _0x6508 = new _0x6522();
        
        function _0x6DAA() {}
        _0x6DAA[_0x5E54[283]][_0x5E54[342]] = function() {
            var _0x5E88 = _0x5E54[711] + version;
            var _0x5E6E = new ArrayBuffer(1 + _0x5E88[_0x5E54[9]] + 1 + 1);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 255);
            _0x5EA2[_0x5E54[712]](1, 6);
            _0x7680(2, _0x5EA2, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[291]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 1 + ((_0x5E88[_0x5E54[9]] + 1) * 2));
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 0);
            _0x7666(1, _0x5EA2, _0x5E88);
            if (_0x6D42[_0x5E54[713]]) {
                _0x5EA2[_0x5E54[712]](2 + (_0x5E88[_0x5E54[9]] * 2) + 1, 1)
            };
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[224]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[222]] = function(_0x5EA2, _0x5EBC) {
            var _0x5E6E = new ArrayBuffer(9);
            var _0x5E88 = new DataView(_0x5E6E);
            _0x5E88[_0x5E54[712]](0, 16);
            _0x5E88[_0x5E54[714]](1, _0x5EA2, true);
            _0x5E88[_0x5E54[714]](5, _0x5EBC, true);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[282]] = function() {
            var _0x5E6E = new ArrayBuffer(1);
            var _0x5E88 = new DataView(_0x5E6E);
            _0x5E88[_0x5E54[712]](0, 71);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[299]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 2);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 1);
            if (_0x5E88) {
                _0x5EA2[_0x5E54[715]](1, _0x5E88, true)
            };
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[716]] = function(_0x5EA2, _0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 1 + ((_0x5EA2[_0x5E54[9]] + 1) * 2));
            var _0x5EBC = new DataView(_0x5E6E);
            _0x5EBC[_0x5E54[712]](0, 72);
            _0x5EBC[_0x5E54[712]](1, _0x5E88);
            _0x7666(2, _0x5EBC, _0x5EA2);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[485]] = function(_0x5E6E) {
            var _0x5E88 = new ArrayBuffer(2);
            var _0x5EA2 = new DataView(_0x5E88);
            _0x5EA2[_0x5E54[712]](0, 41);
            _0x5EA2[_0x5E54[712]](1, _0x5E6E ? 1 : 0);
            return _0x5E88
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[717]] = function(_0x5E6E, _0x5EA2) {
            var _0x5E88 = new ArrayBuffer(6);
            var _0x5EBC = new DataView(_0x5E88);
            _0x5EBC[_0x5E54[712]](0, 40);
            _0x5EBC[_0x5E54[712]](1, _0x5E6E);
            _0x5EBC[_0x5E54[718]](2, _0x5EA2, true);
            return _0x5E88
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[440]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + _0x5E88[_0x5E54[9]] + 1);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 42);
            _0x7680(1, _0x5EA2, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[719]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 2);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 103);
            _0x5EA2[_0x5E54[715]](1, _0x5E88, true);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[720]] = function(_0x5E88, _0x5EA2) {
            var _0x5E6E = new ArrayBuffer(5 + ((_0x5EA2[_0x5E54[9]] + 1) * 2));
            var _0x5EBC = new DataView(_0x5E6E);
            _0x5EBC[_0x5E54[712]](0, 73);
            _0x5EBC[_0x5E54[718]](1, _0x5E88, true);
            _0x7666(5, _0x5EBC, _0x5EA2);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[721]] = function(_0x5E88) {
            var _0x5EA2 = !_0x5E88 ? 1 : _0x5E88[_0x5E54[9]] + 1;
            var _0x5E6E = new ArrayBuffer(1 + 6 + (_0x74C6[_0x5E54[722]][_0x5E54[9]] + 1) + _0x5EA2);
            var _0x5EBC = new DataView(_0x5E6E);
            _0x5EBC[_0x5E54[712]](0, 10);
            _0x5EBC[_0x5E54[712]](1, _0x74C6[_0x5E54[413]][_0x5E54[723]]);
            _0x5EBC[_0x5E54[712]](2, _0x74C6[_0x5E54[413]][_0x5E54[724]]);
            _0x5EBC[_0x5E54[712]](3, _0x74C6[_0x5E54[413]][_0x5E54[725]]);
            _0x5EBC[_0x5E54[712]](4, _0x74C6[_0x5E54[726]]);
            _0x5EBC[_0x5E54[712]](5, _0x74C6[_0x5E54[671]]);
            _0x5EBC[_0x5E54[712]](6, _0x74C6[_0x5E54[670]] ? 1 : 0);
            _0x7680(7, _0x5EBC, _0x74C6[_0x5E54[722]]);
            if (_0x5EA2 > 1) {
                _0x7680(8 + _0x74C6[_0x5E54[722]][_0x5E54[9]], _0x5EBC, _0x5E88)
            };
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[727]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 4);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 80);
            _0x5EA2[_0x5E54[712]](1, _0x5E88);
            _0x5EA2[_0x5E54[712]](2, 0);
            _0x5EA2[_0x5E54[715]](3, 0);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[728]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + 1);
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 90);
            _0x5EA2[_0x5E54[712]](1, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[729]] = function() {
            var _0x5E6E = new ArrayBuffer(1);
            var _0x5E88 = new DataView(_0x5E6E);
            _0x5E88[_0x5E54[712]](0, 81);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[730]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + (_0x5E88[_0x5E54[9]] + 1));
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 100);
            _0x7680(1, _0x5EA2, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[345]] = function(_0x5E88) {
            var _0x5E6E = new ArrayBuffer(1 + (_0x5E88[_0x5E54[9]] + 1));
            var _0x5EA2 = new DataView(_0x5E6E);
            _0x5EA2[_0x5E54[712]](0, 101);
            _0x7680(1, _0x5EA2, _0x5E88);
            return _0x5E6E
        };
        _0x6DAA[_0x5E54[283]][_0x5E54[612]] = function(_0x5E88, _0x5EA2, _0x5EBC) {
            var _0x5E6E = new ArrayBuffer(1 + 3);
            var _0x5ED6 = new DataView(_0x5E6E);
            _0x5ED6[_0x5E54[712]](0, 91);
            _0x5ED6[_0x5E54[712]](1, _0x5E88);
            if (_0x5E88 == _0x6404[_0x5E54[573]] || _0x5E88 == _0x6404[_0x5E54[581]]) {
                _0x5ED6[_0x5E54[715]](2, _0x5EA2, false)
            } else {
                _0x5ED6[_0x5E54[712]](2, _0x5EA2);
                _0x5ED6[_0x5E54[712]](3, _0x5EBC)
            };
            return _0x5E6E
        };
        
        function _0x7680(_0x5E88, _0x5EBC, _0x5EA2) {
            for (var _0x5E6E = 0; _0x5E6E < _0x5EA2[_0x5E54[9]]; _0x5E6E++) {
                _0x5EBC[_0x5E54[712]](_0x5E88, _0x5EA2[_0x5E54[731]](_0x5E6E));
                _0x5E88++
            };
            _0x5EBC[_0x5E54[712]](_0x5E88, 0)
        }
        
        function _0x7666(_0x5E88, _0x5EBC, _0x5EA2) {
            for (var _0x5E6E = 0; _0x5E6E < _0x5EA2[_0x5E54[9]]; _0x5E6E++) {
                _0x5EBC[_0x5E54[715]](_0x5E88, _0x5EA2[_0x5E54[731]](_0x5E6E), true);
                _0x5E88 += 2
            };
            _0x5EBC[_0x5E54[715]](_0x5E88, 0, true)
        }
        
        function _0x709C(_0x5EA2) {
            var _0x5E88 = _0x5E54[1];
            while (true) {
                var _0x5E6E = _0x5EA2[_0x5E54[374]](_0x5EA2[_0x5E54[375]]);
                _0x5EA2[_0x5E54[375]]++;
                if (_0x5E6E == 0) {
                    break
                };
                _0x5E88 += String[_0x5E54[732]](_0x5E6E)
            };
            return _0x5E88
        }
        
        function _0x7082(_0x5EA2) {
            var _0x5E88 = _0x5E54[1];
            while (true) {
                var _0x5E6E = _0x5EA2[_0x5E54[408]](_0x5EA2[_0x5E54[375]], true);
                _0x5EA2[_0x5E54[375]] += 2;
                if (_0x5E6E == 0) {
                    break
                };
                _0x5E88 += String[_0x5E54[732]](_0x5E6E)
            };
            return _0x5E88
        }
        
        function _0x7410(_0x5E88) {
            while (true) {
                var _0x5E6E = _0x5E88[_0x5E54[408]](_0x5E88[_0x5E54[375]], true);
                _0x5E88[_0x5E54[375]] += 2;
                if (_0x5E6E == 0) {
                    break
                }
            }
        }
        
        function _0x67C6(_0x5E6E, _0x5E88) {
            console[_0x5E54[11]](_0x5E6E[_0x5E54[733]], _0x5E6E[_0x5E54[734]]);
            if (_0x5E88) {
                switch (_0x5E6E[_0x5E54[734]]) {
                    case _0x5E54[736]:
                        alert(_0x5E54[735]);
                        break;
                    case _0x5E54[737]:
                        break;
                    default:
                        alert(_0x5E6E[_0x5E54[733]] + _0x5E54[510] + _0x5E6E[_0x5E54[734]] + _0x5E54[465]);
                        break
                }
            }
        }
        
        function _0x6076(_0x5E6E) {
            return _0x5E6E[_0x5E54[197]](0)[_0x5E54[135]]() + _0x5E6E[_0x5E54[133]](1)
        }
        
        function _0x6C0A(_0x5E6E) {
            switch (_0x5E6E) {
                case _0x5E54[739]:
                    return _0x5E54[738];
                    break;
                case _0x5E54[741]:
                    return _0x5E54[740];
                    break;
                case _0x5E54[743]:
                    return _0x5E54[742];
                    break;
                default:
                    return _0x5E6E;
                    break
            }
        }
        
        function _0x6382(_0x5EF0, _0x5ED6) {
            var _0x5EA2 = _0x5E54[1];
            var _0x5EBC = _0x5E54[1];
            var _0x5E88 = _0x5E54[744];
            if (_0x5ED6[_0x5E54[412]][_0x5E54[745]]) {
                _0x5EBC = _0x5E54[746];
                _0x5EA2 = _0x5E54[747];
                _0x5E88 = _0x5E54[748]
            } else {
                if (_0x5ED6[_0x5E54[412]][_0x5E54[749]]) {
                    _0x5EBC = _0x5E54[750];
                    _0x5EA2 = _0x5E54[751]
                } else {
                    return
                }
            };
            var _0x5E6E = document[_0x5E54[349]](_0x5E54[752]);
            _0x5E6E[_0x5E54[475]] = _0x5E54[753];
            _0x5E6E[_0x5E54[122]] = _0x5E54[754];
            _0x5E6E[_0x5E54[473]] = _0x5EA2;
            _0x5E6E[_0x5E54[321]][_0x5E54[351]] = _0x5E88;
            $(_0x5E6E)[_0x5E54[589]](_0x5E54[755], _0x5EBC);
            $(_0x5E6E)[_0x5E54[589]](_0x5E54[756], _0x5E54[757]);
            $(_0x5EF0)[_0x5E54[512]](_0x5E6E)
        }
        
        function _0x6368(_0x5E88, _0x5EA2) {
            var _0x5E6E = document[_0x5E54[349]](_0x5E54[752]);
            _0x5E6E[_0x5E54[475]] = _0x5E54[753];
            _0x5E6E[_0x5E54[473]] = _0x5E88;
            _0x5E6E[_0x5E54[758]](_0x5E54[755], _0x5EA2);
            _0x5E6E[_0x5E54[758]](_0x5E54[756], _0x5E54[757]);
            return _0x5E6E
        }
        
        function _0x639C(_0x5FC0, _0x600E, _0x5F24, _0x5EA2) {
            var _0x5EF0 = document[_0x5E54[349]](_0x5E54[759]);
            _0x5EF0[_0x5E54[475]] = _0x5E54[760];
            var _0x5ED6 = document[_0x5E54[349]](_0x5E54[761]);
            _0x5ED6[_0x5E54[701]] = _0x5FC0[_0x5E54[762]];
            _0x5ED6[_0x5E54[763]] = _0x5FC0[_0x5E54[764]];
            _0x5EF0[_0x5E54[355]](_0x5ED6);
            var _0x5F0A = document[_0x5E54[349]](_0x5E54[551]);
            _0x5F0A[_0x5E54[475]] = _0x5E54[765];
            var _0x5FDA = document[_0x5E54[349]](_0x5E54[551]);
            _0x5FDA[_0x5E54[475]] = _0x5E54[764];
            _0x5FDA[_0x5E54[473]] = _0x5FC0[_0x5E54[764]];
            _0x5F0A[_0x5E54[355]](_0x5FDA);
            _0x6382(_0x5FDA, _0x5FC0);
            var _0x5FA6 = document[_0x5E54[349]](_0x5E54[551]);
            var _0x5F3E = false;
            var _0x5F8C = null;
            if (_0x5F24) {
                _0x5F8C = _0x6076(_0x5FC0[_0x5E54[767]][_0x5E54[766]]);
                if ((_0x5FC0[_0x5E54[767]][_0x5E54[768]] + (1000 * 60)) < new Date()[_0x5E54[769]]() || _0x5FC0[_0x5E54[767]][_0x5E54[122]] === undefined) {
                    _0x5FA6[_0x5E54[475]] = _0x5E54[770];
                    _0x5FA6[_0x5E54[473]] = _0x5E54[771]
                } else {
                    _0x5F3E = true;
                    _0x5FA6[_0x5E54[475]] = _0x5E54[772] + (_0x5FC0[_0x5E54[767]][_0x5E54[773]] === _0x5E54[774] ? _0x5E54[775] : _0x5E54[270]);
                    _0x5FA6[_0x5E54[473]] = (_0x5FC0[_0x5E54[767]][_0x5E54[773]] === _0x5E54[774] ? _0x5E54[776] : _0x5E54[777]) + _0x5FC0[_0x5E54[767]][_0x5E54[157]] + _0x5E54[778] + _0x5F8C + _0x5E54[779] + _0x5FC0[_0x5E54[767]][_0x5E54[122]] + _0x5E54[465]
                }
            } else {
                _0x5FA6[_0x5E54[475]] = _0x5E54[780];
                _0x5FA6[_0x5E54[473]] = _0x5E54[781]
            };
            _0x5F0A[_0x5E54[355]](_0x5FA6);
            var _0x5E88 = document[_0x5E54[349]](_0x5E54[551]);
            _0x5E88[_0x5E54[475]] = _0x5E54[782];
            var _0x5FF4 = _0x6368(_0x5E54[783], _0x5E54[784]);
            _0x5FF4[_0x5E54[130]](_0x5E54[785], function(_0x5E6E) {
                _0x6B06(_0x5FC0, $(_0x5E54[786]))
            });
            _0x5E88[_0x5E54[512]](_0x5FF4);
            if (_0x5F24 && _0x5F3E) {
                var _0x5F58 = _0x6368(_0x5E54[112], _0x5E54[787]);
                _0x5F58[_0x5E54[130]](_0x5E54[785], function(_0x5E6E) {
                    _0x7222(_0x5F8C);
                    _0x6F30[_0x5E54[286]]();
                    _0x6F30[_0x5E54[143]](_0x5FC0[_0x5E54[764]] + _0x5E54[788] + _0x5FC0[_0x5E54[767]][_0x5E54[122]]);
                    _0x6848($(_0x5E54[786]))
                });
                _0x5E88[_0x5E54[355]](_0x5F58)
            };
            if (!_0x5F24) {
                var _0x5EBC = _0x6368(_0x5E54[789], _0x5E54[790]);
                _0x5EBC[_0x5E54[791]] = false;
                _0x5EBC[_0x5E54[130]](_0x5E54[785], function(_0x5E88) {
                    if (_0x5EBC[_0x5E54[791]]) {
                        return
                    };
                    _0x5EBC[_0x5E54[791]] = true;
                    firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                        fetch(_0x5E6E + _0x5E54[792], {
                            method: _0x5E54[150],
                            headers: {
                                "Content-Type": _0x5E54[793]
                            },
                            body: JSON[_0x5E54[53]]({
                                token: _0x5E88,
                                target: _0x5FC0[_0x5E54[522]],
                                action: 2
                            })
                        })[_0x5E54[346]]((_0x5E6E) => {
                            return _0x5E6E[_0x5E54[151]]()
                        })[_0x5E54[346]]((_0x5E6E) => {
                            if (_0x5E6E[_0x5E54[734]] !== 200) {
                                alert(_0x5E6E[_0x5E54[733]])
                            };
                            _0x5EBC[_0x5E54[791]] = false
                        })[_0x5E54[344]]((_0x5E6E) => {
                            alert(_0x5E6E);
                            _0x5EBC[_0x5E54[791]] = false
                        })
                    })[_0x5E54[344]]((_0x5E6E) => {
                        _0x67C6(_0x5E6E, true);
                        _0x5EBC[_0x5E54[791]] = false
                    })
                });
                _0x5E88[_0x5E54[355]](_0x5EBC)
            };
            var _0x5F72 = _0x6368(_0x5E54[18], _0x5E54[794]);
            _0x5F72[_0x5E54[791]] = false;
            _0x5F72[_0x5E54[130]](_0x5E54[785], function(_0x5E88) {
                if (_0x5F72[_0x5E54[791]] || !confirm(_0x5E54[795] + _0x5FC0[_0x5E54[764]] + _0x5E54[796])) {
                    return
                };
                _0x5F72[_0x5E54[791]] = true;
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[792], {
                        method: _0x5E54[150],
                        headers: {
                            "Content-Type": _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88,
                            target: _0x5FC0[_0x5E54[522]],
                            action: 4
                        })
                    })[_0x5E54[346]]((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    })[_0x5E54[346]]((_0x5E6E) => {
                        alert(_0x5E6E[_0x5E54[733]]);
                        if (_0x5E6E[_0x5E54[734]] === 200) {
                            firebase[_0x5E54[149]]()[_0x5E54[148]](_0x7562[_0x5E54[798]][_0x5FC0[_0x5E54[522]]])[_0x5E54[797]]();
                            _0x7562[_0x5E54[799]][_0x5FC0[_0x5E54[522]]][_0x5E54[430]]();
                            delete _0x7562[_0x5E54[798]][_0x5FC0[_0x5E54[522]]];
                            delete _0x7562[_0x5E54[799]][_0x5FC0[_0x5E54[522]]]
                        };
                        _0x5F72[_0x5E54[791]] = false
                    })[_0x5E54[344]]((_0x5E6E) => {
                        alert(_0x5E6E);
                        _0x5F72[_0x5E54[791]] = false
                    })
                })[_0x5E54[344]]((_0x5E6E) => {
                    _0x67C6(_0x5E6E, true);
                    _0x5F72[_0x5E54[791]] = false
                })
            });
            _0x5E88[_0x5E54[355]](_0x5F72);
            _0x5F0A[_0x5E54[355]](_0x5E88);
            _0x5EF0[_0x5E54[355]](_0x5F0A);
            if (_0x5EA2) {
                return _0x600E[_0x5E54[355]](_0x5EF0)
            } else {
                return _0x5EF0
            }
        }
        
        function _0x6B06(_0x5E88, _0x5E6E) {
            if (_0x5E6E) {
                _0x6848(_0x5E6E)
            };
            $(_0x5E54[800])[_0x5E54[449]](_0x5E88[_0x5E54[764]]);
            $(_0x5E54[801])[_0x5E54[589]](_0x5E54[701], _0x5E88[_0x5E54[762]]);
            $(_0x5E54[801])[_0x5E54[589]](_0x5E54[763], _0x5E88[_0x5E54[764]]);
            $(_0x5E54[808])[_0x5E54[230]](_0x5E54[802] + _0x5E88[_0x5E54[804]][_0x5E54[803]] + _0x5E54[805] + _0x6626(_0x5E88[_0x5E54[804]][_0x5E54[806]]) + _0x5E54[4] + _0x6626(_0x5E88[_0x5E54[804]][_0x5E54[807]]) + _0x5E54[546]);
            if (_0x5E88[_0x5E54[809]] && _0x5E88[_0x5E54[809]] > 0 && _0x752E[_0x5E88[_0x5E54[809]]]) {
                $(_0x5E54[810])[_0x5E54[449]](_0x752E[_0x5E88[_0x5E54[809]]])
            } else {
                $(_0x5E54[810])[_0x5E54[449]](_0x5E54[1])
            };
            $(_0x5E54[811])[_0x5E54[797]](_0x5E54[785]);
            if (_0x5E88[_0x5E54[522]] == _0x7632[_0x5E54[522]]) {
                $(_0x5E54[811])[_0x5E54[128]](_0x5E54[785], function() {
                    $(_0x5E54[113])[_0x5E54[19]]();
                    _0x7548($(_0x5E54[114]))
                });
                $(_0x5E54[811])[_0x5E54[15]](_0x5E54[812], _0x5E54[813])
            } else {
                $(_0x5E54[811])[_0x5E54[15]](_0x5E54[812], _0x5E54[814])
            };
            if (_0x5E88[_0x5E54[412]][_0x5E54[745]]) {
                $(_0x5E54[801])[_0x5E54[816]](_0x5E54[815])
            } else {
                $(_0x5E54[801])[_0x5E54[817]](_0x5E54[815])
            };
            _0x6382($(_0x5E54[800]), _0x5E88);
            _0x7340($(_0x5E54[113]))
        }
        
        function _0x6B6E(_0x5E88) {
            if (_0x67E0) {
                return
            };
            var _0x5EA2 = $(_0x5E54[818])[0];
            var _0x5EBC = $(_0x5E54[818])[1];
            $(_0x5E54[819])[_0x5E54[449]](_0x5E88[_0x5E54[522]]);
            firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5E54[830] + _0x5E88[_0x5E54[522]])[_0x5E54[128]](_0x5E54[138], function(_0x5EF0) {
                if (_0x5EF0[_0x5E54[139]]() === null) {
                    var _0x5F0A = document[_0x5E54[349]](_0x5E54[551]);
                    var _0x5F24 = document[_0x5E54[349]](_0x5E54[350]);
                    _0x5F0A[_0x5E54[475]] = _0x5E54[820];
                    _0x5F24[_0x5E54[473]] = _0x5E54[821];
                    _0x5F0A[_0x5E54[355]](_0x5F24);
                    _0x5EA2[_0x5E54[355]](_0x5F0A);
                    return
                };
                var _0x5E88 = _0x5EF0[_0x5E54[139]]();
                var _0x5ED6 = false;
                Object[_0x5E54[432]](_0x5E88)[_0x5E54[829]]((_0x5EF0) => {
                    var _0x5F0A = _0x5E88[_0x5EF0];
                    if (!_0x5F0A && !_0x5ED6) {
                        _0x5ED6 = true;
                        firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                            fetch(_0x5E6E + _0x5E54[826], {
                                method: _0x5E54[150],
                                headers: {
                                    "Content-Type": _0x5E54[793]
                                },
                                body: JSON[_0x5E54[53]]({
                                    token: _0x5E88
                                })
                            })[_0x5E54[346]]((_0x5E6E) => {
                                return _0x5E6E[_0x5E54[151]]()
                            })[_0x5E54[346]]((_0x5E6E) => {
                                if (_0x5E6E[_0x5E54[734]] === 200) {
                                    _0x5E6E[_0x5E54[825]][_0x5E54[824]]((_0x5E88) => {
                                        if (!_0x7562[_0x5E54[822]][_0x5E54[466]](_0x5E88)) {
                                            _0x7562[_0x5E54[822]][_0x5E54[161]](_0x5E88[_0x5E54[522]])
                                        };
                                        if (_0x7562[_0x5E54[799]][_0x5E88[_0x5E54[522]]]) {
                                            var _0x5E6E = _0x639C(_0x5E88, _0x7562[_0x5E54[799]][_0x5E88[_0x5E54[522]]], false, false);
                                            _0x5EBC[_0x5E54[823]](_0x5E6E, _0x7562[_0x5E54[799]][_0x5E88[_0x5E54[522]]]);
                                            _0x7562[_0x5E54[799]][_0x5EF0] = _0x5E6E;
                                            return
                                        };
                                        _0x7562[_0x5E54[799]][_0x5E88[_0x5E54[522]]] = _0x639C(_0x5E88, _0x5EBC, false, true)
                                    })
                                }
                            })
                        })[_0x5E54[344]]((_0x5E54) => {
                            return _0x67C6(_0x5E54, false)
                        });
                        return
                    };
                    if (!_0x7562[_0x5E54[798]][_0x5EF0]) {
                        var _0x5F24 = _0x5E54[827] + _0x5EF0;
                        _0x7562[_0x5E54[798]][_0x5EF0] = _0x5F24;
                        firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5F24)[_0x5E54[128]](_0x5E54[138], function(_0x5EBC) {
                            if (_0x5EBC[_0x5E54[139]]() === null) {
                                return
                            };
                            var _0x5E88 = _0x5EBC[_0x5E54[139]]();
                            _0x7562[_0x5E54[828]][_0x5E88[_0x5E54[522]]] = _0x5E88[_0x5E54[767]][_0x5E54[768]];
                            if (_0x7562[_0x5E54[822]][_0x5E54[466]](_0x5EF0)) {
                                _0x7562[_0x5E54[822]][_0x5E54[133]](_0x7562[_0x5E54[822]][_0x5E54[685]](_0x5EF0), 1);
                                _0x7562[_0x5E54[799]][_0x5EF0][_0x5E54[430]]();
                                var _0x5E6E = _0x639C(_0x5E88, _0x7562[_0x5E54[799]][_0x5EF0], true, false);
                                _0x5EA2[_0x5E54[355]](_0x5E6E);
                                _0x7562[_0x5E54[799]][_0x5EF0] = _0x5E6E;
                                return
                            };
                            if (_0x7562[_0x5E54[799]][_0x5EF0]) {
                                var _0x5E6E = _0x639C(_0x5E88, _0x7562[_0x5E54[799]][_0x5EF0], true, false);
                                _0x5EA2[_0x5E54[823]](_0x5E6E, _0x7562[_0x5E54[799]][_0x5EF0]);
                                _0x7562[_0x5E54[799]][_0x5EF0] = _0x5E6E;
                                return
                            };
                            _0x7562[_0x5E54[799]][_0x5EF0] = _0x639C(_0x5E88, _0x5EA2, true, true)
                        })
                    }
                })
            });
            setInterval(function() {
                for (var _0x5E6E in _0x7562[_0x5E54[828]]) {
                    if (!_0x7562[_0x5E54[828]][_0x5E54[831]](_0x5E6E)) {
                        return
                    };
                    var _0x5EBC = _0x7562[_0x5E54[828]][_0x5E6E];
                    if ((_0x5EBC + (1000 * 60)) < new Date()[_0x5E54[769]]() || _0x5EBC === undefined) {
                        var _0x5EA2 = _0x7562[_0x5E54[799]][_0x5E6E][_0x5E54[21]][1][_0x5E54[21]][1];
                        _0x5EA2[_0x5E54[473]] = _0x5E54[771];
                        _0x5EA2[_0x5E54[475]] = _0x5E54[770];
                        var _0x5E88 = _0x7562[_0x5E54[799]][_0x5E6E][_0x5E54[21]][1][_0x5E54[21]][2][_0x5E54[21]][1];
                        if (_0x5E88[_0x5E54[474]][_0x5E54[832]] === _0x5E54[787]) {
                            _0x5E88[_0x5E54[430]]()
                        }
                    }
                }
            }, 1000 * 60);
            _0x67E0 = true
        }
        
        function _0x6BF0() {
            if (_0x658A[_0x5E54[35]] && !_0x6D42[_0x5E54[177]]) {
                $(_0x5E54[521])[_0x5E54[835]](_0x5E54[833] + _0x658A[_0x5E54[834]])
            };
            $(_0x5E54[836])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[137]);
                _0x7208(_0x5E6E)
            });
            $(_0x5E54[841])[_0x5E54[128]](_0x5E54[785], function() {
                if (Date[_0x5E54[174]]() < _0x6486) {
                    return
                };
                if (Object[_0x5E54[432]](_0x6F30[_0x5E54[207]])[_0x5E54[9]] != 0 && this[_0x5E54[269]] == _0x71EE[_0x5E54[136]]) {
                    _0x6848(_0x6C58);
                    return
                };
                _0x6F30[_0x5E54[270]] = false;
                if (_0x7492[_0x5E54[837]]() && typeof adplayer != _0x5E54[838]) {
                    aiptag[_0x5E54[436]][_0x5E54[840]][_0x5E54[161]](function() {
                        adplayer[_0x5E54[839]]()
                    });
                    _0x6848(_0x6C58);
                    _0x682E();
                    _0x6486 = Date[_0x5E54[174]]() + 2000
                } else {
                    _0x6F30[_0x5E54[286]]()
                }
            });
            $(_0x5E54[843])[_0x5E54[128]](_0x5E54[785], function() {
                _0x5E88(_0x5E54[842])
            });
            $(_0x5E54[845])[_0x5E54[128]](_0x5E54[785], function() {
                _0x5E88(_0x5E54[844])
            });
            $(_0x5E54[847])[_0x5E54[128]](_0x5E54[785], function() {
                _0x5E88(_0x5E54[846])
            });
            $(_0x5E54[849])[_0x5E54[128]](_0x5E54[785], function() {
                _0x5E88(_0x5E54[848])
            });
            $(_0x5E54[853])[_0x5E54[128]](_0x5E54[785], function() {
                window[_0x5E54[852]](_0x5E54[850], _0x5E54[851])
            });
            $(_0x5E54[855])[_0x5E54[128]](_0x5E54[785], function() {
                window[_0x5E54[852]](_0x5E54[854], _0x5E54[851])
            });
            $(_0x5E54[288])[_0x5E54[856]](function(_0x5E6E) {
                if (_0x5E6E[_0x5E54[107]] == 13 && $(this)[_0x5E54[111]](_0x5E54[110])) {
                    _0x6F30[_0x5E54[286]]()
                }
            });
            $(_0x5E54[857])[_0x5E54[128]](_0x5E54[785], function() {
                if (Date[_0x5E54[174]]() < _0x6486) {
                    return
                };
                if (_0x6F30[_0x5E54[270]] && this[_0x5E54[269]] == _0x71EE[_0x5E54[136]]) {
                    _0x6848(_0x6C58);
                    return
                };
                _0x6F30[_0x5E54[270]] = true;
                if (_0x7492[_0x5E54[837]]() && typeof adplayer != _0x5E54[838]) {
                    aiptag[_0x5E54[436]][_0x5E54[840]][_0x5E54[161]](function() {
                        adplayer[_0x5E54[839]]()
                    });
                    _0x6848(_0x6C58);
                    _0x682E();
                    _0x6486 = Date[_0x5E54[174]]() + 2000
                } else {
                    _0x6F30[_0x5E54[298]]()
                }
            });
            $(_0x5E54[79])[_0x5E54[879]](function(_0x5E6E) {
                var _0x5EBC = $(this)[_0x5E54[139]]();
                var _0x5ED6 = _0x5EBC[_0x5E54[3]](_0x5E54[366]);
                if (_0x5E6E[_0x5E54[107]] == 13 && $(this)[_0x5E54[111]](_0x5E54[110])) {
                    _0x6570($(this)[_0x5E54[139]]())
                };
                if (_0x5EBC[_0x5E54[9]] == 0 || _0x5EBC[_0x5E54[858]](_0x5E54[366]) || _0x5E6E[_0x5E54[107]] == 13) {
                    $(_0x5E54[859])[_0x5E54[230]](_0x5E54[1]);
                    $(_0x5E54[859])[_0x5E54[19]]()
                } else {
                    if (_0x5EBC[_0x5E54[860]](_0x5E54[4])) {
                        if (_0x5ED6[_0x5E54[9]] > 1) {
                            return
                        };
                        $(_0x5E54[859])[_0x5E54[230]](_0x5E54[861]);
                        var _0x5EF0 = -1;
                        Object[_0x5E54[869]](_0x6300)[_0x5E54[829]]((_0x5E6E) => {
                            if ((_0x5EF0 = _0x5E6E[_0x5E54[863]][_0x5E54[862]]((_0x5E6E) => {
                                    return _0x5E6E[_0x5E54[134]]()[_0x5E54[860]](_0x5ED6[0][_0x5E54[686]](1)[_0x5E54[134]]())
                                })) > -1) {
                                $(_0x5E54[868])[_0x5E54[512]](_0x5E54[864] + _0x5E6E[_0x5E54[863]][_0x5EF0] + _0x5E54[865] + _0x5E6E[_0x5E54[863]] + _0x5E54[865] + _0x5E6E[_0x5E54[866]] + _0x5E54[867])
                            }
                        });
                        if ($(_0x5E54[868])[_0x5E54[21]]()[_0x5E54[9]] == 0) {
                            $(_0x5E54[859])[_0x5E54[19]]()
                        } else {
                            $(_0x5E54[859])[_0x5E54[17]]()
                        }
                    } else {
                        if (_0x5ED6[_0x5ED6[_0x5E54[9]] - 1][_0x5E54[860]](_0x5E54[2])) {
                            $(_0x5E54[859])[_0x5E54[230]](_0x5E54[1]);
                            var _0x5E88 = Object[_0x5E54[432]](_0x653C)[_0x5E54[870]]((_0x5E6E) => {
                                return _0x5E6E[_0x5E54[134]]()[_0x5E54[466]](_0x5ED6[_0x5ED6[_0x5E54[9]] - 1][_0x5E54[686]](1)[_0x5E54[134]]())
                            });
                            var _0x5EA2 = Object[_0x5E54[432]](gifEmoteList)[_0x5E54[870]]((_0x5E6E) => {
                                return _0x5E6E[_0x5E54[134]]()[_0x5E54[466]](_0x5ED6[_0x5ED6[_0x5E54[9]] - 1][_0x5E54[686]](1)[_0x5E54[134]]())
                            });
                            if (_0x5E88[_0x5E54[9]] === 0 && _0x5EA2[_0x5E54[9]] === 0) {
                                $(_0x5E54[859])[_0x5E54[230]](_0x5E54[1]);
                                $(_0x5E54[859])[_0x5E54[19]]();
                                return
                            } else {
                                $(_0x5E54[859])[_0x5E54[17]]()
                            };
                            if (_0x5E88[_0x5E54[9]] > 0) {
                                $(_0x5E54[859])[_0x5E54[512]](_0x5E54[871]);
                                _0x5E88[_0x5E54[824]]((_0x5E6E) => {
                                    $(_0x5E54[859])[_0x5E54[512]](_0x5E54[872] + _0x5E6E + _0x5E54[873] + _0x5E6E + _0x5E54[874] + _0x5E6E + _0x5E54[875])
                                })
                            };
                            if (_0x5EA2[_0x5E54[9]] > 0) {
                                $(_0x5E54[859])[_0x5E54[512]](_0x5E54[876]);
                                _0x5EA2[_0x5E54[824]]((_0x5E6E) => {
                                    $(_0x5E54[859])[_0x5E54[512]](_0x5E54[872] + _0x5E6E + _0x5E54[873] + _0x5E6E + _0x5E54[877] + _0x5E6E + _0x5E54[878])
                                })
                            }
                        }
                    }
                }
            });
            $(_0x5E54[859])[_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                var _0x5E88 = _0x66C2()[_0x5E54[3]](_0x5E54[366]);
                if (_0x5E6E[_0x5E54[123]][_0x5E54[880]] === _0x5E54[881]) {
                    _0x72A4(_0x5E54[4] + _0x5E6E[_0x5E54[123]][_0x5E54[882]][_0x5E54[21]][0][_0x5E54[353]] + _0x5E54[366]);
                    $(_0x5E54[859])[_0x5E54[230]](_0x5E54[1]);
                    $(_0x5E54[859])[_0x5E54[19]]();
                    $(_0x5E54[79])[_0x5E54[883]]()
                } else {
                    if (_0x5E6E[_0x5E54[123]][_0x5E54[880]] === _0x5E54[884]) {
                        _0x72A4(_0x66C2()[_0x5E54[686]](0, (_0x66C2()[_0x5E54[9]] - _0x5E88[_0x5E88[_0x5E54[9]] - 1][_0x5E54[9]])) + _0x5E6E[_0x5E54[123]][_0x5E54[886]][_0x5E54[136]][_0x5E54[885]] + _0x5E54[366]);
                        $(_0x5E54[859])[_0x5E54[230]](_0x5E54[1]);
                        $(_0x5E54[859])[_0x5E54[19]]();
                        $(_0x5E54[79])[_0x5E54[883]]()
                    }
                }
            });
            $(_0x5E54[887])[_0x5E54[128]](_0x5E54[562], function() {
                var _0x5E6E = parseInt($(this)[_0x5E54[139]]());
                if (isNaN(_0x5E6E)) {
                    _0x5E6E = 90
                };
                _0x6D42[_0x5E54[199]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 25), 250);
                $(_0x5E54[887])[_0x5E54[139]](_0x6D42[_0x5E54[199]]);
                $(_0x5E54[888])[_0x5E54[139]](_0x6D42[_0x5E54[199]])
            });
            $(_0x5E54[891])[_0x5E54[128]](_0x5E54[562], function() {
                var _0x5E6E = parseInt($(this)[_0x5E54[139]]());
                if (isNaN(_0x5E6E)) {
                    _0x5E6E = 100
                };
                _0x5E6E *= 0.01;
                _0x6D42[_0x5E54[889]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 0.5), 1.25);
                $(_0x5E54[891])[_0x5E54[139]](Number[_0x5E54[890]](_0x6D42[_0x5E54[889]] * 100)[_0x5E54[254]](0));
                $(_0x5E54[892])[_0x5E54[139]](_0x6D42[_0x5E54[889]]);
                $(_0x5E54[895])[_0x5E54[15]](_0x5E54[893], _0x5E54[894] + _0x6D42[_0x5E54[889]] + _0x5E54[465])
            });
            $(_0x5E54[900])[_0x5E54[15]](_0x5E54[896], _0x5E54[897] + _0x7068[Math[_0x5E54[233]](Math[_0x5E54[898]]() * _0x7068[_0x5E54[9]])] + _0x5E54[899]);
            $(_0x5E54[900])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[902])[_0x5E54[901]]()
            });
            $(_0x5E54[903])[_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                _0x5ED6(_0x5E6E[_0x5E54[123]][_0x5E54[136]] + _0x5E54[366]);
                $(_0x5E54[79])[_0x5E54[883]]()
            });
            (function() {
                var _0x5E6E = document[_0x5E54[69]](_0x5E54[904]);
                document[_0x5E54[69]](_0x5E54[906])[_0x5E54[130]](_0x5E54[905], _0x5EA2, false);
                var _0x5EF0, _0x5F0A, _0x5ED6, _0x5EBC;
                
                function _0x5EA2(_0x5EA2) {
                    _0x5EF0 = _0x5EA2[_0x5E54[102]];
                    _0x5F0A = _0x5EA2[_0x5E54[104]];
                    _0x5ED6 = parseInt(document[_0x5E54[908]][_0x5E54[907]](_0x5E6E)[_0x5E54[187]], 10);
                    _0x5EBC = parseInt(document[_0x5E54[908]][_0x5E54[907]](_0x5E6E)[_0x5E54[190]], 10);
                    document[_0x5E54[910]][_0x5E54[130]](_0x5E54[909], _0x5E88, false);
                    document[_0x5E54[910]][_0x5E54[130]](_0x5E54[911], _0x5F24, false)
                }
                
                function _0x5E88(_0x5E88) {
                    _0x5E6E[_0x5E54[321]][_0x5E54[187]] = (_0x5ED6 + _0x5E88[_0x5E54[102]] - _0x5EF0) + _0x5E54[912];
                    _0x5E6E[_0x5E54[321]][_0x5E54[190]] = (_0x5EBC - (_0x5E88[_0x5E54[104]] - _0x5F0A)) + _0x5E54[912]
                }
                
                function _0x5F24(_0x5E6E) {
                    document[_0x5E54[910]][_0x5E54[913]](_0x5E54[909], _0x5E88, false);
                    document[_0x5E54[910]][_0x5E54[913]](_0x5E54[911], _0x5F24, false)
                }
            })();
            $(_0x5E54[914])[_0x5E54[128]](_0x5E54[562], function(_0x5E54) {
                _0x6264($(this))
            });
            $(_0x5E54[915])[_0x5E54[128]](_0x5E54[562], function(_0x5E54) {
                _0x6298($(this))
            });
            $(_0x5E54[916])[_0x5E54[128]](_0x5E54[562], function(_0x5E54) {
                _0x627E($(this))
            });
            $(_0x5E54[918])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6848($(_0x5E54[917]));
                _0x7340(_0x6C58);
                window[_0x5E54[852]](_0x757C, _0x5E54[851])
            });
            $(_0x5E54[919])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6848($(_0x5E54[917]));
                _0x7340(_0x6C58)
            });
            $(_0x5E54[920])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[485]](true));
                _0x6848($(_0x5E54[488]))
            });
            $(_0x5E54[921])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[485]](false));
                _0x6848($(_0x5E54[488]))
            });
            $(_0x5E54[925])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[496])[_0x5E54[922]]();
                document[_0x5E54[924]](_0x5E54[923]);
                $(_0x5E54[497])[_0x5E54[19]]()
            });
            $(_0x5E54[926])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[583]);
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](0, _0x5E6E))
            });
            $(_0x5E54[928])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[583]);
                var _0x5E88 = $(_0x5E54[79])[_0x5E54[139]]();
                $(_0x5E54[79])[_0x5E54[139]](_0x5E54[927] + _0x5E6E + _0x5E54[366] + _0x5E88)
            });
            $(_0x5E54[929])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[583]);
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[719]](_0x5E6E))
            });
            $(_0x5E54[933])[_0x5E54[128]](_0x5E54[785], function() {
                if (_0x6F30[_0x5E54[364]] == undefined) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](4, 0));
                    $(_0x5E54[931])[_0x5E54[449]](_0x5E54[930])
                } else {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](4, 1));
                    $(_0x5E54[931])[_0x5E54[449]](_0x5E54[932])
                }
            });
            $(_0x5E54[934])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[259]) + 1;
                if (_0x5E6E >= 0) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](2, _0x5E6E))
                }
            });
            $(_0x5E54[935])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[259]) + 1;
                if (_0x5E6E >= 0) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](1, _0x5E6E))
                }
            });
            $(_0x5E54[936])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = _0x631A[_0x5E54[373]](_0x5E54[583]);
                if (_0x5E6E >= 0) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[299]](_0x5E6E))
                }
            });
            $(_0x5E54[937])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E88 = parseInt(_0x631A[_0x5E54[373]](_0x5E54[583]));
                var _0x5E6E = _0x5F8C(_0x5E88);
                _0x6F30[_0x5E54[143]](_0x5E6E)
            });
            $(document)[_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                _0x631A[_0x5E54[19]]();
                if (_0x5E6E[_0x5E54[123]][_0x5E54[122]] !== _0x5E54[938]) {
                    $(_0x5E54[902])[_0x5E54[19]]()
                };
                if ($(_0x5E54[497])[_0x5E54[15]](_0x5E54[14]) !== _0x5E54[16] && _0x5E6E[_0x5E54[123]][_0x5E54[122]] !== _0x5E54[939]) {
                    $(_0x5E54[497])[_0x5E54[19]]()
                }
            });
            $(_0x5E54[941])[_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                _0x6028();
                _0x6848(_0x6C58);
                _0x7340($(_0x5E54[940]))
            });
            $(_0x5E54[942])[_0x5E54[128]](_0x5E54[562], _0x61C8);
            $(_0x5E54[943])[_0x5E54[128]](_0x5E54[785], _0x6194);
            $(_0x5E54[944])[_0x5E54[128]](_0x5E54[785], _0x61AE);
            $(_0x5E54[945])[_0x5E54[128]](_0x5E54[785], _0x61FC);
            $(_0x5E54[950])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[946])[_0x5E54[449]]($(this)[_0x5E54[449]]());
                $(_0x5E54[948])[_0x5E54[589]](_0x5E54[947], $(this)[_0x5E54[589]](_0x5E54[122]))[_0x5E54[139]](_0x5E54[1]);
                _0x6848(_0x6C58);
                _0x7340($(_0x5E54[949]))
            });
            $(_0x5E54[953])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x6D42[_0x5E54[637]]) {
                    _0x65F2()
                };
                var _0x5E88 = $(_0x5E54[948])[_0x5E54[139]]();
                if (_0x5E88) {
                    var _0x5E6E = $(_0x5E54[948])[_0x5E54[589]](_0x5E54[947]);
                    if (_0x5E6E[_0x5E54[197]](0) == _0x5E54[951] && _0x74FA[_0x5E6E] != null) {
                        _0x72BE(_0x5E6E, _0x5E88)
                    }
                };
                $(_0x5E54[952])[_0x5E54[563]](_0x5E54[785])
            });
            $(_0x5E54[954])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x6D42[_0x5E54[637]]) {
                    _0x65F2()
                };
                var _0x5E6E = $(_0x5E54[948])[_0x5E54[589]](_0x5E54[947]);
                if (_0x5E6E[_0x5E54[197]](0) == _0x5E54[951] && _0x74FA[_0x5E6E] != null) {
                    _0x72BE(_0x5E6E, _0x5E54[1])
                }
            });
            $(_0x5E54[949])[_0x5E54[128]](_0x5E54[959], false)[_0x5E54[128]](_0x5E54[955], function(_0x5E6E) {
                if (!_0x6D42[_0x5E54[637]]) {
                    _0x65F2()
                };
                var _0x5EA2 = $(_0x5E54[948])[_0x5E54[589]](_0x5E54[947]);
                if (_0x5EA2[_0x5E54[197]](0) == _0x5E54[951] && _0x74FA[_0x5EA2] != null) {
                    var _0x5E88 = _0x66DC(_0x5E6E[_0x5E54[125]]);
                    if (/\.(jpe?g|png|gif)$/i [_0x5E54[956]](_0x5E88[_0x5E54[136]])) {
                        var _0x5EBC = new FileReader();
                        _0x5EBC[_0x5E54[130]](_0x5E54[694], function() {
                            _0x72BE(_0x5EA2, this[_0x5E54[957]])
                        }, false);
                        _0x5EBC[_0x5E54[958]](_0x5E88)
                    }
                };
                return false
            });
            $(_0x5E54[961])[_0x5E54[128]](_0x5E54[785], function() {
                _0x7596();
                _0x6848(_0x6C58);
                _0x7340($(_0x5E54[960]))
            });
            $(_0x5E54[964])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x6D42[_0x5E54[637]]) {
                    return
                };
                var _0x5E88 = _0x5E54[962];
                var _0x5E6E = JSON[_0x5E54[53]](_0x74FA, null, 2);
                _0x64BA(_0x5E88, _0x5E6E, _0x5E54[963])
            });
            $(_0x5E54[966])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[965])[_0x5E54[563]](_0x5E54[785])
            });
            $(_0x5E54[965])[_0x5E54[128]](_0x5E54[562], function() {
                var _0x5E88 = $(this)[_0x5E54[565]](_0x5E54[967]);
                if (_0x5E88[_0x5E54[9]] > 0) {
                    var _0x5E6E = _0x5E88[0];
                    _0x6BD6(_0x5E6E)
                }
            });
            $(_0x5E54[968])[_0x5E54[128]](_0x5E54[959], false)[_0x5E54[128]](_0x5E54[955], function(_0x5E6E) {
                var _0x5E88 = _0x66DC(_0x5E6E[_0x5E54[125]]);
                _0x6BD6(_0x5E88);
                return false
            });
            $(_0x5E54[970])[_0x5E54[128]](_0x5E54[562], function() {
                if (!_0x7632 || _0x668E) {
                    return
                };
                _0x668E = true;
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[969], {
                        method: _0x5E54[150],
                        headers: {
                            'Content-Type': _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88
                        })
                    })[_0x5E54[346]](((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    }))[_0x5E54[346]]((_0x5E6E) => {
                        _0x668E = false;
                        $(this)[_0x5E54[565]](_0x5E54[594], _0x5E6E[_0x5E54[733]])
                    })[_0x5E54[344]]((_0x5E6E) => {
                        console[_0x5E54[11]](_0x5E6E);
                        _0x668E = false;
                        alert(_0x5E6E)
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    _0x67C6(_0x5E54, true);
                    _0x668E = false
                })
            });
            firebase[_0x5E54[32]]()[_0x5E54[1027]](function(_0x5E6E) {
                if (_0x5E6E) {
                    if (!_0x6334[_0x5E54[971]]) {
                        firebase[_0x5E54[32]]()[_0x5E54[972]]()[_0x5E54[346]](function() {});
                        return
                    };
                    _0x730C();
                    if (_0x6F30[_0x5E54[220]]() && firebase[_0x5E54[32]]()[_0x5E54[343]] !== null) {
                        firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]](true)[_0x5E54[346]]((_0x5E6E) => {
                            _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[345]](_0x5E6E))
                        })[_0x5E54[344]]((_0x5E54) => {
                            return _0x67C6(_0x5E54, true)
                        })
                    };
                    var _0x5E88 = firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5E54[973] + _0x5E6E[_0x5E54[522]]);
                    var _0x5EBC = false;
                    _0x5E88[_0x5E54[128]](_0x5E54[138], function(_0x5F3E) {
                        var _0x5ED6 = _0x5F3E[_0x5E54[139]]();
                        if (!_0x5ED6) {
                            return
                        };
                        if (!_0x5EBC) {
                            $(_0x5E54[974])[_0x5E54[19]]();
                            $(_0x5E54[975])[_0x5E54[17]]();
                            $(_0x5E54[975])[_0x5E54[589]](_0x5E54[321], _0x5E54[976]);
                            $(_0x5E54[970])[_0x5E54[599]](_0x5E54[597]);
                            $(_0x5E54[970])[_0x5E54[565]](_0x5E54[594], _0x5ED6[_0x5E54[412]][_0x5E54[977]]);
                            _0x5EBC = true
                        };
                        _0x7632 = _0x5ED6;
                        $(_0x5E54[978])[_0x5E54[589]](_0x5E54[701], _0x5ED6[_0x5E54[762]]);
                        $(_0x5E54[979])[_0x5E54[449]](_0x5ED6[_0x5E54[764]]);
                        _0x6382($(_0x5E54[979]), _0x5ED6);
                        $(_0x5E54[982])[_0x5E54[230]](_0x5E54[802] + _0x5ED6[_0x5E54[804]][_0x5E54[803]] + _0x5E54[980] + _0x6626(_0x5ED6[_0x5E54[804]][_0x5E54[806]]) + _0x5E54[4] + _0x6626(_0x5ED6[_0x5E54[804]][_0x5E54[807]]) + _0x5E54[981]);
                        $(_0x5E54[984])[_0x5E54[20]](function() {
                            var _0x5E6E = ((_0x5ED6[_0x5E54[804]][_0x5E54[806]] / _0x5ED6[_0x5E54[804]][_0x5E54[807]]) * 100);
                            $(this)[_0x5E54[203]]({
                                width: _0x5E6E + _0x5E54[983]
                            }, 1200)
                        });
                        if (!_0x6F30[_0x5E54[279]][_0x5E54[985]]) {
                            _0x6F30[_0x5E54[279]][_0x5E54[985]] = firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5E54[988] + _0x7632[_0x5E54[522]])[_0x5E54[128]](_0x5E54[138], function(_0x5ED6) {
                                var _0x5E6E = _0x5ED6[_0x5E54[139]]();
                                if (!_0x5E6E) {
                                    return
                                };
                                _0x5EA2 = {};
                                for (var _0x5E88 in _0x5E6E) {
                                    var _0x5EBC = _0x5E6E[_0x5E88];
                                    if (_0x5EBC[_0x5E54[757]]) {
                                        _0x5EA2[_0x5EBC[_0x5E54[136]]] = new _0x7256(_0x5EBC[_0x5E54[136]], _0x5EBC[_0x5E54[290]] + _0x5E54[2] + _0x5EBC[_0x5E54[986]], _0x5E54[987], _0x5EBC[_0x5E54[157]], _0x5EBC[_0x5E54[137]], _0x5EBC[_0x5E54[158]], 0)
                                    }
                                };
                                _0x6B3A();
                                if (_0x71EE != null) {
                                    _0x7222(_0x71EE[_0x5E54[136]])
                                }
                            })
                        };
                        if (_0x5ED6[_0x5E54[412]][_0x5E54[989]] && !_0x6F30[_0x5E54[279]][_0x5E54[990]]) {
                            _0x6F30[_0x5E54[279]][_0x5E54[990]] = firebase[_0x5E54[1005]]()[_0x5E54[1004]](_0x5E54[1003])[_0x5E54[1002]](_0x7632[_0x5E54[522]])[_0x5E54[1001]]((_0x5E6E) => {
                                if (_0x5E6E[_0x5E54[991]]) {
                                    $(_0x5E54[994])[_0x5E54[449]](_0x5E54[992] + _0x5E6E[_0x5E54[373]]()[_0x5E54[764]] + _0x5E54[13] + _0x5E6E[_0x5E54[373]]()[_0x5E54[993]]);
                                    $(_0x5E54[994])[_0x5E54[17]]();
                                    $(_0x5E54[995])[_0x5E54[19]]();
                                    $(_0x5E54[996])[_0x5E54[17]]();
                                    $(_0x5E54[999])[_0x5E54[15]](_0x5E54[997], _0x5E54[998])
                                } else {
                                    $(_0x5E54[994])[_0x5E54[19]]();
                                    $(_0x5E54[996])[_0x5E54[19]]();
                                    $(_0x5E54[995])[_0x5E54[17]]();
                                    $(_0x5E54[999])[_0x5E54[15]](_0x5E54[997], _0x5E54[1000])
                                }
                            })
                        };
                        if (_0x5ED6[_0x5E54[1006]] !== undefined) {
                            var _0x5F0A = new Date();
                            _0x5F0A[_0x5E54[1008]](_0x5F0A[_0x5E54[1007]]() + _0x5ED6[_0x5E54[1006]]);
                            if (_0x5ED6[_0x5E54[1006]] == 0) {
                                $(_0x5E54[1009])[_0x5E54[19]]();
                                $(_0x5E54[1011])[_0x5E54[449]](_0x5E54[1010])
                            } else {
                                $(_0x5E54[1009])[_0x5E54[17]]();
                                $(_0x5E54[1011])[_0x5E54[449]](_0x5E54[1012] + _0x5ED6[_0x5E54[1006]] + _0x5E54[1013] + _0x5F0A[_0x5E54[618]]());
                                $(_0x5E54[1014])[_0x5E54[589]](_0x5E54[214], _0x5ED6[_0x5E54[1006]])
                            }
                        } else {
                            $(_0x5E54[1011])[_0x5E54[449]](_0x5E54[1010])
                        };
                        if (_0x7632[_0x5E54[809]] && _0x7632[_0x5E54[809]] > 0 && _0x7618 && _0x7618[_0x5E54[146]] && _0x7618[_0x5E54[146]][_0x5E54[9]] > 0) {
                            var _0x5E88 = $(_0x5E54[1015]);
                            var _0x5F24 = 0;
                            for (var _0x5EF0 = 0; _0x5EF0 < _0x7618[_0x5E54[146]][_0x5E54[9]]; _0x5EF0++) {
                                if (_0x7618[_0x5E54[146]][_0x5EF0] == _0x7632[_0x5E54[809]]) {
                                    _0x5F24 = _0x5EF0 + 1
                                }
                            };
                            if (_0x5F24 > 0) {
                                _0x5E88[_0x5E54[139]](_0x5F24)
                            }
                        };
                        if (!_0x6F30[_0x5E54[279]][_0x5E54[1016]]) {
                            _0x6F30[_0x5E54[279]][_0x5E54[1016]] = firebase[_0x5E54[149]]()[_0x5E54[148]](_0x5E54[1024] + _0x5E6E[_0x5E54[522]])[_0x5E54[128]](_0x5E54[138], function(_0x5ED6) {
                                var _0x5E88 = _0x5ED6[_0x5E54[139]]();
                                if (!_0x5E88) {
                                    return
                                };
                                _0x7618 = _0x5E88;
                                if (_0x7618[_0x5E54[146]] && _0x7618[_0x5E54[146]][_0x5E54[9]] > 0) {
                                    var _0x5E6E = $(_0x5E54[1015]);
                                    var _0x5EBC = 0;
                                    _0x5E6E[_0x5E54[508]]();
                                    _0x5E6E[_0x5E54[512]](_0x5E54[1017]);
                                    for (var _0x5EA2 = 0; _0x5EA2 < _0x5E88[_0x5E54[146]][_0x5E54[9]]; _0x5EA2++) {
                                        _0x5E6E[_0x5E54[512]](_0x5E54[559] + (_0x5EA2 + 1) + _0x5E54[560] + _0x752E[_0x7618[_0x5E54[146]][_0x5EA2]] + _0x5E54[561]);
                                        if (_0x7618[_0x5E54[146]][_0x5EA2] == _0x7632[_0x5E54[809]]) {
                                            _0x5EBC = _0x5EA2 + 1
                                        }
                                    };
                                    if (_0x5EBC > 0) {
                                        _0x5E6E[_0x5E54[139]](_0x5EBC)
                                    };
                                    _0x5E6E[_0x5E54[15]](_0x5E54[14], _0x5E54[1018])
                                } else {
                                    $(_0x5E54[1015])[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
                                };
                                if (_0x7618[_0x5E54[733]] && _0x7618[_0x5E54[733]][_0x5E54[809]] && _0x7618[_0x5E54[733]][_0x5E54[1019]] && !_0x7618[_0x5E54[733]][_0x5E54[1020]]) {
                                    $(_0x5E54[1021])[_0x5E54[449]](_0x7618[_0x5E54[733]][_0x5E54[809]]);
                                    $(_0x5E54[1022])[_0x5E54[230]](_0x7618[_0x5E54[733]][_0x5E54[1019]]);
                                    _0x7340($(_0x5E54[1023]));
                                    _0x6848(_0x6C58)
                                }
                            })
                        };
                        if (_0x67E0) {
                            _0x6B6E(_0x7632)
                        };
                        _0x6A84(_0x5E6E[_0x5E54[522]])
                    })
                } else {
                    $(_0x5E54[970])[_0x5E54[589]](_0x5E54[597]);
                    if (!_0x6334[_0x5E54[971]]) {
                        $(_0x5E54[975])[_0x5E54[19]]();
                        $(_0x5E54[974])[_0x5E54[19]]();
                        $(_0x5E54[1025])[_0x5E54[19]]();
                        $(_0x5E54[1026])[_0x5E54[17]]()
                    } else {
                        $(_0x5E54[975])[_0x5E54[19]]();
                        $(_0x5E54[974])[_0x5E54[19]]();
                        $(_0x5E54[1026])[_0x5E54[19]]();
                        $(_0x5E54[1025])[_0x5E54[17]]()
                    }
                }
            });
            $(_0x5E54[1029])[_0x5E54[128]](_0x5E54[785], function() {
                if (_0x6334[_0x5E54[971]]) {
                    firebase[_0x5E54[32]]()[_0x5E54[1028]](_0x5EF0)[_0x5E54[346]](function(_0x5E54) {})[_0x5E54[344]]((_0x5E54) => {
                        return _0x67C6(_0x5E54, true)
                    })
                }
            });
            $(_0x5E54[1030])[_0x5E54[128]](_0x5E54[785], function() {
                firebase[_0x5E54[32]]()[_0x5E54[972]]()[_0x5E54[346]](function() {
                    $(_0x5E54[975])[_0x5E54[19]](500);
                    $(_0x5E54[1025])[_0x5E54[17]]();
                    $(_0x5E54[994])[_0x5E54[19]]();
                    $(_0x5E54[999])[_0x5E54[17]]()
                })[_0x5E54[344]]((_0x5E54) => {
                    return _0x67C6(_0x5E54, true)
                })
            });
            $(_0x5E54[1032])[_0x5E54[128]](_0x5E54[785], function() {
                window[_0x5E54[852]](_0x5E54[1031], _0x5E54[851])
            });
            $(_0x5E54[1033])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x7632) {
                    return
                };
                _0x6B6E(_0x7632);
                _0x7340($(_0x5E54[786]));
                _0x6848($(_0x6C58))
            });
            $(_0x5E54[1034])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6848($(_0x5E54[786]));
                _0x7340($(_0x6C58))
            });
            $(_0x5E54[1035])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6B06(_0x7632, _0x6C58)
            });
            $(_0x5E54[1036])[_0x5E54[128]](_0x5E54[785], function() {
                _0x7548(_0x6C58);
                _0x6848($(_0x5E54[113]))
            });
            $(_0x5E54[1037])[_0x5E54[128]](_0x5E54[785], function() {
                _0x7548(_0x6C58);
                _0x6848($(_0x5E54[960]))
            });
            
            function _0x5EBC(_0x5E88, _0x5E6E) {
                if (_0x5E88) {
                    $(_0x5E6E)[_0x5E54[565]](_0x5E54[597], false);
                    $(_0x5E6E)[_0x5E54[449]](_0x5E54[1038]);
                    return
                };
                $(_0x5E6E)[_0x5E54[565]](_0x5E54[597], true);
                $(_0x5E6E)[_0x5E54[449]](_0x5E54[304])
            }
            $(_0x5E54[1015])[_0x5E54[128]](_0x5E54[562], function() {
                if (_0x668E) {
                    return
                };
                var _0x5E88 = parseInt($(this)[_0x5E54[139]]());
                _0x668E = true;
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5EA2) => {
                    fetch(_0x5E6E + _0x5E54[1039], {
                        method: _0x5E54[150],
                        headers: {
                            'Content-Type': _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5EA2,
                            title: _0x5E88
                        })
                    })[_0x5E54[346]](((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    }))[_0x5E54[346]]((_0x5E54) => {
                        _0x668E = false
                    })[_0x5E54[344]]((_0x5E6E) => {
                        console[_0x5E54[11]](_0x5E6E);
                        _0x668E = false
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    _0x67C6(_0x5E54, true);
                    _0x668E = false
                })
            });
            $(_0x5E54[1041])[_0x5E54[128]](_0x5E54[785], function() {
                if (_0x668E) {
                    return
                };
                _0x6848($(_0x5E54[1023]));
                _0x7548(_0x6C58);
                _0x668E = true;
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[1040], {
                        method: _0x5E54[150],
                        headers: {
                            'Content-Type': _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88
                        })
                    })[_0x5E54[346]](((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    }))[_0x5E54[346]]((_0x5E54) => {
                        _0x668E = false
                    })[_0x5E54[344]]((_0x5E6E) => {
                        console[_0x5E54[11]](_0x5E6E);
                        _0x668E = false
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    _0x67C6(_0x5E54, true);
                    _0x668E = false
                })
            });
            $(_0x5E54[1046])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x7632) {
                    return
                };
                _0x5EBC(false, this);
                var _0x5E88 = $(_0x5E54[1042])[_0x5E54[139]]();
                if (!_0x5E88 || _0x5E88 == _0x5E54[1] || _0x5E88[_0x5E54[1043]]() == _0x5E54[1]) {
                    alert(_0x5E54[1044]);
                    _0x5EBC(true, this);
                    return
                };
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5EA2) => {
                    fetch(_0x5E6E + _0x5E54[1045], {
                        method: _0x5E54[150],
                        headers: {
                            'Content-Type': _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5EA2,
                            username: _0x5E88
                        })
                    })[_0x5E54[346]]((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    })[_0x5E54[346]]((_0x5E6E) => {
                        _0x5EBC(true, this);
                        if (_0x5E6E[_0x5E54[734]] == 200) {
                            _0x7548(_0x6C58);
                            $(_0x5E54[114])[_0x5E54[19]]();
                            return
                        };
                        alert(_0x5E6E[_0x5E54[733]])
                    })[_0x5E54[344]]((_0x5E6E) => {
                        console[_0x5E54[11]](_0x5E6E);
                        alert(_0x5E6E);
                        _0x5EBC(true, this)
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    _0x5EBC(true, this);
                    _0x67C6(_0x5E54, true)
                })
            });
            $(_0x5E54[1047])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6862();
                _0x7548(_0x6C58)
            });
            $(_0x5E54[995])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x7632) {
                    return
                };
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E6E) => {
                    window[_0x5E54[852]](_0x5E54[1048] + _0x5E6E, _0x5E54[1049], _0x5E54[1050])
                })
            });
            $(_0x5E54[996])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x7632) {
                    return
                };
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[1051], {
                        method: _0x5E54[150],
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88
                        }),
                        headers: {
                            'Content-Type': _0x5E54[793]
                        }
                    })[_0x5E54[346]]((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    })[_0x5E54[346]]((_0x5E6E) => {
                        alert(_0x5E6E[_0x5E54[733]])
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    return _0x67C6(_0x5E54)
                })
            });
            $(_0x5E54[1009])[_0x5E54[1055]](function(_0x5E88) {
                _0x5E88[_0x5E54[109]]();
                if (!_0x7632) {
                    return
                };
                if (!confirm(_0x5E54[1052])) {
                    return
                };
                var _0x5EA2 = $(_0x5E54[1053])[_0x5E54[139]]();
                var _0x5EBC = $(_0x5E54[1014])[_0x5E54[139]]();
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[1054], {
                        method: _0x5E54[150],
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88,
                            name: _0x5EA2,
                            spend: parseInt(_0x5EBC)
                        }),
                        headers: {
                            'Content-Type': _0x5E54[793]
                        }
                    })[_0x5E54[346]]((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    })[_0x5E54[346]]((_0x5E6E) => {
                        alert(_0x5E6E[_0x5E54[733]]);
                        if (_0x5E6E[_0x5E54[734]] === 200) {
                            _0x6A84(_0x7632[_0x5E54[522]])
                        }
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    return _0x67C6(_0x5E54)
                })
            });
            $(_0x5E54[1056])[_0x5E54[128]](_0x5E54[785], function() {
                $(this)[_0x5E54[19]]()
            });
            $(_0x5E54[1060])[_0x5E54[128]](_0x5E54[785], function(_0x5E88) {
                _0x5E88[_0x5E54[109]]();
                if (!_0x7632) {
                    return
                };
                var _0x5EBC = prompt(_0x5E54[1057]);
                if (!_0x5EBC) {
                    return
                };
                var _0x5EA2 = _0x5EBC[_0x5E54[687]](/\s/g, _0x5E54[1]);
                if (typeof _0x5EBC !== _0x5E54[1058] || _0x5EA2[_0x5E54[9]] === 0) {
                    return alert(_0x5E54[1059])
                };
                firebase[_0x5E54[32]]()[_0x5E54[343]][_0x5E54[347]]()[_0x5E54[346]]((_0x5E88) => {
                    fetch(_0x5E6E + _0x5E54[792], {
                        method: _0x5E54[150],
                        headers: {
                            "Content-Type": _0x5E54[793]
                        },
                        body: JSON[_0x5E54[53]]({
                            token: _0x5E88,
                            target: _0x5EA2,
                            action: 1
                        })
                    })[_0x5E54[346]]((_0x5E6E) => {
                        return _0x5E6E[_0x5E54[151]]()
                    })[_0x5E54[346]]((_0x5E6E) => {
                        alert(_0x5E6E[_0x5E54[733]])
                    })
                })[_0x5E54[344]]((_0x5E54) => {
                    return _0x67C6(_0x5E54, true)
                })
            });
            document[_0x5E54[69]](_0x5E54[531])[_0x5E54[477]] = _0x6E60;
            $(document)[_0x5E54[879]](function(_0x5E6E) {
                if (_0x5E6E[_0x5E54[107]] == 13) {
                    var _0x5E88 = $(_0x5E54[79]);
                    if (document[_0x5E54[1062]][_0x5E54[1061]] != _0x5E54[1063]) {
                        var _0x5EA2 = _0x5E88[0];
                        if (_0x5EA2) {
                            _0x5EA2[_0x5E54[1064]](_0x5EA2[_0x5E54[138]][_0x5E54[9]], _0x5EA2[_0x5E54[138]][_0x5E54[9]])
                        };
                        _0x5E88[_0x5E54[883]]()
                    } else {
                        if (_0x5E88[_0x5E54[111]](_0x5E54[110])) {
                            _0x5E88[_0x5E54[1065]]()
                        }
                    }
                }
            });
            $(window)[_0x5E54[281]](_0x5E54[1066], function() {
                return _0x5E54[1067]
            });
            _0x711E();
            $(_0x5E54[1069])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[1069])[_0x5E54[817]](_0x5E54[1068]);
                $(this)[_0x5E54[816]](_0x5E54[1068]);
                _0x699A = true
            });
            $(_0x5E54[1070])[_0x5E54[128]](_0x5E54[785], function() {
                $(_0x5E54[1069])[_0x5E54[20]](function() {
                    var _0x5E6E = $(this);
                    var _0x5E88 = _0x5E6E[_0x5E54[589]](_0x5E54[122]);
                    if (_0x6452[_0x5E88] != null) {
                        _0x69B4[_0x5E88] = _0x6452[_0x5E88];
                        _0x75B0(_0x5E6E)
                    }
                })
            });
            $(_0x5E54[548])[_0x5E54[128]](_0x5E54[562], function() {
                $(_0x5E54[549])[_0x5E54[21]]()[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
                $(_0x5E54[1071] + $(this)[_0x5E54[139]]())[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
            });
            $(_0x5E54[1072])[_0x5E54[128]](_0x5E54[785], function() {
                var _0x5E6E = parseInt($(_0x5E54[548])[_0x5E54[139]]());
                var _0x5E88 = isNaN(_0x5E6E) ? 0 : Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 0), 100);
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[727]](_0x5E88));
                $(this)[_0x5E54[1065]]()
            });
            $(_0x5E54[1073])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[729]]())
            });
            $(_0x5E54[1074])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[728]](0));
                $(this)[_0x5E54[1065]]()
            });
            $(_0x5E54[1075])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[728]](1))
            });
            $(_0x5E54[1076])[_0x5E54[128]](_0x5E54[785], function() {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[728]](2))
            });
            $(_0x5E54[558])[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                var _0x5EA2 = $(this)[_0x5E54[610]](_0x5E54[609])[_0x5E54[139]]();
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[373]);
                if (_0x5EA2 != _0x5E6E) {
                    $(_0x5E54[584] + _0x5E6E + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[567]], _0x5EA2))
                }
            });
            $(_0x5E54[586])[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                var _0x5EA2 = $(this)[_0x5E54[610]](_0x5E54[609])[_0x5E54[139]]();
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[373]);
                if (_0x5EA2 != _0x5E6E) {
                    $(_0x5E54[591] + _0x5E6E + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[569]], _0x5EA2))
                }
            });
            $(_0x5E54[587])[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                var _0x5EA2 = $(this)[_0x5E54[610]](_0x5E54[609])[_0x5E54[139]]();
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[373]);
                if (_0x5EA2 != _0x5E6E) {
                    $(_0x5E54[592] + _0x5E6E + _0x5E54[585])[_0x5E54[565]](_0x5E54[583], true);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[571]], _0x5EA2))
                }
            });
            $(_0x5E54[590])[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                var _0x5EA2 = $(this)[_0x5E54[139]]();
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[373]);
                if (isNaN(_0x5EA2)) {
                    $(this)[_0x5E54[139]](_0x5E6E);
                    return
                };
                _0x5EA2 = Math[_0x5E54[214]](1, Math[_0x5E54[200]](parseInt(_0x5EA2), 32000));
                if (_0x5EA2 != _0x5E6E) {
                    $(this)[_0x5E54[139]](_0x5E6E);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[573]], _0x5EA2))
                }
            });
            $(_0x5E54[593])[_0x5E54[128]](_0x5E54[562], function(_0x5E88) {
                var _0x5EA2 = $(this)[_0x5E54[139]]();
                var _0x5E6E = $(this)[_0x5E54[589]](_0x5E54[373]);
                if (isNaN(_0x5EA2)) {
                    $(this)[_0x5E54[139]](_0x5E6E);
                    return
                };
                _0x5EA2 = Math[_0x5E54[214]](0, Math[_0x5E54[200]](parseInt(_0x5EA2), 1000));
                if (_0x5EA2 != _0x5E6E) {
                    $(this)[_0x5E54[139]](_0x5E6E);
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[581]], _0x5EA2))
                }
            });
            $(_0x5E54[595])[_0x5E54[128]](_0x5E54[562], function(_0x5E6E) {
                var _0x5E88 = $(this)[_0x5E54[565]](_0x5E54[594]);
                $(this)[_0x5E54[565]](_0x5E54[594], !_0x5E88);
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[612]](_0x6404[_0x5E54[575]], _0x5E88 == true ? 1 : 0))
            })
        }
        
        function _0x6B20() {
            if (window[_0x5E54[1077]] === undefined) {
                return
            };
            _0x6090 = window[_0x5E54[1077]];
            window[_0x5E54[1077]] = undefined;
            _0x6090[_0x5E54[1078]](function() {})
        }
        
        function _0x65BE() {
            _0x6090[_0x5E54[1081]](_0x5E54[1079], {
                action: _0x5E54[1080]
            })[_0x5E54[346]](function(_0x5E6E) {
                _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[730]](_0x5E6E));
                document[_0x5E54[521]][_0x5E54[520]][_0x5E54[417]](_0x5E54[519]);
                if (!_0x6F30[_0x5E54[270]]) {
                    _0x6F30[_0x5E54[286]]()
                } else {
                    _0x6F30[_0x5E54[298]]()
                }
            })
        }
        
        function _0x6A6A() {
            _0x660C(function(_0x5E6E) {
                $(_0x5E54[13] + _0x5E6E)[_0x5E54[1084]]({
                    color: _0x74FA[_0x5E6E],
                    preferredFormat: _0x5E54[1082],
                    showInput: true,
                    showAlpha: true,
                    clickoutFiresChange: false,
                    change: function(_0x5E88) {
                        _0x74FA[_0x5E6E] = _0x5E88[_0x5E54[1083]]();
                        _0x7138(_0x5E6E, _0x74FA[_0x5E6E])
                    }
                })
            });
            $(_0x5E54[1086])[_0x5E54[1084]](_0x5E54[550], _0x5E54[1085], false);
            $(_0x5E54[1087])[_0x5E54[1084]](_0x5E54[550], _0x5E54[1085], false);
            $(_0x5E54[1090])[_0x5E54[1084]]({
                preferredFormat: _0x5E54[1082],
                showInput: true,
                chooseText: _0x5E54[1088],
                flat: true,
                clickoutFiresChange: false,
                change: function(_0x5E6E) {
                    if (!_0x6D42[_0x5E54[637]]) {
                        _0x65F2()
                    };
                    var _0x5E88 = _0x5E6E[_0x5E54[243]]();
                    if (!_0x74FA[_0x5E54[1089]][_0x5E54[466]](_0x5E88)) {
                        _0x74FA[_0x5E54[1089]][_0x5E54[161]](_0x5E88);
                        _0x7596()
                    }
                }
            })
        }
        
        function _0x7596() {
            var _0x5EA2 = $(_0x5E54[1091]);
            _0x5EA2[_0x5E54[508]]();
            if (_0x74FA[_0x5E54[1089]][_0x5E54[9]] == 0) {
                _0x70EA();
                return
            };
            try {
                for (var _0x5E88 in _0x74FA[_0x5E54[1089]]) {
                    var _0x5E6E = _0x74FA[_0x5E54[1089]][_0x5E88];
                    _0x5EA2[_0x5E54[512]](_0x5E54[1092] + _0x5E6E + _0x5E54[1093] + _0x5E6E + _0x5E54[1094] + _0x6918(_0x5E6E) + _0x5E54[1095] + _0x5E6E + _0x5E54[1096])
                };
                $(_0x5E54[1101])[_0x5E54[128]](_0x5E54[785], function() {
                    var _0x5EA2 = $(this)[_0x5E54[1099]]()[_0x5E54[1098]](1)[_0x5E54[589]](_0x5E54[1097]);
                    var _0x5E6E, _0x5E88;
                    while ((_0x5E6E = _0x74FA[_0x5E54[1089]][_0x5E54[685]](_0x5EA2)) !== -1) {
                        _0x74FA[_0x5E54[1089]][_0x5E54[1100]](_0x5E6E, 1);
                        _0x5E88 = true
                    };
                    if (_0x5E88) {
                        _0x7596()
                    }
                })
            } catch (e) {
                _0x74FA[_0x5E54[1089]] = [];
                _0x5EA2[_0x5E54[508]]()
            };
            _0x70EA()
        }
        
        function _0x70EA() {
            _0x63D0 = [];
            for (var _0x5E6E of _0x74FA[_0x5E54[1089]]) {
                _0x63D0[_0x5E54[161]](_0x6EE2[_0x5E54[246]][_0x5E54[245]](_0x5E6E))
            };
            for (var _0x5E88 in _0x6F30[_0x5E54[201]]) {
                _0x6F30[_0x5E54[201]][_0x5E88][_0x5E54[635]] = true
            }
        }
        
        function _0x5F58(_0x5EA2) {
            var _0x5E88 = $(_0x5E54[1102]);
            _0x699A = false;
            if (_0x5E88[_0x5E54[208]]() == 0) {
                return
            };
            var _0x5E6E = _0x5E88[_0x5E54[1103]]();
            _0x5E88[_0x5E54[817]](_0x5E54[1068]);
            if (_0x5EA2 != 27) {
                _0x69B4[_0x5E6E[_0x5E54[589]](_0x5E54[122])] = _0x5EA2
            } else {
                _0x69B4[_0x5E6E[_0x5E54[589]](_0x5E54[122])] = -1
            };
            _0x75B0(_0x5E6E)
        }
        
        function _0x75B0(_0x5E6E) {
            var _0x5E88 = _0x69B4[_0x5E6E[_0x5E54[589]](_0x5E54[122])];
            _0x5E6E[_0x5E54[230]](_0x69E8(_0x5E88))
        }
        
        function _0x69E8(_0x5E6E) {
            return _0x5E6E > 0 ? _0x69CE[_0x5E6E][_0x5E54[135]]() : _0x5E54[1104]
        }
        
        function _0x6AB8() {
            var _0x5E6E = document[_0x5E54[69]](_0x5E54[1105]);
            if (_0x6D42[_0x5E54[177]] || !_0x658A[_0x5E54[35]]) {
                _0x5E6E[_0x5E54[321]][_0x5E54[1106]] = _0x5E54[1107]
            } else {
                if (_0x658A[_0x5E54[35]]) {
                    _0x5E6E[_0x5E54[321]][_0x5E54[1106]] = _0x5E54[1108] + _0x658A[_0x5E54[834]] + _0x5E54[1109]
                }
            }
        }
        
        function _0x6A9E() {
            _0x6B88();
            _0x653C = {};
            gifEmoteList = {};
            for (var _0x5E88 in _0x7068) {
                var _0x5E6E = _0x7068[_0x5E88];
                $(_0x5E54[1112])[_0x5E54[512]](_0x5E54[1110] + _0x5E6E + _0x5E54[873] + _0x5E6E + _0x5E54[874] + _0x5E6E + _0x5E54[1111]);
                _0x653C[_0x5E6E] = true
            };
            for (var _0x5E88 in _0x675E) {
                var _0x5E6E = _0x675E[_0x5E88];
                $(_0x5E54[1114])[_0x5E54[512]](_0x5E54[1110] + _0x5E6E + _0x5E54[873] + _0x5E6E + _0x5E54[877] + _0x5E6E + _0x5E54[1113]);
                gifEmoteList[_0x5E6E] = true
            };
            for (var _0x5E88 = 0; _0x5E88 < _0x6556[_0x5E54[9]]; _0x5E88++) {
                var _0x5ED6 = _0x6556[_0x5E88];
                $(_0x5E54[1117])[_0x5E54[512]](_0x5E54[1115] + (_0x5E88 + 1) + _0x5E54[1116] + _0x5ED6[_0x5E54[197]](0)[_0x5E54[135]]() + _0x5ED6[_0x5E54[133]](1) + _0x5E54[561]);
                var _0x5EBC = new Image();
                _0x5EBC[_0x5E54[701]] = _0x5E54[1118] + _0x5ED6 + _0x5E54[703];
                _0x6556[_0x5E88] = _0x5EBC
            };
            if (_0x658A[_0x5E54[35]] && _0x658A[_0x5E54[1119]]) {
                _0x65A4 = new Image();
                _0x65A4[_0x5E54[701]] = _0x5E54[1120] + _0x658A[_0x5E54[834]] + _0x5E54[1121]
            };
            _0x6AEC();
            for (var _0x5E88 = 0; _0x5E88 < _0x6CDA[_0x5E54[9]]; _0x5E88++) {
                var _0x5EA2 = _0x5E88;
                gifFrames({
                    url: _0x5E54[1122] + _0x6CDA[_0x5EA2] + _0x5E54[692],
                    frames: _0x5E54[359],
                    cumulative: false,
                    outputType: _0x5E54[68]
                })[_0x5E54[346]](function(_0x5E6E) {
                    var _0x5E88 = new _0x6778();
                    _0x5E88[_0x5E54[689]](_0x5E6E);
                    _0x6CC0[_0x5EA2] = _0x5E88
                })
            }
        }
        
        function _0x6B88() {
            var _0x5E6E, _0x5ED6;
            if (!_0x6D42[_0x5E54[177]] && _0x658A[_0x5E54[35]]) {
                _0x5E6E = _0x5E54[1120] + _0x658A[_0x5E54[834]];
                _0x5ED6 = _0x5E54[1123]
            } else {
                _0x5E6E = _0x5E54[1124];
                _0x5ED6 = _0x5E54[1125]
            };
            var _0x5E88 = new Image();
            _0x5E88[_0x5E54[130]](_0x5E54[694], function() {
                _0x742A = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E88);
                if (_0x6F30) {
                    for (var _0x5E6E in _0x6F30[_0x5E54[205]]) {
                        var _0x5EA2 = _0x6F30[_0x5E54[205]][_0x5E6E];
                        if (_0x5EA2[_0x5E54[431]] == 3) {
                            _0x5EA2[_0x5E54[635]] = true
                        }
                    }
                }
            });
            var _0x5EA2 = new Image();
            _0x5EA2[_0x5E54[130]](_0x5E54[694], function() {
                _0x7444 = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5EA2);
                if (_0x6F30) {
                    for (var _0x5E6E in _0x6F30[_0x5E54[205]]) {
                        var _0x5E88 = _0x6F30[_0x5E54[205]][_0x5E6E];
                        if (_0x5E88[_0x5E54[431]] == 4) {
                            _0x5E88[_0x5E54[635]] = true
                        }
                    }
                }
            });
            var _0x5EBC = new Image();
            _0x5EBC[_0x5E54[130]](_0x5E54[694], function() {
                _0x745E = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5EBC);
                if (_0x6F30) {
                    for (var _0x5E6E in _0x6F30[_0x5E54[205]]) {
                        var _0x5E88 = _0x6F30[_0x5E54[205]][_0x5E6E];
                        if (_0x5E88[_0x5E54[431]] == 4) {
                            _0x5E88[_0x5E54[635]] = true
                        }
                    }
                }
            });
            _0x5E88[_0x5E54[701]] = _0x5E6E + _0x5E54[1126];
            _0x5EA2[_0x5E54[701]] = _0x5E6E + _0x5E54[1125];
            _0x5EBC[_0x5E54[701]] = _0x5E6E + _0x5ED6
        }
        const _0x6230 = {
            "cDisableAA": function() {
                if (_0x6EFC) {
                    $(_0x5E54[1128])[_0x5E54[15]](_0x5E54[14], _0x5E54[1127])
                }
            },
            "sRenderType": function() {
                if (_0x6EFC) {
                    $(_0x5E54[1128])[_0x5E54[15]](_0x5E54[14], _0x5E54[1127])
                }
            },
            "cHideId": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1129]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1130])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cHideServerDisplay": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1131]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1132])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cTransCells": function() {
                _0x612C[_0x5E54[1133]] = _0x6D42[_0x5E54[1134]] ? 0.5 : 1.0
            },
            "cColoredCellCount": function() {
                _0x6F30[_0x5E54[439]](_0x64A0[_0x5E54[96]], true)
            },
            "cHideChat": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1135]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cHideMinimap": function() {
                var _0x5E6E = _0x6D42[_0x5E54[225]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1137])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cHideScorePanel": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1138]] ? _0x5E54[16] : _0x5E54[1018];
                $(_0x5E54[76])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cHideLeaderboard": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1139]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1140])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cHideExtraPanel": function() {
                var _0x5E6E = _0x6D42[_0x5E54[1141]] ? _0x5E54[16] : _0x5E54[18];
                $(_0x5E54[1142])[_0x5E54[15]](_0x5E54[14], _0x5E6E)
            },
            "cShowCoordinates": function() {
                var _0x5E6E = _0x6D42[_0x5E54[226]] ? _0x5E54[18] : _0x5E54[16];
                $(_0x5E54[98])[_0x5E54[15]](_0x5E54[14], _0x5E6E);
                _0x711E()
            },
            "cDisableAutoZoom": function() {
                if (_0x6D42[_0x5E54[212]]) {
                    _0x6F30[_0x5E54[213]] = 0.25 * Math[_0x5E54[214]](_0x605C[_0x5E54[190]] / 1080, _0x605C[_0x5E54[187]] / 1920)
                }
            },
            "cThemeEnabled": function() {
                if (!_0x6D42[_0x5E54[637]]) {
                    _0x7104();
                    _0x660C(function(_0x5E6E) {
                        $(_0x5E54[13] + _0x5E6E)[_0x5E54[1084]](_0x5E54[1143])
                    })
                } else {
                    _0x660C(function(_0x5E6E) {
                        $(_0x5E54[13] + _0x5E6E)[_0x5E54[1084]](_0x5E54[1144])
                    })
                }
            },
            "cShowBorder": function() {
                _0x67AC()
            },
            "cDisableEventSkins": function() {
                if (_0x658A[_0x5E54[35]]) {
                    $(_0x5E54[521])[_0x5E54[835]](_0x5E54[833] + _0x658A[_0x5E54[834]])
                };
                if (_0x6E12 === undefined && !_0x6D42[_0x5E54[177]]) {
                    _0x6E12 = new _0x6E2C(_0x658A[_0x5E54[178]])
                };
                _0x6B88();
                _0x6AB8()
            },
            "cResizableChat": function() {
                $(_0x5E54[1146])[_0x5E54[15]](_0x5E54[14], _0x6D42[_0x5E54[1145]] ? _0x5E54[18] : _0x5E54[16])
            },
            "sShowNames": function() {
                _0x6D5C[_0x5E54[669]] = _0x6F7E[_0x6D42[_0x5E54[1147]]]
            },
            "sShowSkins": function() {
                _0x6D5C[_0x5E54[664]] = _0x6F7E[_0x6D42[_0x5E54[1148]]]
            },
            "sTextOutlines": function() {
                _0x6D5C[_0x5E54[633]] = _0x74E0[_0x6D42[_0x5E54[1149]]];
                for (var _0x5E6E in _0x6F30[_0x5E54[235]][_0x5E54[205]]) {
                    var _0x5E88 = _0x6F30[_0x5E54[235]][_0x5E54[205]][_0x5E6E];
                    if (_0x5E88[_0x5E54[613]]) {
                        _0x5E88[_0x5E54[613]][_0x5E54[321]][_0x5E54[1150]] = _0x6D5C[_0x5E54[633]]
                    };
                    _0x6F30[_0x5E54[235]][_0x5E54[418]](_0x5E88)
                };
                _0x738E[_0x5E54[628]]()
            },
            "sQuality": function() {
                var _0x5E6E = _0x6D5C[_0x5E54[189]];
                _0x6D5C[_0x5E54[189]] = _0x6792[_0x6D42[_0x5E54[1151]]];
                if (_0x5E6E !== _0x6D5C[_0x5E54[189]]) {
                    $(window)[_0x5E54[563]](_0x5E54[173])
                }
            },
            "uiForegroundColor": function(_0x5E6E) {
                if (_0x6F30) {
                    _0x6F30[_0x5E54[494]]()
                };
                $(_0x5E54[1152])[_0x5E54[15]](_0x5E54[351], _0x5E6E);
                $(_0x5E54[1153])[_0x5E54[15]](_0x5E54[351], _0x5E6E);
                $(_0x5E54[1155])[_0x5E54[15]](_0x5E54[351], _0x5E6E)[_0x5E54[15]](_0x5E54[1154], _0x5E6E);
                $(_0x5E54[1156])[_0x5E54[15]](_0x5E54[351], _0x5E6E);
                $(_0x5E54[1157])[_0x5E54[15]](_0x5E54[351], _0x5E6E);
                $(_0x5E54[1158])[_0x5E54[15]](_0x5E54[1154], _0x5E6E)
            },
            "uiBackgroundColor": function(_0x5E6E) {
                $(_0x5E54[1153])[_0x5E54[15]](_0x5E54[1159], _0x5E6E);
                $(_0x5E54[1155])[_0x5E54[15]](_0x5E54[1159], _0x5E6E);
                $(_0x5E54[1156])[_0x5E54[15]](_0x5E54[1159], _0x5E6E)
            },
            "uiBorderColor": function(_0x5E6E) {
                $(_0x5E54[1160])[_0x5E54[15]](_0x5E54[1154], _0x5E6E);
                $(_0x5E54[1157])[_0x5E54[15]](_0x5E54[1154], _0x5E6E);
                $(_0x5E54[1156])[_0x5E54[15]](_0x5E54[1154], _0x5E6E);
                $(_0x5E54[1161])[_0x5E54[15]](_0x5E54[1154], _0x5E6E);
                $(_0x5E54[1162])[_0x5E54[15]](_0x5E54[1154], _0x5E6E)
            },
            "uiMenuBackgroundColor": function(_0x5E6E) {
                $(_0x5E54[1157])[_0x5E54[15]](_0x5E54[1159], _0x5E6E)
            },
            "uiMenuSubBackgroundColor": function(_0x5E88) {
                $(_0x5E54[1163])[_0x5E54[15]](_0x5E54[1159], _0x5E88);
                $(_0x5E54[1164])[_0x5E54[15]](_0x5E54[1159], _0x5E88);
                $(_0x5E54[1165])[_0x5E54[15]](_0x5E54[1159], _0x5E88);
                $(_0x5E54[1166])[_0x5E54[15]](_0x5E54[1159], _0x5E88);
                var _0x5EA2 = tinycolor(_0x5E54[744]);
                var _0x5E6E = tinycolor(_0x5E88)[_0x5E54[1167]]();
                _0x5EA2[_0x5E54[1168]](_0x5E6E * Math[_0x5E54[200]](Math[_0x5E54[214]](1 - _0x5E6E, 0.25), 1));
                $(_0x5E54[1169])[_0x5E54[15]](_0x5E54[1159], _0x5EA2[_0x5E54[1083]]())
            },
            "uiPartyLeaderColor": function(_0x5E6E) {
                if (_0x6F30) {
                    _0x6F30[_0x5E54[494]]()
                }
            },
            "uiGameBackgroundColor": function(_0x5E6E) {
                document[_0x5E54[521]][_0x5E54[321]][_0x5E54[1170]] = _0x5E6E
            },
            "uiGameBorderColor": function() {
                _0x67AC()
            },
            "rUiScale": function(_0x5E6E) {
                _0x6D42[_0x5E54[889]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 0.5), 1.25);
                $(_0x5E54[891])[_0x5E54[139]](Number[_0x5E54[890]](_0x6D42[_0x5E54[889]] * 100)[_0x5E54[254]](0));
                $(_0x5E54[895])[_0x5E54[15]](_0x5E54[893], _0x5E54[894] + _0x6D42[_0x5E54[889]] + _0x5E54[465])
            },
            "rAnimationDelay": function(_0x5E6E) {
                _0x6D42[_0x5E54[199]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 25), 250);
                $(_0x5E54[887])[_0x5E54[139]](_0x6D42[_0x5E54[199]])
            },
            "rBorderSize": function(_0x5E6E) {
                _0x74FA[_0x5E54[242]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 1), 256);
                $(_0x5E54[1171])[_0x5E54[449]](_0x74FA[_0x5E54[242]]);
                _0x67AC()
            },
            "rBackgroundOpacity": function(_0x5E6E) {
                _0x74FA[_0x5E54[1172]] = Math[_0x5E54[200]](Math[_0x5E54[214]](_0x5E6E, 0), 1);
                $(_0x5E54[1173])[_0x5E54[449]](Number[_0x5E54[890]](_0x74FA[_0x5E54[1172]] * 100)[_0x5E54[254]](0));
                document[_0x5E54[69]](_0x5E54[1175])[_0x5E54[321]][_0x5E54[1174]] = _0x74FA[_0x5E54[1172]]
            },
            "aCustomBackground": function(_0x5E6E) {
                document[_0x5E54[69]](_0x5E54[1175])[_0x5E54[321]][_0x5E54[1106]] = _0x5E54[1176] + _0x5E6E + _0x5E54[1177];
                document[_0x5E54[69]](_0x5E54[1175])[_0x5E54[321]][_0x5E54[1178]] = _0x5E54[1179]
            },
            "aCustomSpike": function(_0x5EBC) {
                if (_0x63B6[_0x5E54[649]]) {
                    _0x63B6[_0x5E54[649]][_0x5E54[240]]()
                };
                _0x63B6[_0x5E54[649]] = null;
                for (var _0x5E88 in _0x6F30[_0x5E54[205]]) {
                    var _0x5EA2 = _0x6F30[_0x5E54[205]][_0x5E88];
                    if (_0x5EA2[_0x5E54[431]] == 3) {
                        _0x5EA2[_0x5E54[635]] = true
                    }
                };
                if (_0x5EBC[_0x5E54[9]] == 0) {
                    return
                };
                var _0x5E6E = new Image();
                _0x5E6E[_0x5E54[693]] = _0x5E54[1];
                _0x5E6E[_0x5E54[130]](_0x5E54[694], function() {
                    _0x63B6[_0x5E54[649]] = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E6E)
                });
                _0x5E6E[_0x5E54[130]](_0x5E54[11], function() {
                    _0x6F30[_0x5E54[143]](_0x5E54[1180])
                });
                _0x5E6E[_0x5E54[701]] = _0x5EBC
            },
            "aCustomMother": function(_0x5EBC) {
                if (_0x63B6[_0x5E54[650]]) {
                    _0x63B6[_0x5E54[650]][_0x5E54[240]]()
                };
                _0x63B6[_0x5E54[650]] = null;
                for (var _0x5E88 in _0x6F30[_0x5E54[205]]) {
                    var _0x5EA2 = _0x6F30[_0x5E54[205]][_0x5E88];
                    if (_0x5EA2[_0x5E54[431]] == 4) {
                        _0x5EA2[_0x5E54[635]] = true
                    }
                };
                if (_0x5EBC[_0x5E54[9]] == 0) {
                    return
                };
                var _0x5E6E = new Image();
                _0x5E6E[_0x5E54[693]] = _0x5E54[1];
                _0x5E6E[_0x5E54[130]](_0x5E54[694], function() {
                    _0x63B6[_0x5E54[650]] = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E6E)
                });
                _0x5E6E[_0x5E54[130]](_0x5E54[11], function() {
                    _0x6F30[_0x5E54[143]](_0x5E54[1181])
                });
                _0x5E6E[_0x5E54[701]] = _0x5EBC
            }
        };
        
        function _0x711E() {
            if (!_0x6D42[_0x5E54[226]]) {
                $(_0x5E54[1183])[_0x5E54[15]]({
                    "border-top": _0x5E54[1182]
                });
                $(_0x5E54[1137])[_0x5E54[15]]({
                    "height": _0x5E54[52]
                })
            } else {
                $(_0x5E54[1183])[_0x5E54[15]]({
                    "border-top": _0x5E54[1184]
                });
                $(_0x5E54[1137])[_0x5E54[15]]({
                    "height": _0x5E54[1185]
                })
            }
        }
        
        function _0x6BA2() {
            _0x72D8();
            $(_0x5E54[1192])[_0x5E54[128]](_0x5E54[785], function() {
                if (!_0x6C24) {
                    return
                };
                var _0x5E88 = prompt(_0x5E54[1186]);
                if (!_0x5E88) {
                    return
                };
                var _0x5E6E = null;
                if (typeof _0x5E88 !== _0x5E54[1058]) {
                    _0x5E6E = _0x5E54[1187]
                };
                if (_0x5E88[_0x5E54[9]] < 2) {
                    _0x5E6E = _0x5E54[1188]
                };
                if (_0x5E88[_0x5E54[9]] > 20) {
                    _0x5E6E = _0x5E54[1189]
                };
                if (_0x5E6E !== null) {
                    alert(_0x5E6E);
                    return
                };
                _0x5E88 = _0x5E88[_0x5E54[1043]]();
                if (confirm(_0x5E54[1190] + _0x5E88 + _0x5E54[1191])) {
                    _0x75E4(_0x5E88)
                }
            });
            $(_0x5E54[1193])[_0x5E54[128]](_0x5E54[785], function() {
                _0x75E4()
            });
            $(_0x5E54[1195])[_0x5E54[128]](_0x5E54[785], function() {
                _0x74C6[_0x5E54[1194]] = true;
                _0x75FE()
            })
        }
        
        function _0x72D8() {
            _0x75FE();
            $(_0x5E54[1197])[_0x5E54[1084]]({
                color: _0x74C6[_0x5E54[413]],
                showAlpha: false,
                showInput: true,
                preferredFormat: _0x5E54[1196]
            });
            $(_0x5E54[1198])[_0x5E54[1084]]({
                showPaletteOnly: true,
                showPalette: true,
                color: _0x6160[_0x74C6[_0x5E54[726]]],
                palette: _0x6160
            });
            $(_0x5E54[1199])[_0x5E54[139]](_0x74C6[_0x5E54[722]]);
            $(_0x5E54[1200])[_0x5E54[565]](_0x5E54[594], _0x74C6[_0x5E54[670]]);
            $(_0x5E54[1201])[_0x5E54[139]](_0x74C6[_0x5E54[671]])
        }
        
        function _0x75E4(_0x5EBC) {
            _0x74C6[_0x5E54[722]] = $(_0x5E54[1199])[_0x5E54[139]]()[_0x5E54[134]]();
            _0x74C6[_0x5E54[670]] = $(_0x5E54[1200])[_0x5E54[565]](_0x5E54[594]);
            _0x74C6[_0x5E54[413]] = $(_0x5E54[1197])[_0x5E54[1084]](_0x5E54[182])[_0x5E54[1202]]();
            var _0x5E88 = $(_0x5E54[1198])[_0x5E54[1084]](_0x5E54[182])[_0x5E54[243]]()[_0x5E54[135]]();
            var _0x5E6E = 0;
            for (var _0x5EA2 = 0; _0x5EA2 < _0x6160[_0x5E54[9]]; _0x5EA2++) {
                if (_0x6160[_0x5EA2] == _0x5E88) {
                    _0x5E6E = _0x5EA2;
                    break
                }
            };
            _0x74C6[_0x5E54[726]] = _0x5E6E;
            _0x74C6[_0x5E54[671]] = parseInt($(_0x5E54[1117])[_0x5E54[139]]());
            _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[721]](_0x5EBC))
        }
        
        function _0x75FE() {
            if (_0x6C24 || _0x6F30[_0x5E54[277]]) {
                $(_0x5E54[853])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
                $(_0x5E54[849])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                if (_0x6C24) {
                    $(_0x5E54[1203])[_0x5E54[15]](_0x5E54[14], _0x5E54[1])
                } else {
                    $(_0x5E54[1203])[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
                };
                if (_0x74C6[_0x5E54[1194]]) {
                    $(_0x5E54[1204])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
                    $(_0x5E54[1205])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                } else {
                    $(_0x5E54[1205])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
                    $(_0x5E54[1204])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                }
            } else {
                $(_0x5E54[849])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
                $(_0x5E54[853])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
            }
        }
        
        function _0x6A84(_0x5E6E) {
            if (!_0x6F30[_0x5E54[279]][_0x5E54[1206]]) {
                _0x6F30[_0x5E54[279]][_0x5E54[1206]] = firebase[_0x5E54[1005]]()[_0x5E54[1004]](_0x5E54[1216])[_0x5E54[1002]](_0x5E6E)[_0x5E54[1001]]((_0x5E6E) => {
                    if (!_0x5E6E[_0x5E54[991]] || !_0x5E6E[_0x5E54[373]]()[_0x5E54[1207]]) {
                        _0x6C24 = false;
                        if ($(_0x5E54[1208])[_0x5E54[15]](_0x5E54[14]) !== _0x5E54[16]) {
                            _0x5E88(_0x5E54[842])
                        }
                    } else {
                        _0x6C24 = true;
                        $(_0x5E54[1209])[_0x5E54[230]](_0x5E6E[_0x5E54[373]]()[_0x5E54[136]]);
                        if (_0x5E6E[_0x5E54[373]]()[_0x5E54[1210]] !== undefined) {
                            $(_0x5E54[1192])[_0x5E54[589]](_0x5E54[809], _0x5E54[1211] + new Date(_0x5E6E[_0x5E54[373]]()[_0x5E54[1210]])[_0x5E54[528]]())
                        };
                        if (_0x5E6E[_0x5E54[373]]()[_0x5E54[1212]] !== null) {
                            $(_0x5E54[1214])[_0x5E54[230]](new Date(_0x5E6E[_0x5E54[373]]()[_0x5E54[1212]][_0x5E54[1213]] * 1000)[_0x5E54[528]]())
                        } else {
                            $(_0x5E54[1214])[_0x5E54[230]](_0x5E54[1215])
                        }
                    };
                    _0x75FE();
                    _0x6F30[_0x5E54[279]][_0x5E54[1206]]();
                    _0x6F30[_0x5E54[279]][_0x5E54[1206]] = null
                }, (_0x5E6E) => {
                    _0x6F30[_0x5E54[279]][_0x5E54[1206]]();
                    _0x6F30[_0x5E54[279]][_0x5E54[1206]] = null
                })
            }
        }
        
        function _0x7256(_0x5EA2, _0x5E6E, _0x5ED6, _0x5E88, _0x5EF0, _0x5F0A, _0x5EBC) {
            this[_0x5E54[136]] = _0x5EA2;
            this[_0x5E54[290]] = _0x5E6E;
            this[_0x5E54[154]] = _0x5ED6;
            this[_0x5E54[1217]] = _0x5E88;
            this[_0x5E54[137]] = _0x5EF0;
            this[_0x5E54[160]] = 0;
            this[_0x5E54[158]] = _0x5F0A;
            this[_0x5E54[159]] = _0x5EBC
        }
        
        function _0x6B3A() {
            $(_0x5E54[1218])[_0x5E54[230]](_0x5E54[1]);
            $(_0x5E54[1219])[_0x5E54[230]](_0x5E54[1]);
            $(_0x5E54[1220])[_0x5E54[230]](_0x5E54[1]);
            for (var _0x5E6E in _0x728A) {
                for (var _0x5E88 in _0x728A[_0x5E6E]) {
                    var _0x5EBC = _0x728A[_0x5E6E][_0x5E88];
                    $(_0x5E54[1226] + _0x5EBC[_0x5E54[137]])[_0x5E54[512]](_0x5E54[1221] + _0x5EBC[_0x5E54[136]] + _0x5E54[1222] + _0x5EBC[_0x5E54[136]] + _0x5E54[1223] + _0x5EBC[_0x5E54[136]] + _0x5E54[1224] + _0x5EBC[_0x5E54[154]] + _0x5E54[1225] + _0x5EBC[_0x5E54[1217]] + _0x5E54[867])
                }
            };
            for (var _0x5E88 in _0x5EA2) {
                var _0x5EBC = _0x5EA2[_0x5E88];
                $(_0x5E54[1226] + _0x5EBC[_0x5E54[137]])[_0x5E54[1228]](_0x5E54[1221] + _0x5EBC[_0x5E54[136]] + _0x5E54[1227] + _0x5EBC[_0x5E54[136]] + _0x5E54[1223] + _0x5EBC[_0x5E54[136]] + _0x5E54[1224] + _0x5EBC[_0x5E54[154]] + _0x5E54[1225] + _0x5EBC[_0x5E54[1217]] + _0x5E54[867])
            };
            $(_0x5E54[1229])[_0x5E54[128]](_0x5E54[785], function() {
                _0x7222($(this)[_0x5E54[589]](_0x5E54[766]))
            })
        }
        
        function _0x66A8(_0x5E6E) {
            for (var _0x5E88 in _0x5EA2) {
                if (_0x5E6E[_0x5E54[134]]() === _0x5E88[_0x5E54[134]]()) {
                    return _0x5EA2[_0x5E88]
                }
            };
            return null
        }
        
        function _0x6744(_0x5E6E) {
            for (var _0x5E88 in _0x728A) {
                for (var _0x5EA2 in _0x728A[_0x5E88]) {
                    if (_0x5EA2[_0x5E54[134]]() === _0x5E6E[_0x5E54[134]]()) {
                        return _0x728A[_0x5E88][_0x5EA2]
                    }
                }
            };
            return null
        }
        
        function _0x7222(_0x5E6E) {
            if (_0x71EE != null) {
                $(_0x5E54[1231] + _0x71EE[_0x5E54[136]])[_0x5E54[817]](_0x5E54[1230])
            };
            _0x71EE = _0x6744(_0x5E6E) || (Object[_0x5E54[432]](_0x5EA2)[_0x5E54[9]] > 0 ? _0x66A8(_0x5E6E) : null);
            if (_0x71EE != null) {
                $(_0x5E54[1231] + _0x71EE[_0x5E54[136]])[_0x5E54[816]](_0x5E54[1230])
            }
        }
        
        function _0x7208(_0x5E6E) {
            _0x5E6E = _0x5E6E[_0x5E54[134]]();
            var _0x5E88 = $(_0x5E54[1232] + _0x5E6E);
            $(_0x5E54[1164])[_0x5E54[15]](_0x5E54[1159], _0x5E54[1233]);
            $(_0x5E54[1235])[_0x5E54[21]]()[_0x5E54[817]](_0x5E54[1234]);
            _0x5E88[_0x5E54[816]](_0x5E54[1234]);
            $(_0x5E54[1164])[_0x5E54[15]](_0x5E54[1159], _0x74FA[_0x5E54[1236]]);
            $(_0x5E54[1165])[_0x5E54[21]]()[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            $(_0x5E54[1237] + _0x5E6E)[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
        }
        
        function _0x5EBC(_0x5E88, _0x5EF0) {
            var _0x5EBC = 0;
            for (tab in _0x6D42[_0x5E54[1238]]) {
                var _0x5F24 = _0x6D42[_0x5E54[1238]][tab];
                if ((_0x5E88 & _0x5F24[_0x5E54[412]]) != _0x5E88) {
                    continue
                };
                var _0x5ED6 = $(_0x5E54[1239] + tab + _0x5E54[1240])[_0x5E54[9]];
                if (_0x5ED6 >= _0x5F24[_0x5E54[1241]]) {
                    $(_0x5E54[1239] + tab + _0x5E54[1242])[_0x5E54[430]]()
                };
                var _0x5E6E = _0x5EBC > 0 ? _0x5EF0[_0x5E54[1243]](true) : _0x5EF0;
                _0x5EBC++;
                var _0x5F0A = document[_0x5E54[349]](_0x5E54[1244]);
                _0x5F0A[_0x5E54[355]](_0x5E6E);
                document[_0x5E54[69]](_0x5E54[1245] + tab)[_0x5E54[355]](_0x5F0A);
                var _0x5EA2 = $(_0x5E54[1246] + tab);
                if (_0x5EA2[0][_0x5E54[1247]] - _0x5EA2[0][_0x5E54[1248]] < _0x5EA2[_0x5E54[1249]]() + 150) {
                    _0x5EA2[_0x5E54[1248]](_0x5EA2[0][_0x5E54[1247]])
                }
            }
        }
        
        function _0x6570(_0x5E6E) {
            if (_0x5E6E[_0x5E54[9]] == 0) {
                return
            } else {
                if (_0x5E6E[_0x5E54[197]](0) == _0x5E54[4]) {
                    _0x6DC4(_0x5E6E)
                } else {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[716]](_0x5E6E, 0));
                    _0x72A4(_0x5E54[1])
                }
            }
        }
        
        function _0x72A4(_0x5E6E) {
            $(_0x5E54[79])[_0x5E54[139]](_0x5E6E)
        }
        
        function _0x5ED6(_0x5E6E) {
            $(_0x5E54[79])[_0x5E54[139]](_0x66C2() + _0x5E6E)
        }
        
        function _0x66C2() {
            return $(_0x5E54[79])[_0x5E54[139]]()
        }
        
        function _0x6DC4(_0x5EBC) {
            var _0x5ED6 = _0x5EBC[_0x5E54[3]](_0x5E54[366]);
            var _0x5E88 = _0x5ED6[0];
            var _0x5E6E = _0x5E88[_0x5E54[686]](1);
            _0x72A4(_0x5E54[1]);
            var _0x5EA2 = false;
            Object[_0x5E54[432]](_0x6300)[_0x5E54[862]]((_0x5E88) => {
                if (_0x6300[_0x5E88][_0x5E54[863]][_0x5E54[862]]((_0x5E88) => {
                        return _0x5E88[_0x5E54[135]]() === _0x5E6E[_0x5E54[135]]()
                    }) > -1 && _0x5EA2 == false) {
                    _0x6300[_0x5E88][_0x5E54[1250]](_0x5ED6[_0x5E54[133]](1));
                    _0x5EA2 = true;
                    return
                }
            });
            if (_0x5EA2 == false) {
                _0x6F30[_0x5E54[143]](_0x5E54[1251])
            }
        }
        
        function _0x70B6() {
            var _0x5E88 = $(_0x5E54[1161]);
            var _0x5E6E = $(_0x5E54[1252]);
            _0x5E88[_0x5E54[508]]();
            _0x5E6E[_0x5E54[508]]();
            for (var _0x5EA2 in _0x6D42[_0x5E54[1238]]) {
                var _0x5EBC = _0x6D42[_0x5E54[1238]][_0x5EA2];
                if (_0x5EBC[_0x5E54[136]][_0x5E54[9]] == 0) {
                    _0x5EBC[_0x5E54[136]] = _0x5E54[1253]
                };
                _0x5E88[_0x5E54[512]](_0x5E54[1254] + _0x5EA2 + _0x5E54[1255] + _0x5EA2 + _0x5E54[1256] + _0x5EBC[_0x5E54[136]] + _0x5E54[1257]);
                _0x5E6E[_0x5E54[512]](_0x5E54[1258] + _0x5EA2 + _0x5E54[1259] + _0x5EA2 + _0x5E54[1260])
            };
            $(_0x5E54[1162])[_0x5E54[128]](_0x5E54[785], function() {
                _0x71BA($(this)[_0x5E54[589]](_0x5E54[136]))
            })[_0x5E54[15]](_0x5E54[1154], _0x74FA[_0x5E54[1261]]);
            if (_0x71D4 >= 0 && _0x71D4 < _0x6D42[_0x5E54[1238]][_0x5E54[9]]) {
                _0x71BA(_0x71D4)
            } else {
                _0x71BA(0)
            }
        }
        
        function _0x70D0() {
            for (var _0x5E6E in _0x6D42[_0x5E54[1238]]) {
                var _0x5E88 = _0x6D42[_0x5E54[1238]][_0x5E6E];
                if (!_0x5E88) {
                    continue
                };
                if (_0x5E88[_0x5E54[136]][_0x5E54[9]] == 0) {
                    _0x5E88[_0x5E54[136]] = _0x5E54[1253]
                };
                var _0x5EA2 = $(_0x5E54[1262] + _0x5E6E);
                if (_0x5EA2) {
                    _0x5EA2[_0x5E54[230]](_0x5E54[1263] + _0x5E88[_0x5E54[136]] + _0x5E54[1264])
                }
            }
        }
        
        function _0x71BA(_0x5E6E) {
            $(_0x5E54[1162])[_0x5E54[817]](_0x5E54[1265]);
            $(_0x5E54[1267])[_0x5E54[817]](_0x5E54[1266])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            _0x71D4 = _0x5E6E;
            var _0x5E88 = _0x6D42[_0x5E54[1238]][_0x5E6E];
            if (!_0x5E88) {
                return
            };
            $(_0x5E54[1262] + _0x5E6E)[_0x5E54[816]](_0x5E54[1265]);
            $(_0x5E54[1246] + _0x5E6E)[_0x5E54[816]](_0x5E54[1266])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
        }
        
        function _0x6028(_0x5EA2 = 0) {
            var _0x5E6E = $(_0x5E54[942]);
            _0x5E6E[_0x5E54[508]]();
            for (var _0x5E88 in _0x6D42[_0x5E54[1238]]) {
                _0x5E6E[_0x5E54[512]](_0x5E54[559] + _0x5E88 + _0x5E54[560] + _0x6D42[_0x5E54[1238]][_0x5E88][_0x5E54[136]] + _0x5E54[561])
            };
            _0x5E6E[_0x5E54[565]](_0x5E54[564], _0x5EA2);
            _0x5E6E[_0x5E54[563]](_0x5E54[562])
        }
        
        function _0x61C8(_0x5EA2) {
            var _0x5EF0 = $(_0x5E54[942])[_0x5E54[139]]();
            var _0x5ED6 = {
                name: _0x5E54[1],
                flags: 0,
                maxMessages: 0
            };
            var _0x5E88 = _0x6D42[_0x5E54[1238]][_0x5EF0];
            if (_0x5E88) {
                for (var _0x5EBC in _0x5ED6) {
                    _0x5ED6[_0x5EBC] = _0x5E88[_0x5EBC]
                }
            };
            $(_0x5E54[1268])[_0x5E54[139]](_0x5ED6[_0x5E54[136]]);
            for (var _0x5F0A in _0x6216) {
                var _0x5E6E = (_0x6216[_0x5F0A] & _0x5ED6[_0x5E54[412]]) == _0x6216[_0x5F0A];
                $(_0x5E54[1269] + _0x5F0A[_0x5E54[134]]())[_0x5E54[565]](_0x5E54[594], _0x5E6E)
            };
            $(_0x5E54[1270])[_0x5E54[139]](_0x5ED6[_0x5E54[1241]])
        }
        
        function _0x61FC(_0x5E6E) {
            var _0x5EBC = $(_0x5E54[942])[_0x5E54[139]]();
            var _0x5F24 = _0x6D42[_0x5E54[1238]][_0x5EBC];
            if (!_0x5F24) {
                return
            };
            var _0x5F0A = _0x5F24[_0x5E54[136]];
            var _0x5EF0 = $(_0x5E54[1268])[_0x5E54[139]]();
            if (_0x5EF0[_0x5E54[9]] == 0) {
                return
            };
            var _0x5EA2 = _0x5EF0 != _0x5F0A;
            var _0x5E88 = 0;
            var _0x5ED6 = parseInt($(_0x5E54[1270])[_0x5E54[139]]());
            for (var _0x5F3E in _0x6216) {
                if ($(_0x5E54[1269] + _0x5F3E[_0x5E54[134]]())[_0x5E54[565]](_0x5E54[594])) {
                    _0x5E88 += _0x6216[_0x5F3E]
                }
            };
            _0x5F24[_0x5E54[136]] = _0x5EF0;
            _0x5F24[_0x5E54[412]] = _0x5E88;
            _0x5F24[_0x5E54[1241]] = _0x5ED6;
            if (_0x5EA2) {
                _0x6028(_0x5EBC);
                _0x70D0()
            }
        }
        
        function _0x6194() {
            var _0x5E6E = {
                name: _0x5E54[1271],
                flags: 0,
                maxMessages: 100
            };
            _0x6D42[_0x5E54[1238]][_0x5E54[161]](_0x5E6E);
            _0x6028(_0x6D42[_0x5E54[1238]][_0x5E54[9]] - 1);
            _0x70B6()
        }
        
        function _0x61AE() {
            var _0x5E6E = $(_0x5E54[942])[_0x5E54[139]]();
            var _0x5E88 = _0x6D42[_0x5E54[1238]][_0x5E6E];
            if (!_0x5E88) {
                return
            };
            _0x6D42[_0x5E54[1238]][_0x5E54[1100]](_0x5E6E, 1);
            _0x6028();
            _0x70B6()
        }
        
        function _0x61E2(_0x5ED6) {
            var _0x5E6E = parseInt($(_0x5E54[942])[_0x5E54[139]]());
            var _0x5EBC = _0x6D42[_0x5E54[1238]][_0x5E6E];
            if (!_0x5EBC) {
                return
            };
            var _0x5E88;
            if (_0x5ED6) {
                _0x5E88 = _0x5E6E - 1
            } else {
                _0x5E88 = _0x5E6E + 1
            };
            var _0x5EA2 = _0x6D42[_0x5E54[1238]][_0x5E88];
            if (!_0x5EA2) {
                return
            };
            _0x6D42[_0x5E54[1238]][_0x5E6E] = _0x5EA2;
            _0x6D42[_0x5E54[1238]][_0x5E88] = _0x5EBC;
            _0x6028(_0x5E88);
            _0x70D0();
            _0x71BA(_0x5E88)
        }
        var _0x617A = function(_0x5E6E) {
            _0x6D28(_0x5E6E, this[_0x5E54[473]], this[_0x5E54[474]][_0x5E54[262]], -1)
        };
        var _0x6E60 = function(_0x5E6E) {
            var _0x5EBC = _0x5E6E[_0x5E54[273]];
            var _0x5EA2 = Math[_0x5E54[233]](_0x5EBC / 20);
            if (_0x5EBC % 20 < 5) {
                return
            };
            var _0x5E88 = _0x6F30[_0x5E54[259]][_0x5EA2];
            if (_0x5E88 == null) {
                return
            };
            _0x6D28(_0x5E6E, _0x5E88[_0x5E54[136]], _0x5E88[_0x5E54[122]], _0x5EA2)
        };
        
        function _0x6D28(_0x5E6E, _0x5EA2, _0x5E88, _0x5ED6) {
            var _0x5EBC = document[_0x5E54[69]](_0x5E54[1272]);
            _0x5EBC[_0x5E54[473]] = _0x5EA2 || _0x5E54[285];
            _0x631A[_0x5E54[373]](_0x5E54[583], _0x5E88);
            _0x631A[_0x5E54[373]](_0x5E54[259], _0x5ED6);
            $(_0x5E54[1273])[_0x5E54[15]](_0x5E54[14], _0x5E54[16]);
            if (_0x5ED6 == -1) {
                $(_0x5E54[926])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                $(_0x5E54[928])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                $(_0x5E54[937])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                $(_0x5E54[929])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
            } else {
                $(_0x5E54[928])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                $(_0x5E54[929])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                if (_0x6F30[_0x5E54[369]]()) {
                    $(_0x5E54[933])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                    $(_0x5E54[934])[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                    $(_0x5E54[935])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
                }
            };
            if (_0x6F30[_0x5E54[270]]) {
                $(_0x5E54[936])[_0x5E54[15]](_0x5E54[14], _0x5E54[18])
            };
            _0x631A[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
            _0x631A[_0x5E54[15]](_0x5E54[248], Math[_0x5E54[200]](_0x6F30[_0x5E54[101]], window[_0x5E54[188]] - _0x631A[_0x5E54[187]]()));
            _0x631A[_0x5E54[15]](_0x5E54[249], Math[_0x5E54[200]](_0x6F30[_0x5E54[103]], window[_0x5E54[191]] - _0x631A[_0x5E54[190]]()))
        }
        
        function _0x6DF8(_0x5E6E) {
            return _0x5E6E[_0x5E54[687]](/</g, _0x5E54[1275])[_0x5E54[687]](/>/g, _0x5E54[1274])
        }
        
        function _0x6CA6(_0x5E88, _0x5EF0, _0x5F72, _0x5F8C, _0x5F58, _0x5E6E, _0x5ED6) {
            var _0x5EA2 = ((_0x5F72 - _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[248]]) / _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[187]]) * _0x6C72[_0x5E54[187]];
            var _0x5EBC = ((_0x5F8C - _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[249]]) / _0x6F30[_0x5E54[232]][_0x5E54[237]][_0x5E54[190]]) * _0x6C72[_0x5E54[190]];
            _0x5E88[_0x5E54[695]]();
            _0x5E88[_0x5E54[696]](_0x5EA2, _0x5EBC, _0x5F58, 0, _0x6EAE, false);
            _0x5E88[_0x5E54[452]] = _0x5E6E;
            _0x5E88[_0x5E54[683]]();
            if (_0x5ED6) {
                var _0x5F3E = (_0x5E88[_0x5E54[532]](_0x5EF0)[_0x5E54[187]] / 2);
                var _0x5F0A = _0x5EA2 - _0x5F3E;
                var _0x5F24 = _0x5EBC - 5;
                _0x5E88[_0x5E54[456]](_0x5EF0, _0x5F0A, _0x5F24)
            }
        }
        
        function _0x624A(_0x5E88) {
            var _0x5F58 = _0x6C3E[_0x5E54[219]][_0x5E54[193]] - (_0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[193]] / _0x6F30[_0x5E54[218]]) + ((_0x6F30[_0x5E54[101]] * _0x6D5C[_0x5E54[189]]) / _0x6F30[_0x5E54[218]]);
            var _0x5F72 = _0x6C3E[_0x5E54[219]][_0x5E54[196]] - (_0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[196]] / _0x6F30[_0x5E54[218]]) + ((_0x6F30[_0x5E54[103]] * _0x6D5C[_0x5E54[189]]) / _0x6F30[_0x5E54[218]]);
            var _0x5F24 = null;
            var _0x5ED6;
            for (var _0x5EA2 in _0x6F30[_0x5E54[205]]) {
                _0x5ED6 = _0x6F30[_0x5E54[205]][_0x5EA2];
                if (_0x5ED6[_0x5E54[208]] < 25) {
                    continue
                };
                var _0x5F3E = _0x5ED6[_0x5E54[196]] - _0x5ED6[_0x5E54[208]];
                var _0x5E6E = _0x5ED6[_0x5E54[196]] + _0x5ED6[_0x5E54[208]];
                var _0x5EBC = _0x5ED6[_0x5E54[193]] - _0x5ED6[_0x5E54[208]];
                var _0x5F0A = _0x5ED6[_0x5E54[193]] + _0x5ED6[_0x5E54[208]];
                if (_0x5F72 > _0x5E6E) {
                    continue
                };
                if (_0x5F72 < _0x5F3E) {
                    continue
                };
                if (_0x5F58 > _0x5F0A) {
                    continue
                };
                if (_0x5F58 < _0x5EBC) {
                    continue
                };
                _0x5F24 = _0x5ED6;
                break
            };
            if (_0x5F24 != null && _0x5F24[_0x5E54[262]] != 0 && (!_0x5E88 || _0x5E88[_0x5E54[123]][_0x5E54[122]] == _0x5E54[68])) {
                var _0x5EF0 = _0x6F30[_0x5E54[235]][_0x5E54[409]](_0x5F24[_0x5E54[262]]);
                if (_0x5EF0 != null) {
                    _0x6D28(_0x5E88, _0x5EF0[_0x5E54[136]], _0x5F24[_0x5E54[262]], -1)
                }
            }
        }
        
        function _0x7340(_0x5E6E) {
            if (_0x5E6E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16]) {
                _0x5E6E[_0x5E54[15]](_0x5E54[14], _0x5E54[18]);
                _0x5E6E[_0x5E54[203]]({
                    opacity: 1
                }, 500)
            }
        }
        
        function _0x6848(_0x5E6E) {
            if (_0x5E6E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[18] && _0x5E6E[_0x5E54[15]](_0x5E54[1174]) == 1) {
                _0x5E6E[_0x5E54[203]]({
                    opacity: 0
                }, 500, function() {
                    _0x5E6E[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
                })
            }
        }
        
        function _0x7548(_0x5E6E) {
            if (_0x5E6E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[18] && _0x5E6E[_0x5E54[15]](_0x5E54[1174]) == 1) {
                _0x6848(_0x5E6E)
            } else {
                if (_0x5E6E[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16]) {
                    _0x7340(_0x5E6E)
                }
            }
        }
        
        function _0x6862() {
            $(_0x5E54[1156])[_0x5E54[20]](function() {
                _0x6848($(this))
            })
        }
        
        function _0x6966(_0x5E6E) {
            return _0x5E6E[_0x5E54[15]](_0x5E54[14]) === _0x5E54[16]
        }
        
        function _0x7326() {
            _0x68B0[_0x5E54[17]]();
            if (_0x6F30[_0x5E54[259]][_0x5E54[9]] == 0 || _0x6D42[_0x5E54[530]]) {
                _0x64A0[_0x5E54[99]][_0x5E54[15]](_0x5E54[14], _0x5E54[16])
            };
            if (_0x6D42[_0x5E54[1135]]) {
                $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
            };
            if (_0x6D42[_0x5E54[225]]) {
                $(_0x5E54[1137])[_0x5E54[15]](_0x5E54[14], _0x5E54[16])
            }
        }
        
        function _0x682E() {
            _0x68B0[_0x5E54[19]]()
        }
        
        function _0x730C() {
            $(_0x5E54[1025])[_0x5E54[19]]();
            $(_0x5E54[974])[_0x5E54[17]]()
        }
        
        function _0x6814() {
            $(_0x5E54[975])[_0x5E54[19]]();
            $(_0x5E54[974])[_0x5E54[19]]();
            $(_0x5E54[1026])[_0x5E54[19]]();
            $(_0x5E54[1025])[_0x5E54[17]]()
        }
        
        function _0x6264(_0x5E6E) {
            var _0x5E88 = _0x5E6E[_0x5E54[589]](_0x5E54[122]);
            _0x6D42[_0x5E88] = _0x5E6E[_0x5E54[565]](_0x5E54[594]);
            _0x7138(_0x5E88)
        }
        
        function _0x6298(_0x5E6E) {
            var _0x5E88 = _0x5E6E[_0x5E54[589]](_0x5E54[122]);
            _0x6D42[_0x5E88] = _0x5E6E[_0x5E54[139]]();
            _0x7138(_0x5E88, _0x5E6E[_0x5E54[139]]())
        }
        
        function _0x627E(_0x5E6E) {
            var _0x5E88 = _0x5E6E[_0x5E54[589]](_0x5E54[122]);
            _0x7138(_0x5E88, _0x5E6E[_0x5E54[139]]())
        }
        
        function _0x7138(_0x5E6E, _0x5E88) {
            var _0x5E54 = _0x6230[_0x5E6E];
            if (_0x5E54 != null) {
                _0x5E54(_0x5E88)
            }
        }
        
        function _0x72BE(_0x5E54, _0x5E6E) {
            if (_0x5E6E != null) {
                _0x74FA[_0x5E54] = _0x5E6E;
                _0x7138(_0x5E54, _0x5E6E)
            }
        }
        
        function _0x7152() {
            if (!_0x6334[_0x5E54[971]]) {
                return
            };
            _0x6D42[_0x5E54[1276]] = $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[187]);
            _0x6D42[_0x5E54[1277]] = $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[190]);
            window[_0x5E54[1280]][_0x5E54[1279]](_0x5E54[1278], JSON[_0x5E54[53]](_0x6D42));
            window[_0x5E54[1280]][_0x5E54[1279]](_0x5E54[1281], JSON[_0x5E54[53]](_0x69B4));
            window[_0x5E54[1280]][_0x5E54[1279]](_0x5E54[136], $(_0x5E54[288])[_0x5E54[139]]());
            window[_0x5E54[1280]][_0x5E54[1279]](_0x5E54[1282], JSON[_0x5E54[53]](_0x74FA));
            window[_0x5E54[1280]][_0x5E54[1279]](_0x5E54[1283], JSON[_0x5E54[53]](_0x74C6))
        }
        
        function _0x6AD2() {
            if (!_0x6334[_0x5E54[971]]) {
                return
            };
            var _0x5F58 = window[_0x5E54[1280]][_0x5E54[1284]](_0x5E54[1282]);
            if (_0x5F58) {
                _0x6BBC(_0x5F58)
            };
            var _0x5ED6 = window[_0x5E54[1280]][_0x5E54[1284]](_0x5E54[1281]);
            if (_0x5ED6) {
                _0x5ED6 = JSON[_0x5E54[54]](_0x5ED6);
                for (var _0x5EA2 in _0x5ED6) {
                    if (_0x5ED6[_0x5EA2] != null && Number[_0x5E54[1285]](_0x5ED6[_0x5EA2])) {
                        _0x69B4[_0x5EA2] = _0x5ED6[_0x5EA2];
                        _0x75B0($(_0x5E54[13] + _0x5EA2))
                    }
                }
            };
            var _0x5F0A = window[_0x5E54[1280]][_0x5E54[1284]](_0x5E54[1278]);
            if (_0x5F0A) {
                _0x5F0A = JSON[_0x5E54[54]](_0x5F0A);
                for (var _0x5EBC in _0x6D42) {
                    if (!_0x5F0A[_0x5EBC]) {
                        _0x5F0A[_0x5EBC] = _0x6D42[_0x5EBC]
                    }
                }
            } else {
                _0x5F0A = _0x6D42
            };
            for (var _0x5EBC in _0x5F0A) {
                var _0x5E88 = _0x5EBC[_0x5E54[197]](0);
                if (_0x5E88 == _0x5E54[1097]) {
                    if (_0x5F0A[_0x5EBC] == true) {
                        var _0x5E6E = $(_0x5E54[13] + _0x5EBC);
                        _0x5E6E[_0x5E54[565]](_0x5E54[594], _0x5F0A[_0x5EBC]);
                        _0x6264(_0x5E6E)
                    }
                } else {
                    if (_0x5E88 == _0x5E54[1286]) {
                        var _0x5F24 = $(_0x5E54[13] + _0x5EBC);
                        _0x5F24[_0x5E54[139]](_0x5F0A[_0x5EBC]);
                        _0x6298(_0x5F24)
                    } else {
                        if (_0x5E88 == _0x5E54[752]) {
                            _0x6D42[_0x5EBC] = _0x5F0A[_0x5EBC]
                        } else {
                            if (_0x5E88 == _0x5E54[723]) {
                                _0x6D42[_0x5EBC] = _0x5F0A[_0x5EBC];
                                $(_0x5E54[13] + _0x5EBC)[_0x5E54[139]](_0x6D42[_0x5EBC]);
                                _0x627E($(_0x5E54[13] + _0x5EBC))
                            } else {
                                _0x6D42[_0x5EBC] = _0x5F0A[_0x5EBC]
                            }
                        }
                    }
                }
            };
            $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[187], _0x6D42[_0x5E54[1276]]);
            $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[190], _0x6D42[_0x5E54[1277]]);
            if (!_0x6D42[_0x5E54[637]]) {
                _0x7138(_0x5E54[637])
            };
            var _0x5EF0 = window[_0x5E54[1280]][_0x5E54[1284]](_0x5E54[136]);
            if (_0x5EF0 != null) {
                $(_0x5E54[288])[_0x5E54[139]](_0x5EF0)
            };
            var _0x5F3E = window[_0x5E54[1280]][_0x5E54[1284]](_0x5E54[1283]);
            if (_0x5F3E) {
                _0x5F3E = JSON[_0x5E54[54]](_0x5F3E);
                for (var _0x5EBC in _0x5F3E) {
                    if (!_0x5F3E[_0x5EBC]) {
                        continue
                    };
                    if (_0x5F3E[_0x5EBC][_0x5E54[9]] != 0) {
                        _0x74C6[_0x5EBC] = _0x5F3E[_0x5EBC]
                    }
                }
            };
            _0x74C6[_0x5E54[1287]] = _0x5E54[1];
            _0x75FE()
        }
        
        function _0x7104() {
            for (var _0x5E88 in _0x646C) {
                var _0x5E6E = _0x5E88[_0x5E54[197]](0);
                if (_0x5E6E == _0x5E54[723]) {
                    $(_0x5E54[13] + _0x5E88)[_0x5E54[139]](_0x646C[_0x5E88]);
                    _0x627E($(_0x5E54[13] + _0x5E88))
                } else {
                    if (_0x5E6E == _0x5E54[198]) {
                        _0x74FA[_0x5E88] = _0x646C[_0x5E88];
                        $(_0x5E54[13] + _0x5E88)[_0x5E54[1084]](_0x5E54[641], _0x74FA[_0x5E88]);
                        _0x7138(_0x5E88, _0x74FA[_0x5E88])
                    } else {
                        if (_0x5E6E == _0x5E54[951]) {
                            _0x72BE(_0x5E88, _0x5E54[1])
                        } else {
                            _0x74FA[_0x5E88] = _0x646C[_0x5E88]
                        }
                    }
                }
            };
            _0x74FA[_0x5E54[1089]] = []
        }
        
        function _0x6BBC(_0x5E6E) {
            try {
                var _0x5EBC = JSON[_0x5E54[54]](_0x5E6E);
                for (var _0x5EA2 in _0x5EBC) {
                    if (_0x74FA[_0x5EA2] != null && _0x5EBC[_0x5EA2][_0x5E54[9]] != 0) {
                        _0x74FA[_0x5EA2] = _0x5EBC[_0x5EA2];
                        var _0x5E88 = _0x5EA2[_0x5E54[197]](0);
                        if (_0x5E88 == _0x5E54[198]) {
                            $(_0x5E54[13] + _0x5EA2)[_0x5E54[1084]](_0x5E54[641], _0x74FA[_0x5EA2]);
                            _0x7138(_0x5EA2, _0x74FA[_0x5EA2])
                        } else {
                            if (_0x5E88 == _0x5E54[723]) {
                                $(_0x5E54[13] + _0x5EA2)[_0x5E54[139]](_0x74FA[_0x5EA2]);
                                _0x627E($(_0x5E54[13] + _0x5EA2))
                            } else {
                                if (_0x5E88 == _0x5E54[951]) {
                                    _0x72BE(_0x5EA2, _0x74FA[_0x5EA2])
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                _0x7104()
            } finally {
                _0x70EA()
            }
        }
        
        function _0x6BD6(_0x5E6E) {
            if (/\.(json)$/i [_0x5E54[956]](_0x5E6E[_0x5E54[136]])) {
                var _0x5E88 = new FileReader();
                _0x5E88[_0x5E54[130]](_0x5E54[694], function() {
                    if (!_0x6D42[_0x5E54[637]]) {
                        _0x65F2()
                    };
                    _0x7104();
                    _0x6BBC(this[_0x5E54[957]])
                }, false);
                _0x5E88[_0x5E54[1288]](_0x5E6E)
            }
        }
        
        function _0x65F2() {
            $(_0x5E54[1289])[_0x5E54[565]](_0x5E54[594], true)[_0x5E54[563]](_0x5E54[562])
        }
        
        function _0x6DDE(_0x5EA2) {
            var _0x5EBC = _0x5EA2[_0x5E54[3]](_0x5E54[366]);
            var _0x5E88 = _0x5E54[1];
            var _0x5ED6 = null;
            for (var _0x5E6E = 0; _0x5E6E < _0x5EBC[_0x5E54[9]]; _0x5E6E++) {
                if (_0x5E6E != 0) {
                    _0x5E88 += _0x5E54[366]
                };
                _0x5ED6 = _0x5EBC[_0x5E6E];
                if (_0x653C[_0x5ED6] != null) {
                    if (_0x5ED6[_0x5E54[860]](_0x5E54[2]) && _0x5ED6[_0x5E54[858]](_0x5E54[2])) {
                        _0x5ED6 = _0x5ED6[_0x5E54[686]](1, _0x5ED6[_0x5E54[9]] - 1)
                    };
                    _0x5E88 += _0x5E54[1290] + _0x5ED6 + _0x5E54[1291] + _0x5ED6 + _0x5E54[1116]
                } else {
                    if (gifEmoteList[_0x5ED6] != null) {
                        if (_0x5ED6[_0x5E54[860]](_0x5E54[2]) && _0x5ED6[_0x5E54[858]](_0x5E54[2])) {
                            _0x5ED6 = _0x5ED6[_0x5E54[686]](1, _0x5ED6[_0x5E54[9]] - 1)
                        };
                        _0x5E88 += _0x5E54[1292] + _0x5ED6 + _0x5E54[1293] + _0x5ED6 + _0x5E54[1116]
                    } else {
                        _0x5E88 += _0x5ED6
                    }
                }
            };
            return _0x5E88
        }
        
        function _0x6E2C(_0x5E6E) {
            this[_0x5E54[176]] = [];
            this[_0x5E54[1294]] = _0x5E6E;
            this[_0x5E54[168]] = function() {
                if (!_0x658A[_0x5E54[176]]) {
                    return
                };
                for (var _0x5E6E = 0; _0x5E6E < this[_0x5E54[1294]]; _0x5E6E++) {
                    var _0x5E88 = new _0x6E46(_0x5E54[1120] + _0x658A[_0x5E54[834]] + _0x5E54[1295], Math[_0x5E54[233]](Math[_0x5E54[898]]() * 7));
                    this[_0x5E54[176]][_0x5E54[161]](_0x5E88)
                }
            };
            this[_0x5E54[1296]] = function(_0x5E6E, _0x5E88, _0x5ED6, _0x5EF0) {
                _0x5E88 = _0x5E88 / 1000;
                for (var _0x5EA2 in this[_0x5E54[176]]) {
                    var _0x5EBC = this[_0x5E54[176]][_0x5EA2];
                    _0x5EBC[_0x5E54[1297]](_0x5E6E, _0x5E88)
                }
            };
            this[_0x5E54[168]](_0x5E6E)
        }
        
        function _0x6E46(_0x5E88, _0x5E6E) {
            this[_0x5E54[1298]] = null;
            this[_0x5E54[1299]] = _0x5E6E;
            this[_0x5E54[193]] = 0;
            this[_0x5E54[196]] = 0;
            this[_0x5E54[1300]] = 0;
            this[_0x5E54[1301]] = 0;
            this[_0x5E54[168]] = function(_0x5E6E) {
                this[_0x5E54[1298]] = new Image();
                this[_0x5E54[1298]][_0x5E54[701]] = _0x5E6E;
                this[_0x5E54[193]] = Math[_0x5E54[898]]();
                this[_0x5E54[196]] = Math[_0x5E54[898]]() - 1.25;
                this[_0x5E54[1300]] = ((Math[_0x5E54[898]]() * 0.00075) + 0.0005) * 60;
                this[_0x5E54[1301]] = 0
            };
            this[_0x5E54[1297]] = function(_0x5E6E, _0x5E88) {
                if (this[_0x5E54[196]] > 1.0) {
                    this[_0x5E54[196]] = (Math[_0x5E54[898]]() * -0.25) + -0.1
                } else {
                    if (this[_0x5E54[196]] < -1.25) {
                        this[_0x5E54[196]] = -1.25
                    }
                };
                if (this[_0x5E54[193]] > 1.0) {
                    this[_0x5E54[193]] = 0
                } else {
                    if (this[_0x5E54[193]] < 0) {
                        this[_0x5E54[193]] = 1.0
                    }
                };
                this[_0x5E54[1301]] += (Math[_0x5E54[898]]() * 0.1) - 0.05;
                this[_0x5E54[1301]] = Math[_0x5E54[200]](Math[_0x5E54[214]](-0.2, this[_0x5E54[1301]]), 0.2);
                var _0x5EA2 = _0x5E88 * this[_0x5E54[1300]];
                this[_0x5E54[193]] += _0x5EA2 * Math[_0x5E54[1302]](this[_0x5E54[1301]]);
                this[_0x5E54[196]] += _0x5EA2 * Math[_0x5E54[1303]](this[_0x5E54[1301]]);
                var _0x5ED6 = _0x605C[_0x5E54[187]] * this[_0x5E54[193]];
                var _0x5EBC = _0x605C[_0x5E54[190]] * this[_0x5E54[196]];
                _0x5E6E[_0x5E54[699]](this[_0x5E54[1298]], 25 * this[_0x5E54[1299]], 0, 25, 60, _0x5ED6, _0x5EBC, 25, 60)
            };
            this[_0x5E54[168]](_0x5E88)
        }
        const _0x701A = {
            MODIFIER: 1,
            PASSIVE: 2,
            CONSUMABLE: 3,
            DEBUFF: 4,
            NONE: 0
        };
        var _0x6FB2, _0x6FCC;
        var _0x7000 = {
            0: new _0x6F98(_0x5E54[1304], _0x5E54[898], _0x701A[_0x5E54[49]]),
            1: new _0x6F98(_0x5E54[1305], _0x5E54[1306], _0x701A[_0x5E54[1307]]),
            2: new _0x6F98(_0x5E54[1308], _0x5E54[1309], _0x701A[_0x5E54[1307]]),
            3: new _0x6F98(_0x5E54[1310], _0x5E54[1311], _0x701A[_0x5E54[1312]]),
            4: new _0x6F98(_0x5E54[1313], _0x5E54[1314], _0x701A[_0x5E54[1312]]),
            5: new _0x6F98(_0x5E54[1315], _0x5E54[1300], _0x701A[_0x5E54[1312]]),
            6: new _0x6F98(_0x5E54[1316], _0x5E54[1317], _0x701A[_0x5E54[1312]]),
            7: new _0x6F98(_0x5E54[1318], _0x5E54[1319], _0x701A[_0x5E54[1320]]),
            8: new _0x6F98(_0x5E54[1321], _0x5E54[1322], _0x701A[_0x5E54[1320]]),
            9: new _0x6F98(_0x5E54[1323], _0x5E54[1324], _0x701A[_0x5E54[1320]]),
            10: new _0x6F98(_0x5E54[1321], _0x5E54[1325], _0x701A[_0x5E54[1326]]),
            11: new _0x6F98(_0x5E54[1327], _0x5E54[1328], _0x701A[_0x5E54[1307]]),
            12: new _0x6F98(_0x5E54[1329], _0x5E54[1330], _0x701A[_0x5E54[1320]]),
            13: new _0x6F98(_0x5E54[1331], _0x5E54[1332], _0x701A[_0x5E54[1312]]),
            14: new _0x6F98(_0x5E54[1333], _0x5E54[1334], _0x701A[_0x5E54[1320]]),
            15: new _0x6F98(_0x5E54[1333], _0x5E54[1335], _0x701A[_0x5E54[1326]])
        };
        
        function _0x6F98(_0x5E88, _0x5E6E, _0x5EA2) {
            this[_0x5E54[136]] = _0x5E88;
            this[_0x5E54[761]] = _0x5E6E;
            this[_0x5E54[431]] = _0x5EA2;
            this[_0x5E54[1298]] = null;
            this[_0x5E54[624]] = null
        }
        
        function _0x6AEC() {
            for (var _0x5E88 in _0x7000) {
                var _0x5E6E = _0x7000[_0x5E88];
                var _0x5EBC = _0x5E54[1336] + _0x5E6E[_0x5E54[761]] + _0x5E54[703];
                var _0x5EA2 = new Image();
                _0x5EA2[_0x5E54[130]](_0x5E54[694], function(_0x5E6E, _0x5E88) {
                    _0x5E6E[_0x5E54[624]] = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E88)
                } [_0x5E54[281]](null, _0x5E6E, _0x5EA2));
                _0x5EA2[_0x5E54[701]] = _0x5EBC;
                _0x5E6E[_0x5E54[1298]] = _0x5EA2
            };
            _0x6FCC = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E54[1337]);
            _0x6FB2 = _0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E54[1338])
        }
        
        function _0x600E() {
            this[_0x5E54[1339]] = {};
            this[_0x5E54[1340]] = [];
            this[_0x5E54[1341]] = [];
            this[_0x5E54[490]] = null;
            this[_0x5E54[1342]] = 0;
            this[_0x5E54[624]] = null;
            this[_0x5E54[372]] = 0;
            this[_0x5E54[523]] = function(_0x5EA2, _0x5EBC, _0x5E88) {
                var _0x5E6E = null;
                var _0x5ED6 = _0x7000[_0x5EA2][_0x5E54[431]];
                if (_0x5ED6 != _0x701A[_0x5E54[1320]]) {
                    _0x5E6E = this[_0x5E54[1339]][_0x5EA2];
                    if (_0x5E6E) {
                        _0x5E6E[_0x5E54[227]](_0x5EBC, _0x5E88)
                    } else {
                        _0x5E6E = new _0x5FF4(_0x5EA2, _0x5EBC, _0x5E88);
                        this[_0x5E54[1339]][_0x5EA2] = _0x5E6E;
                        this[_0x5E54[1343]]()
                    };
                    this[_0x5E54[1344]]();
                    this[_0x5E54[1345]]()
                } else {
                    _0x5E6E = new _0x5FF4(_0x5EA2, _0x5EBC, _0x5E88);
                    this[_0x5E54[1341]][_0x5E54[161]](_0x5E6E);
                    this[_0x5E54[1345]]()
                };
                if (_0x5E6E) {
                    _0x6F30[_0x5E54[143]](_0x5E54[1346] + _0x5E6E[_0x5E54[1347]][_0x5E54[136]])
                }
            };
            this[_0x5E54[524]] = function(_0x5EA2) {
                var _0x5E6E = null;
                var _0x5EBC = _0x7000[_0x5EA2][_0x5E54[431]];
                if (_0x5EBC != _0x701A[_0x5E54[1320]]) {
                    _0x5E6E = this[_0x5E54[1339]][_0x5EA2];
                    if (_0x5E6E) {
                        delete this[_0x5E54[1339]][_0x5EA2];
                        this[_0x5E54[1343]]();
                        this[_0x5E54[1345]]();
                        this[_0x5E54[1344]]()
                    }
                } else {
                    for (var _0x5E88 = 0; _0x5E88 < this[_0x5E54[1341]][_0x5E54[9]]; _0x5E88++) {
                        _0x5E6E = this[_0x5E54[1341]][_0x5E88];
                        if (_0x5E6E[_0x5E54[122]] == _0x5EA2) {
                            this[_0x5E54[1341]][_0x5E54[1100]](_0x5E88, 1);
                            this[_0x5E54[1345]]();
                            break
                        }
                    }
                };
                if (_0x5E6E) {
                    _0x6F30[_0x5E54[143]](_0x5E54[1348] + _0x5E6E[_0x5E54[1347]][_0x5E54[136]])
                }
            };
            this[_0x5E54[330]] = function(_0x5EBC) {
                if (this[_0x5E54[1340]][_0x5E54[9]] == 0 && this[_0x5E54[1341]][_0x5E54[9]] == 0) {
                    return
                };
                var _0x5EA2 = _0x5EBC ? _0x5EBC : false;
                for (var _0x5E88 in this[_0x5E54[1339]]) {
                    var _0x5E6E = this[_0x5E54[1339]][_0x5E88];
                    if (_0x5EA2 && _0x5E6E[_0x5E54[1347]][_0x5E54[431]] == _0x701A[_0x5E54[1307]]) {} else {
                        delete this[_0x5E54[1339]][_0x5E88]
                    }
                };
                this[_0x5E54[1343]]();
                this[_0x5E54[1344]]();
                this[_0x5E54[1341]] = [];
                this[_0x5E54[1345]]()
            };
            this[_0x5E54[1343]] = function() {
                this[_0x5E54[1340]] = [];
                if (this[_0x5E54[1339]][_0x5E54[9]] == 0) {
                    return
                };
                for (var _0x5E88 in this[_0x5E54[1339]]) {
                    var _0x5E6E = this[_0x5E54[1339]][_0x5E88];
                    if (_0x5E6E[_0x5E54[1347]][_0x5E54[431]] == _0x701A[_0x5E54[1307]]) {
                        this[_0x5E54[1340]][_0x5E54[1100]](0, 0, _0x5E88)
                    } else {
                        this[_0x5E54[1340]][_0x5E54[161]](_0x5E88)
                    }
                }
            };
            this[_0x5E54[1344]] = function() {
                this[_0x5E54[372]] = 0;
                if (this[_0x5E54[1339]][1] != null) {
                    var _0x5E6E = this[_0x5E54[1339]][1];
                    this[_0x5E54[372]] = _0x5E6E[_0x5E54[1349]] * 16
                }
            };
            this[_0x5E54[227]] = function() {
                if (this[_0x5E54[1340]][_0x5E54[9]] == 0 && this[_0x5E54[1341]][_0x5E54[9]] == 0) {
                    _0x6FE6[_0x5E54[251]] = false;
                    return
                };
                if (Date[_0x5E54[174]]() >= this[_0x5E54[1342]]) {
                    this[_0x5E54[1350]]();
                    this[_0x5E54[1342]] = Date[_0x5E54[174]]() + 1000
                };
                if (!this[_0x5E54[624]]) {
                    this[_0x5E54[624]] = _0x6EE2[_0x5E54[26]][_0x5E54[709]](this[_0x5E54[490]][_0x5E54[68]]);
                    _0x6FE6[_0x5E54[624]] = this[_0x5E54[624]];
                    _0x6FE6[_0x5E54[646]][_0x5E54[641]](0)
                };
                _0x6FE6[_0x5E54[194]][_0x5E54[193]] = _0x716C[_0x5E54[187]]() + 20 - _0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[193]];
                _0x6FE6[_0x5E54[194]][_0x5E54[196]] = 15 - _0x6EFC[_0x5E54[195]][_0x5E54[194]][_0x5E54[196]];
                _0x6FE6[_0x5E54[251]] = true
            };
            this[_0x5E54[1350]] = function() {
                var _0x5E88 = (this[_0x5E54[490]] == null || this[_0x5E54[490]][_0x5E54[68]] == null) ? document[_0x5E54[349]](_0x5E54[68]) : this[_0x5E54[490]][_0x5E54[68]];
                var _0x5EBC = Math[_0x5E54[214]](this[_0x5E54[1340]][_0x5E54[9]], this[_0x5E54[1341]][_0x5E54[9]]);
                _0x5E88[_0x5E54[187]] = 55 * _0x5EBC;
                _0x5E88[_0x5E54[190]] = 105;
                this[_0x5E54[490]] = _0x5E88[_0x5E54[72]](_0x5E54[71]);
                this[_0x5E54[490]][_0x5E54[452]] = _0x5E54[1351];
                this[_0x5E54[490]][_0x5E54[257]] = _0x5E54[1352];
                var _0x5ED6 = 0,
                    _0x5EF0 = 0;
                for (var _0x5EA2 = 0; _0x5EA2 < this[_0x5E54[1340]][_0x5E54[9]]; _0x5EA2++) {
                    var _0x5E6E = this[_0x5E54[1339]][this[_0x5E54[1340]][_0x5EA2]];
                    _0x5E6E[_0x5E54[1297]](this[_0x5E54[490]], _0x5ED6, _0x5EF0);
                    _0x5ED6 += 55
                };
                _0x5ED6 = 0;
                _0x5EF0 = 55;
                for (var _0x5EA2 = 0; _0x5EA2 < this[_0x5E54[1341]][_0x5E54[9]]; _0x5EA2++) {
                    var _0x5E6E = this[_0x5E54[1341]][_0x5EA2];
                    _0x5E6E[_0x5E54[1297]](this[_0x5E54[490]], _0x5ED6, _0x5EF0);
                    _0x5ED6 += 55
                };
                if (this[_0x5E54[624]]) {
                    this[_0x5E54[624]][_0x5E54[227]]()
                };
                this[_0x5E54[1342]] = Date[_0x5E54[174]]() + 1000
            };
            this[_0x5E54[1345]] = function() {
                this[_0x5E54[1342]] = 0
            }
        }
        const _0x5FDA = Math[_0x5E54[29]] * 1.5;
        
        function _0x5FF4(_0x5E88, _0x5EA2, _0x5E6E) {
            this[_0x5E54[122]] = _0x5E88;
            this[_0x5E54[1347]] = _0x7000[_0x5E88];
            this[_0x5E54[1353]] = Date[_0x5E54[174]]();
            this[_0x5E54[1354]] = _0x5E6E;
            this[_0x5E54[1349]] = _0x5EA2;
            this[_0x5E54[227]] = function(_0x5E88, _0x5E6E) {
                this[_0x5E54[1353]] = Date[_0x5E54[174]]();
                this[_0x5E54[1354]] = _0x5E6E;
                this[_0x5E54[1349]] = _0x5E88
            };
            this[_0x5E54[1355]] = function() {
                if (Date[_0x5E54[174]]() >= this[_0x5E54[1354]]) {
                    return 2.0 * Math[_0x5E54[29]]
                } else {
                    var _0x5E88 = this[_0x5E54[1354]] - Date[_0x5E54[174]]();
                    var _0x5EA2 = this[_0x5E54[1354]] - this[_0x5E54[1353]];
                    var _0x5E6E = Math[_0x5E54[200]](_0x5E88 / _0x5EA2, 1.0) * 2.0;
                    return _0x5E6E * Math[_0x5E54[29]]
                }
            };
            this[_0x5E54[1297]] = function(_0x5E6E, _0x5E88, _0x5EA2) {
                _0x5E6E[_0x5E54[699]](this[_0x5E54[1347]][_0x5E54[1298]], _0x5E88, _0x5EA2, 50, 50);
                if (this[_0x5E54[1349]] > 1) {
                    _0x5E6E[_0x5E54[452]] = _0x5E54[1356];
                    _0x5E6E[_0x5E54[456]](this[_0x5E54[1349]], _0x5E88 + 35, _0x5EA2 + 17)
                };
                if (this[_0x5E54[1354]] > 0) {
                    _0x5E6E[_0x5E54[695]]();
                    _0x5E6E[_0x5E54[1357]](_0x5E88 + 25, _0x5EA2 + 25);
                    _0x5E6E[_0x5E54[696]](_0x5E88 + 25, _0x5EA2 + 25, 25, _0x5FDA, _0x5FDA - this[_0x5E54[1355]](), false);
                    _0x5E6E[_0x5E54[697]]();
                    _0x5E6E[_0x5E54[1358]] = 0.75;
                    _0x5E6E[_0x5E54[452]] = _0x5E54[1351];
                    _0x5E6E[_0x5E54[683]]();
                    _0x5E6E[_0x5E54[1358]] = 1.0
                }
            }
        }
        const _0x6CDA = [_0x5E54[1359]];
        var _0x6CC0 = [];
        
        function _0x6778() {
            this[_0x5E54[1360]] = 0;
            this[_0x5E54[1361]] = [];
            this[_0x5E54[666]] = true;
            this[_0x5E54[161]] = function(_0x5E6E) {
                this[_0x5E54[1361]][_0x5E54[161]](_0x5E6E)
            };
            this[_0x5E54[1362]] = function(_0x5E6E) {
                return this[_0x5E54[1361]][_0x5E6E]
            };
            this[_0x5E54[1363]] = function() {
                return this[_0x5E54[1361]][_0x5E54[9]]
            };
            this[_0x5E54[667]] = function() {
                return this[_0x5E54[1362]](Math[_0x5E54[233]](_0x6A02 / this[_0x5E54[1360]]) % (this[_0x5E54[1363]]()))
            };
            this[_0x5E54[689]] = function(_0x5F0A) {
                if (_0x5F0A[_0x5E54[9]] === 0) {
                    return
                };
                const _0x5F24 = document[_0x5E54[349]](_0x5E54[68]);
                const _0x5F3E = _0x5F24[_0x5E54[72]](_0x5E54[71]);
                const _0x5EA2 = document[_0x5E54[349]](_0x5E54[68]);
                const _0x5EBC = _0x5EA2[_0x5E54[72]](_0x5E54[71]);
                const _0x5ED6 = _0x5F0A[0][_0x5E54[1364]]();
                this[_0x5E54[1360]] = _0x5F0A[0][_0x5E54[1365]][_0x5E54[1360]] * 10;
                _0x5F24[_0x5E54[187]] = _0x5ED6[_0x5E54[187]];
                _0x5F24[_0x5E54[190]] = _0x5ED6[_0x5E54[190]];
                _0x5EA2[_0x5E54[187]] = _0x5ED6[_0x5E54[187]];
                _0x5EA2[_0x5E54[190]] = _0x5ED6[_0x5E54[190]];
                for (const _0x5EF0 of _0x5F0A) {
                    _0x5F3E[_0x5E54[256]](0, 0, _0x5F24[_0x5E54[187]], _0x5F24[_0x5E54[190]]);
                    _0x5F3E[_0x5E54[699]](_0x5EA2, 0, 0);
                    const _0x5E6E = _0x5EF0[_0x5E54[1364]]();
                    const _0x5E88 = _0x5E6E[_0x5E54[72]](_0x5E54[71]);
                    _0x5EBC[_0x5E54[699]](_0x5E6E, 0, 0);
                    _0x5E88[_0x5E54[256]](0, 0, _0x5E6E[_0x5E54[187]], _0x5E6E[_0x5E54[190]]);
                    _0x5E88[_0x5E54[699]](_0x5EA2, 0, 0);
                    const {
                        frameInfo
                    } = _0x5EF0;
                    const {
                        disposal
                    } = frameInfo;
                    if (disposal === 2) {
                        _0x5EBC[_0x5E54[256]](frameInfo[_0x5E54[193]], frameInfo[_0x5E54[196]], frameInfo[_0x5E54[187]], frameInfo[_0x5E54[190]])
                    } else {
                        if (disposal === 3) {
                            _0x5EBC[_0x5E54[256]](0, 0, _0x5EA2[_0x5E54[187]], _0x5EA2[_0x5E54[190]]);
                            _0x5EBC[_0x5E54[699]](_0x5F24, 0, 0)
                        }
                    };
                    this[_0x5E54[161]](_0x6EE2[_0x5E54[26]][_0x5E54[709]](_0x5E6E))
                }
            }
        }
        
        function _0x6710(_0x5E6E) {
            return _0x7034[_0x5E6E % _0x7034[_0x5E54[9]]]
        }
        
        function _0x66F6(_0x5E6E) {
            return _0x704E[_0x5E6E % _0x704E[_0x5E54[9]]]
        }
        
        function _0x672A(_0x5E6E) {
            return _0x63D0[_0x5E6E % _0x63D0[_0x5E54[9]]]
        }
        
        function _0x735A(_0x5E6E) {
            for (var _0x5E88 = _0x5E6E[_0x5E54[9]] - 1; _0x5E88 > 0; _0x5E88--) {
                var _0x5EA2 = Math[_0x5E54[233]](Math[_0x5E54[898]]() * (_0x5E88 + 1));
                var _0x5EBC = _0x5E6E[_0x5E88];
                _0x5E6E[_0x5E88] = _0x5E6E[_0x5EA2];
                _0x5E6E[_0x5EA2] = _0x5EBC
            };
            return _0x5E6E
        }
        var _0x687C = [];
        var _0x6896 = [];
        for (var _0x68CA = 0; _0x68CA < 180; _0x68CA++) {
            var _0x62CC = tinycolor({
                h: (_0x68CA * 2),
                s: 97.25,
                v: 100
            });
            var _0x62E6 = _0x62CC[_0x5E54[1202]]();
            _0x687C[_0x68CA] = (_0x62E6[_0x5E54[723]] << 16) + (_0x62E6[_0x5E54[724]] << 8) + _0x62E6[_0x5E54[725]];
            _0x6896[_0x68CA] = _0x62CC[_0x5E54[243]]()
        };
        const _0x7034 = _0x735A(_0x687C[_0x5E54[133]](0));
        const _0x704E = _0x735A(_0x6896[_0x5E54[133]](0));
        delete _0x687C;
        delete _0x6896;
        if (_0x658A[_0x5E54[35]] && _0x658A[_0x5E54[1366]]) {
            _0x6710 = function(_0x5E6E) {
                return _0x658A[_0x5E54[1366]][_0x5E6E % _0x658A[_0x5E54[1366]][_0x5E54[9]]]
            }
        };
        const _0x6160 = [_0x5E54[1367], _0x5E54[1368], _0x5E54[1369], _0x5E54[1370], _0x5E54[1371], _0x5E54[1372], _0x5E54[1373], _0x5E54[1374], _0x5E54[1375], _0x5E54[1376], _0x5E54[1377], _0x5E54[1378], _0x5E54[1379], _0x5E54[1380], _0x5E54[1381], _0x5E54[1382], _0x5E54[1383]];
        const _0x752E = {};
        
        function _0x5F8C(_0x5E6E) {
            if (_0x5E6E === 0 || _0x5E6E === _0x6F30[_0x5E54[262]]) {
                return _0x5E54[1384]
            };
            if (_0x5F72[_0x5E54[466]](_0x5E6E)) {
                delete _0x5F72[_0x5E6E];
                return _0x5E54[1385] + _0x5E6E
            };
            _0x5F72[_0x5E54[161]](_0x5E6E);
            return _0x5E54[1386] + _0x5E6E
        }
        const _0x6300 = {
            whisper: {
                description: _0x5E54[1387],
                triggers: [_0x5E54[1388], _0x5E54[1389], _0x5E54[1390]],
                action: function(_0x5E6E) {
                    var _0x5E88 = parseInt(_0x5E6E[0]);
                    if (isNaN(_0x5E88)) {
                        _0x6F30[_0x5E54[143]](_0x5E54[1391]);
                        return
                    };
                    var _0x5EA2 = _0x5E6E[_0x5E54[133]](1)[_0x5E54[132]](_0x5E54[366]);
                    if (_0x5EA2[_0x5E54[9]] != 0) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[720]](_0x5E88, _0x5EA2))
                    };
                    _0x72A4(_0x5E54[927] + _0x5E88 + _0x5E54[366])
                }
            },
            reply_whisper: {
                description: _0x5E54[1392],
                triggers: [_0x5E54[1393], _0x5E54[723]],
                action: function(_0x5E6E) {
                    var _0x5E88 = _0x5E6E[_0x5E54[132]](_0x5E54[366]);
                    if (_0x5E88[_0x5E54[9]] != 0) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[720]](0, _0x5E88))
                    };
                    _0x72A4(_0x5E54[1394])
                }
            },
            party_chat: {
                description: _0x5E54[1395],
                triggers: [_0x5E54[259], _0x5E54[1396]],
                action: function(_0x5E6E) {
                    var _0x5E88 = _0x5E6E[_0x5E54[132]](_0x5E54[366]);
                    if (_0x5E88[_0x5E54[9]] != 0) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[716]](_0x5E88, 1))
                    };
                    _0x72A4(_0x5E54[1397])
                }
            },
            invite: {
                description: _0x5E54[1398],
                triggers: [_0x5E54[1399], _0x5E54[752]],
                action: function(_0x5E6E) {
                    var _0x5E88 = parseInt(_0x5E6E[0]);
                    if (!isNaN(_0x5E88)) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](0, _0x5E88))
                    } else {
                        _0x6F30[_0x5E54[143]](_0x5E54[1400])
                    }
                }
            },
            leave: {
                description: _0x5E54[1401],
                triggers: [_0x5E54[1402], _0x5E54[1403]],
                action: function(_0x5E6E) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](3, 0))
                }
            },
            promote: {
                description: _0x5E54[1404],
                triggers: [_0x5E54[1405]],
                action: function(_0x5E6E) {
                    var _0x5E88 = parseInt(_0x5E6E[0]);
                    if (!isNaN(_0x5E88)) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](2, _0x5E88))
                    } else {
                        _0x6F30[_0x5E54[143]](_0x5E54[1400])
                    }
                }
            },
            kick: {
                description: _0x5E54[1406],
                triggers: [_0x5E54[1407]],
                action: function(_0x5E6E) {
                    var _0x5E88 = parseInt(_0x5E6E[0]);
                    if (!isNaN(_0x5E88)) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](1, _0x5E88))
                    } else {
                        _0x6F30[_0x5E54[143]](_0x5E54[1400])
                    }
                }
            },
            clear: {
                description: _0x5E54[1408],
                triggers: [_0x5E54[328]],
                action: function(_0x5E6E) {
                    var _0x5E88 = document[_0x5E54[69]](_0x5E54[1409]);
                    while (_0x5E88[_0x5E54[1410]] != null) {
                        _0x5E88[_0x5E54[238]](_0x5E88[_0x5E54[1410]])
                    }
                }
            },
            info: {
                description: _0x5E54[1411],
                triggers: [_0x5E54[765]],
                action: function(_0x5E6E) {
                    if (_0x6F30[_0x5E54[262]] > 0) {
                        _0x6F30[_0x5E54[143]](_0x5E54[1412] + _0x6F30[_0x5E54[262]])
                    } else {
                        _0x6F30[_0x5E54[143]](_0x5E54[1413])
                    }
                }
            },
            scrimmenu: {
                description: _0x5E54[1414],
                triggers: [_0x5E54[1415]],
                action: function(_0x5E6E) {
                    _0x71A0[_0x5E54[15]](_0x5E54[14], _0x71A0[_0x5E54[15]](_0x5E54[14]) == _0x5E54[16] ? _0x5E54[18] : _0x5E54[16])
                }
            },
            join: {
                description: _0x5E54[1416],
                triggers: [_0x5E54[132], _0x5E54[1417]],
                action: function(_0x5E6E) {
                    var _0x5E88 = _0x5E6E[0];
                    if (_0x5E88 != null && _0x5E88[_0x5E54[9]] != 0) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[440]](_0x5E88))
                    }
                }
            },
            private: {
                description: _0x5E54[1418],
                triggers: [_0x5E54[1419]],
                action: function(_0x5E6E) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](4, 1))
                }
            },
            public: {
                description: _0x5E54[1420],
                triggers: [_0x5E54[1421]],
                action: function(_0x5E6E) {
                    _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[717]](4, 0))
                }
            },
            reset_chat: {
                description: _0x5E54[1422],
                triggers: [_0x5E54[1423]],
                action: function(_0x5E6E) {
                    $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[187], _0x5E54[51]);
                    $(_0x5E54[1136])[_0x5E54[15]](_0x5E54[190], _0x5E54[52])
                }
            },
            reset_chat_tabs: {
                description: _0x5E54[1424],
                triggers: [_0x5E54[1425]],
                action: function(_0x5E6E) {
                    _0x6D42[_0x5E54[1238]] = JSON[_0x5E54[54]](JSON[_0x5E54[53]](_0x6438));
                    _0x6028();
                    _0x70B6()
                }
            },
            spectate: {
                description: _0x5E54[1426],
                triggers: [_0x5E54[270], _0x5E54[1286]],
                action: function(_0x5E6E) {
                    var _0x5E88 = parseInt(_0x5E6E[0]);
                    if (!isNaN(_0x5E88)) {
                        _0x6F30[_0x5E54[223]](new _0x6D90[_0x5E54[299]](_0x5E88))
                    } else {
                        _0x6F30[_0x5E54[143]](_0x5E54[1400])
                    }
                }
            },
            disconnect: {
                description: _0x5E54[1427],
                triggers: [_0x5E54[302]],
                action: function(_0x5E6E) {
                    _0x6F30[_0x5E54[302]]()
                }
            },
            account: {
                description: _0x5E54[1428],
                triggers: [_0x5E54[1429]],
                action: function(_0x5E6E) {
                    if (_0x7632 === null) {
                        _0x6F30[_0x5E54[143]](_0x5E54[1430]);
                        return
                    };
                    _0x6F30[_0x5E54[143]](_0x5E54[1431] + _0x7632[_0x5E54[522]])
                }
            },
            block: {
                description: _0x5E54[1432],
                triggers: [_0x5E54[18], _0x5E54[725]],
                action: function(_0x5E6E) {
                    var _0x5EA2 = parseInt(_0x5E6E[0]);
                    if (!isNaN(_0x5EA2)) {
                        var _0x5E88 = _0x5F8C(_0x5EA2);
                        _0x6F30[_0x5E54[143]](_0x5E88)
                    }
                }
            },
            reloadskins: {
                description: _0x5E54[1433],
                triggers: [_0x5E54[1434]],
                action: function(_0x5E6E) {
                    if (_0x73C2 == _0x73F6[_0x5E54[688]]) {
                        return
                    };
                    _0x73C2 = _0x73F6[_0x5E54[166]];
                    _0x6B54()
                }
            }
        };
        const _0x7068 = [_0x5E54[1435], _0x5E54[1436], _0x5E54[1437], _0x5E54[1438], _0x5E54[1439], _0x5E54[1440], _0x5E54[1441], _0x5E54[1442], _0x5E54[1443], _0x5E54[1444], _0x5E54[1445], _0x5E54[1446], _0x5E54[1447], _0x5E54[1448], _0x5E54[1449], _0x5E54[1450], _0x5E54[1451], _0x5E54[1452], _0x5E54[1453], _0x5E54[1454], _0x5E54[1455], _0x5E54[1456], _0x5E54[1457], _0x5E54[1458], _0x5E54[1459], _0x5E54[1460], _0x5E54[1461], _0x5E54[1462], _0x5E54[1463], _0x5E54[1464], _0x5E54[1465], _0x5E54[1466], _0x5E54[1467], _0x5E54[1468], _0x5E54[1469], _0x5E54[1470], _0x5E54[1471], _0x5E54[1472], _0x5E54[1473], _0x5E54[1474], _0x5E54[1475]];
        const _0x675E = [_0x5E54[1476], _0x5E54[1477], _0x5E54[1478], _0x5E54[1479], _0x5E54[1480], _0x5E54[1481], _0x5E54[1482], _0x5E54[1483], _0x5E54[1484], _0x5E54[1485], _0x5E54[1486]];
        const _0x67FA = [_0x5E54[1182], _0x5E54[1487], _0x5E54[1488], _0x5E54[1489], _0x5E54[1490], _0x5E54[1491], _0x5E54[1492], _0x5E54[1493], _0x5E54[1494], _0x5E54[1495], _0x5E54[1496], _0x5E54[1497], _0x5E54[1498], _0x5E54[1499], _0x5E54[1500], _0x5E54[1501]];
        const _0x69CE = [_0x5E54[1], _0x5E54[1502], _0x5E54[1503], _0x5E54[1504], _0x5E54[1505], _0x5E54[1506], _0x5E54[1507], _0x5E54[1], _0x5E54[1508], _0x5E54[1509], _0x5E54[1], _0x5E54[1], _0x5E54[1510], _0x5E54[1511], _0x5E54[1512], _0x5E54[1], _0x5E54[1513], _0x5E54[1514], _0x5E54[1515], _0x5E54[1516], _0x5E54[1517], _0x5E54[1518], _0x5E54[1519], _0x5E54[1520], _0x5E54[1521], _0x5E54[1522], _0x5E54[1], _0x5E54[1523], _0x5E54[1524], _0x5E54[1525], _0x5E54[1526], _0x5E54[1527], _0x5E54[1528], _0x5E54[1529], _0x5E54[1530], _0x5E54[1531], _0x5E54[1532], _0x5E54[1533], _0x5E54[1534], _0x5E54[1535], _0x5E54[1536], _0x5E54[1537], _0x5E54[1538], _0x5E54[1539], _0x5E54[1540], _0x5E54[1541], _0x5E54[1542], _0x5E54[1], _0x5E54[1182], _0x5E54[1487], _0x5E54[1488], _0x5E54[1489], _0x5E54[1490], _0x5E54[1491], _0x5E54[1492], _0x5E54[1493], _0x5E54[1494], _0x5E54[1495], _0x5E54[2], _0x5E54[1543], _0x5E54[1544], _0x5E54[1545], _0x5E54[1546], _0x5E54[987], _0x5E54[1547], _0x5E54[1496], _0x5E54[1497], _0x5E54[1498], _0x5E54[1499], _0x5E54[1500], _0x5E54[1501], _0x5E54[1548], _0x5E54[1549], _0x5E54[1550], _0x5E54[1551], _0x5E54[1552], _0x5E54[1553], _0x5E54[1554], _0x5E54[1555], _0x5E54[1556], _0x5E54[1557], _0x5E54[1558], _0x5E54[1559], _0x5E54[1560], _0x5E54[1561], _0x5E54[1562], _0x5E54[1563], _0x5E54[1564], _0x5E54[1565], _0x5E54[1566], _0x5E54[1567], _0x5E54[1568], _0x5E54[1], _0x5E54[1569], _0x5E54[1], _0x5E54[1570], _0x5E54[1571], _0x5E54[1572], _0x5E54[1573], _0x5E54[1574], _0x5E54[1575], _0x5E54[1576], _0x5E54[1577], _0x5E54[1578], _0x5E54[1579], _0x5E54[1580], _0x5E54[1581], _0x5E54[1582], _0x5E54[1583], _0x5E54[1584], _0x5E54[1585], _0x5E54[1586], _0x5E54[1587], _0x5E54[1588], _0x5E54[1589], _0x5E54[1590], _0x5E54[1591], _0x5E54[1592], _0x5E54[1593], _0x5E54[1594], _0x5E54[1595], _0x5E54[1596], _0x5E54[1597], _0x5E54[1598], _0x5E54[1599], _0x5E54[1600], _0x5E54[1601], _0x5E54[1602], _0x5E54[1603], _0x5E54[1604], _0x5E54[1605], _0x5E54[1606], _0x5E54[1607], _0x5E54[1608], _0x5E54[1609], _0x5E54[1610], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1611], _0x5E54[1612], _0x5E54[1613], _0x5E54[1614], _0x5E54[1615], _0x5E54[1616], _0x5E54[1617], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1618], _0x5E54[1619], _0x5E54[1620], _0x5E54[1621], _0x5E54[1622], _0x5E54[1623], _0x5E54[1624], _0x5E54[1625], _0x5E54[1626], _0x5E54[1627], _0x5E54[1628], _0x5E54[1629], _0x5E54[1630], _0x5E54[1631], _0x5E54[1632], _0x5E54[1633], _0x5E54[1634], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1635], _0x5E54[1636], _0x5E54[1637], _0x5E54[1], _0x5E54[1], _0x5E54[1638], _0x5E54[1639], _0x5E54[1640], _0x5E54[1641], _0x5E54[1642], _0x5E54[1643], _0x5E54[1644], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1], _0x5E54[1645], _0x5E54[1646], _0x5E54[1647], _0x5E54[1648], _0x5E54[1], _0x5E54[1649], _0x5E54[1650], _0x5E54[1], _0x5E54[1651], _0x5E54[1652], _0x5E54[1], _0x5E54[1653], _0x5E54[1], _0x5E54[1], _0x5E54[1654], _0x5E54[1655], _0x5E54[1656], _0x5E54[1657], _0x5E54[1658], _0x5E54[1659], _0x5E54[1660], _0x5E54[1661], _0x5E54[1662], _0x5E54[1663], _0x5E54[1664], _0x5E54[1665], _0x5E54[1666], _0x5E54[1667], _0x5E54[1668], _0x5E54[1669], _0x5E54[1670], _0x5E54[1671], _0x5E54[1672], _0x5E54[1], _0x5E54[1673], _0x5E54[1674], _0x5E54[1]];
        var _0x6556 = [_0x5E54[1675], _0x5E54[1676], _0x5E54[1677], _0x5E54[1678], _0x5E54[1679], _0x5E54[1680], _0x5E54[1681], _0x5E54[1682], _0x5E54[1683], _0x5E54[1684], _0x5E54[1685], _0x5E54[1686], _0x5E54[1687], _0x5E54[1688], _0x5E54[1689], _0x5E54[1690], _0x5E54[1691], _0x5E54[1692], _0x5E54[1693], _0x5E54[1694], _0x5E54[1695], _0x5E54[1696], _0x5E54[1697], _0x5E54[1698], _0x5E54[1699], _0x5E54[1700], _0x5E54[1701], _0x5E54[1702], _0x5E54[1703]];
        var _0x65A4 = null;
        const _0x72F2 = -32768;
        
        function _0x6042(_0x5E54) {
            return _0x67FA[(_0x5E54 >> 4) & 0x0f] + _0x67FA[_0x5E54 & 0x0f]
        }
        
        function _0x6640(_0x5EBC) {
            if (_0x5EBC <= 0) {
                return _0x5E54[1704]
            };
            var _0x5E6E = Math[_0x5E54[233]](_0x5EBC / 3600);
            var _0x5E88 = Math[_0x5E54[233]]((_0x5EBC - (_0x5E6E * 3600)) / 60);
            var _0x5EA2 = _0x5EBC - (_0x5E6E * 3600) - (_0x5E88 * 60);
            if (_0x5E88 < 10 && _0x5E6E > 0) {
                _0x5E88 = _0x5E54[1182] + _0x5E88
            };
            if (_0x5EA2 < 10) {
                _0x5EA2 = _0x5E54[1182] + _0x5EA2
            };
            return (_0x5E6E > 0 ? _0x5E6E + _0x5E54[2] : _0x5E54[1]) + _0x5E88 + _0x5E54[2] + _0x5EA2
        }
        
        function _0x6626(_0x5E88) {
            var _0x5E6E = _0x5E88[_0x5E54[618]]()[_0x5E54[3]](_0x5E54[10]);
            _0x5E6E[0] = _0x5E6E[0][_0x5E54[687]](/\B(?=(\d{3})+(?!\d))/g, _0x5E54[8]);
            return _0x5E6E[_0x5E54[132]](_0x5E54[10])
        }
        
        function _0x6918(_0x5EA2) {
            if (_0x5EA2[_0x5E54[685]](_0x5E54[13]) === 0) {
                _0x5EA2 = _0x5EA2[_0x5E54[133]](1)
            };
            if (_0x5EA2[_0x5E54[9]] === 3) {
                _0x5EA2 = _0x5EA2[0] + _0x5EA2[0] + _0x5EA2[1] + _0x5EA2[1] + _0x5EA2[2] + _0x5EA2[2]
            };
            if (_0x5EA2[_0x5E54[9]] !== 6) {
                throw new Error(_0x5E54[1705])
            };
            var _0x5EBC = parseInt(_0x5EA2[_0x5E54[133]](0, 2), 16),
                _0x5E88 = parseInt(_0x5EA2[_0x5E54[133]](2, 4), 16),
                _0x5E6E = parseInt(_0x5EA2[_0x5E54[133]](4, 6), 16);
            return (_0x5EBC * 0.299 + _0x5E88 * 0.587 + _0x5E6E * 0.114) > 186 ? _0x5E54[1706] : _0x5E54[1367]
        }
        
        function _0x66DC(_0x5E6E) {
            if (_0x5E6E[_0x5E54[1708]][_0x5E54[1707]]) {
                for (var _0x5EA2 = 0; _0x5EA2 < _0x5E6E[_0x5E54[1708]][_0x5E54[1707]][_0x5E54[9]]; _0x5EA2++) {
                    if (_0x5E6E[_0x5E54[1708]][_0x5E54[1707]][_0x5EA2][_0x5E54[1709]] === _0x5E54[1710]) {
                        var _0x5E88 = _0x5E6E[_0x5E54[1708]][_0x5E54[1707]][_0x5EA2][_0x5E54[1711]]();
                        return _0x5E88
                    }
                }
            } else {
                for (var _0x5EA2 = 0; _0x5EA2 < _0x5E6E[_0x5E54[1708]][_0x5E54[967]][_0x5E54[9]]; _0x5EA2++) {
                    return _0x5E6E[_0x5E54[1708]][_0x5E54[967]][_0x5EA2]
                }
            }
        }
        
        function _0x64BA(_0x5EBC, _0x5E88, _0x5ED6) {
            var _0x5EA2 = new Blob([_0x5E88], {
                type: _0x5ED6
            });
            if (window[_0x5E54[1713]][_0x5E54[1712]]) {
                window[_0x5E54[1713]][_0x5E54[1712]](_0x5EA2, _0x5EBC)
            } else {
                var _0x5E6E = document[_0x5E54[349]](_0x5E54[951]),
                    _0x5EF0 = URL[_0x5E54[1714]](_0x5EA2);
                _0x5E6E[_0x5E54[6]] = _0x5EF0;
                _0x5E6E[_0x5E54[1715]] = _0x5EBC;
                document[_0x5E54[521]][_0x5E54[355]](_0x5E6E);
                _0x5E6E[_0x5E54[785]]();
                setTimeout(function() {
                    document[_0x5E54[521]][_0x5E54[238]](_0x5E6E);
                    window[_0x5E54[1717]][_0x5E54[1716]](_0x5EF0)
                }, 0)
            }
        }
        
        function _0x694C(_0x5E6E) {
            return !!_0x5E6E[_0x5E54[608]](_0x694C[_0x5E54[1718]])
        }
        _0x694C[_0x5E54[1718]] = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
        const _0x6F7E = {
            ALL: 3,
            PARTY: 2,
            SELF: 1,
            NONE: 0
        };
        const _0x74E0 = {
            THICK: 9,
            THIN: 2,
            NONE: 0
        };
        const _0x6792 = {
            ULTRA: 1.0,
            HIGH: 0.8,
            MEDIUM: 0.7,
            LOW: 0.5,
            VERYLOW: 0.25
        };
        const _0x6404 = {
            MAP: 0,
            MODE: 1,
            SIZE: 2,
            STARTMASS: 3,
            LOCK: 4,
            PLAYER_UPDATE: 5,
            PLAYER_UPDATE_SELF: 6,
            PLAYER_LIST: 7,
            VIRUS_DENSITY: 8
        };
        const _0x5F0A = {
            FAILURE: 1,
            SUCCESS: 0
        };
        const _0x73F6 = {
            NOT_LOADED: 1,
            LOADING: 2,
            LOADED: 3
        };
        const _0x6216 = {
            ALL: 0x01,
            PARTY: 0x02,
            WHISPER: 0x04,
            SYSTEM: 0x08,
            ADMIN: 0x10
        };
        const _0x6E7A = {
            UNKNOWN: -1,
            ALIVE: 0,
            DEAD: 1,
            SPECTATE: 2
        };
        var _0x63EA = [_0x5E54[744], _0x5E54[1719], _0x5E54[1720], _0x5E54[1721], _0x5E54[1722], _0x5E54[1723], _0x5E54[1724]];
        
        function _0x75CA() {
            if (!_0x6334[_0x5E54[971]]) {
                return
            };
            var _0x5E88 = localStorage[_0x5E54[1284]](_0x5E54[140]);
            var _0x5E6E = version[_0x5E54[3]](_0x5E54[10]);
            if (_0x5E88 === null) {
                localStorage[_0x5E54[1279]](_0x5E54[140], version);
                return
            };
            _0x5E88 = _0x5E88[_0x5E54[3]](_0x5E54[10]);
            if (_0x5E6E[0] != _0x5E88[0] || _0x5E6E[1] != _0x5E88[1]) {
                localStorage[_0x5E54[1279]](_0x5E54[140], version);
                _0x6848(_0x6C58);
                _0x7340($(_0x5E54[917]))
            }
        }
        $(window)[_0x5E54[883]](function() {
            _0x6932 = true
        });
        $(window)[_0x5E54[1065]](function() {
            _0x6932 = false
        });
        
        function _0x723C() {
            if (_0x6932) {
                return
            };
            if (!(_0x5E54[1725] in window)) {
                return
            };
            if (Notification[_0x5E54[1726]] === _0x5E54[1727]) {
                var _0x5E6E = new Notification(_0x5E54[1728], {
                    icon: _0x5E54[1729]
                })
            }
        }
        var _0x6334 = new _0x634E();
        
        function _0x634E() {
            this[_0x5E54[971]] = false;
            this[_0x5E54[1730]] = _0x5E54[1731];
            this[_0x5E54[1732]] = _0x5E54[1733] + this[_0x5E54[1730]] + _0x5E54[1734];
            this[_0x5E54[1735]] = $(_0x5E54[1736]);
            this[_0x5E54[1737]] = {
                name: _0x5E54[1738],
                value: _0x5E54[1739] + this[_0x5E54[1730]],
                exdays: 365 * 2,
                path: _0x5E54[1740]
            };
            this[_0x5E54[1741]] = {
                banner: $(_0x5E54[1742]),
                decline: $(_0x5E54[1743]),
                accept: $(_0x5E54[1744]),
                handlersBound: false
            };
            this[_0x5E54[168]] = function() {
                this[_0x5E54[1745]]();
                this[_0x5E54[1735]][_0x5E54[128]](_0x5E54[562], function(_0x5E6E) {
                    _0x6334[_0x5E54[1746]]($(this)[_0x5E54[565]](_0x5E54[594]))
                });
                var _0x5E6E = this[_0x5E54[1747]]();
                if (_0x5E6E === this[_0x5E54[1737]][_0x5E54[138]]) {
                    this[_0x5E54[1746]](true);
                    this[_0x5E54[1748]](false)
                } else {
                    this[_0x5E54[1746]](false);
                    this[_0x5E54[1748]](true)
                }
            };
            this[_0x5E54[1746]] = function(_0x5E6E) {
                this[_0x5E54[971]] = _0x5E6E;
                aiptag[_0x5E54[971]] = _0x5E6E;
                this[_0x5E54[1735]][_0x5E54[565]](_0x5E54[594], _0x5E6E);
                if (!_0x5E6E) {
                    this[_0x5E54[1749]]();
                    if (firebase[_0x5E54[32]]()[_0x5E54[343]] !== null) {
                        firebase[_0x5E54[32]]()[_0x5E54[972]]()[_0x5E54[346]](function() {})[_0x5E54[344]]((_0x5E54) => {})
                    };
                    $(_0x5E54[975])[_0x5E54[19]]();
                    $(_0x5E54[974])[_0x5E54[19]]();
                    $(_0x5E54[1025])[_0x5E54[19]]();
                    $(_0x5E54[1026])[_0x5E54[17]]();
                    this[_0x5E54[1748]](true)
                } else {
                    this[_0x5E54[1750]]();
                    this[_0x5E54[1748]](false);
                    _0x6AD2();
                    _0x6BA2();
                    $(_0x5E54[1026])[_0x5E54[19]]();
                    if ($(_0x5E54[974])[_0x5E54[15]](_0x5E54[14]) !== _0x5E54[16]) {
                        $(_0x5E54[1025])[_0x5E54[19]]()
                    } else {
                        $(_0x5E54[1025])[_0x5E54[17]]()
                    }
                }
            };
            this[_0x5E54[1748]] = function(_0x5E6E) {
                if (_0x5E6E) {
                    if (!this[_0x5E54[1741]][_0x5E54[1751]]) {
                        this[_0x5E54[1752]]();
                        this[_0x5E54[1741]][_0x5E54[1751]] = true
                    };
                    this[_0x5E54[1741]][_0x5E54[1754]][_0x5E54[1753]]()
                } else {
                    this[_0x5E54[1741]][_0x5E54[1754]][_0x5E54[1755]]()
                }
            };
            this[_0x5E54[1752]] = function() {
                this[_0x5E54[1741]][_0x5E54[1756]][_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                    _0x6334[_0x5E54[1746]](false);
                    _0x6334[_0x5E54[1748]](false)
                });
                this[_0x5E54[1741]][_0x5E54[1757]][_0x5E54[128]](_0x5E54[785], function(_0x5E6E) {
                    _0x6334[_0x5E54[1746]](true);
                    _0x6334[_0x5E54[1748]](false)
                });
                $(_0x5E54[1760])[_0x5E54[512]](_0x5E54[1758] + this[_0x5E54[1732]] + _0x5E54[1759])
            };
            this[_0x5E54[1750]] = function() {
                var _0x5E6E = new Date();
                _0x5E6E[_0x5E54[1762]](_0x5E6E[_0x5E54[769]]() + (this[_0x5E54[1737]][_0x5E54[1761]] * 24 * 60 * 60 * 1000));
                var _0x5E88 = _0x5E54[1763] + _0x5E6E[_0x5E54[1764]]();
                document[_0x5E54[1765]] = this[_0x5E54[1737]][_0x5E54[136]] + _0x5E54[1545] + this[_0x5E54[1737]][_0x5E54[138]] + _0x5E54[1543] + _0x5E88 + _0x5E54[1766] + this[_0x5E54[1737]][_0x5E54[1767]] + _0x5E54[1543]
            };
            this[_0x5E54[1749]] = function() {
                document[_0x5E54[1765]] = this[_0x5E54[1737]][_0x5E54[136]] + _0x5E54[1768] + this[_0x5E54[1737]][_0x5E54[1767]] + _0x5E54[1543]
            };
            this[_0x5E54[1747]] = function() {
                var _0x5ED6 = this[_0x5E54[1737]][_0x5E54[136]] + _0x5E54[1545];
                var _0x5EA2 = decodeURIComponent(document[_0x5E54[1765]]);
                var _0x5E88 = _0x5EA2[_0x5E54[3]](_0x5E54[1543]);
                for (var _0x5EBC = 0; _0x5EBC < _0x5E88[_0x5E54[9]]; _0x5EBC++) {
                    var _0x5E6E = _0x5E88[_0x5EBC];
                    while (_0x5E6E[_0x5E54[197]](0) == _0x5E54[366]) {
                        _0x5E6E = _0x5E6E[_0x5E54[686]](1)
                    };
                    if (_0x5E6E[_0x5E54[685]](_0x5ED6) == 0) {
                        return _0x5E6E[_0x5E54[686]](_0x5ED6[_0x5E54[9]], _0x5E6E[_0x5E54[9]])
                    }
                };
                return false
            };
            this[_0x5E54[1745]] = function() {
                var _0x5ED6 = _0x5E54[1769] + _0x5E54[1545];
                var _0x5EA2 = decodeURIComponent(document[_0x5E54[1765]]);
                var _0x5E88 = _0x5EA2[_0x5E54[3]](_0x5E54[1543]);
                var _0x5EF0 = null;
                for (var _0x5EBC = 0; _0x5EBC < _0x5E88[_0x5E54[9]]; _0x5EBC++) {
                    var _0x5E6E = _0x5E88[_0x5EBC];
                    while (_0x5E6E[_0x5E54[197]](0) == _0x5E54[366]) {
                        _0x5E6E = _0x5E6E[_0x5E54[686]](1)
                    };
                    if (_0x5E6E[_0x5E54[685]](_0x5ED6) == 0) {
                        _0x5EF0 = _0x5E6E[_0x5E54[686]](_0x5ED6[_0x5E54[9]], _0x5E6E[_0x5E54[9]])
                    }
                };
                if (_0x5EF0 === _0x5E54[1770]) {
                    this[_0x5E54[1750]]();
                    document[_0x5E54[1765]] = _0x5E54[1771]
                } else {
                    document[_0x5E54[1765]] = _0x5E54[1771]
                }
            }
        }
        var _0x7492 = new _0x74AC();
        
        function _0x74AC() {
            this[_0x5E54[1772]] = 0;
            this[_0x5E54[1773]] = 0;
            this[_0x5E54[837]] = function() {
                this[_0x5E54[1772]]++;
                if (this[_0x5E54[1772]] % 5 == 1) {
                    return true
                } else {
                    return false
                }
            }
        }
        
        function _0x68E4() {
            if (typeof aipPlayer != _0x5E54[838]) {
                aiptag[_0x5E54[436]][_0x5E54[840]][_0x5E54[161]](function() {
                    adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: _0x5E54[1774],
                        PREROLL_ELEM: document[_0x5E54[69]](_0x5E54[1775]),
                        AIP_COMPLETE: function() {
                            if (!_0x6F30[_0x5E54[270]]) {
                                _0x6F30[_0x5E54[286]]()
                            } else {
                                _0x6F30[_0x5E54[298]]()
                            }
                        }
                    })
                })
            } else {}
        }
        _0x68E4();
        _0x7478()
    }
    showSideMenu = _0x5E88;
    hideSideMenu = _0x5EA2;
    (_0x5E6E)(_0x5E54[0], 1, _0x5E54[1]);
    version = _0x5E54[12];;
    $(_0x5EBC)
})()