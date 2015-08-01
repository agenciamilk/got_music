// TODO: Encapsulate all these variables using Angular's constant.
//       Ex.: angular.module('gotMusicApp').constant('artist_name', 'Far From Alaska')

// ARTIST
// Trocar pelo nome do artista
var ARTIST_NAME = 'Abraham Mateo';

// APP
// Trocar por 'gotmusic' + {nome do artista}
var URL_SCHEME = 'gotmusicabrahammateo://';

// Geolocation
var LATITUDE;
var LONGITUDE;

// PUSH NOTIFICATION
// Trocar por App ID do app criado no Game Thrive
var GAMETHRIVE_APP_ID = '53fdb92e-28cb-11e5-be46-2f2303deda73';

// Trocar pela ID do Projeto do novo App criado no Google Developers Console
var GCM_SENDER_ID = '119063429101';

// MESSAGE
// Trocar por id da planilha de mensagens (respostas) criada no Google Drive
var MESSAGE_FORM_ID = '1O-QMKcTRFSHzMXUDfpk2ey5wrYBPjpCBMPHRN29vfm4';
var MESSAGE_WORKSHEET_ID;

// FACEBOOK
// Trocar pelo id da página do facebook
// Buscar id pelo usuário: http://findmyfacebookid.com/
var FACEBOOK_PAGE_ID = '228443517236682';

// Trocar por Client ID do App criado no Facebook Developers
var FACEBOOK_CLIENT_ID = '661697240641590';

// Trocar por Client Secret do App criado no Facebook Developers
var FACEBOOK_CLIENT_SECRET = '42daa0fca8a23a212c6c2708d8cd2244';

// TWITTER
// Trocar por nome de usuário do artista no Twitter
var TWITTER_USERNAME = 'AbrahamMateoMus';

// INSTAGRAM
// Trocar por nome de usuário do artista no Instagram
var INSTAGRAM_USERNAME = 'abrahammateomus';

// Trocar pelo id do usuário no Instagram
// Buscar id pelo usuário: http://jelled.com/instagram/lookup-user-id
var INSTAGRAM_USER_ID = '189792409';
var INSTAGRAM_SCOPE = 'likes+relationships';

// Trocar pela API Key do novo App criado no Instagram Developers
var INSTAGRAM_API_KEY = 'd73b2dbc54404b18802f81994b68cae4';
var INSTAGRAM_REDIRECT_URI = URL_SCHEME + 'instagram/';
var INSTAGRAM_ACCESS_TOKEN;

// DEEZER
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Deezer, colocar 'DEEZER_MODE_PLAYLIST = true;' e 'var DEEZER_MODE_ALBUM = false;'
// Caso deseje uma ALBUM no Deezer, colocar 'DEEZER_MODE_PLAYLIST = false;' e 'var DEEZER_MODE_ALBUM = true;'
var DEEZER_MODE_PLAYLIST = true;
var DEEZER_MODE_ALBUM = false;

// Trocar pela API ID do novo App criado no Deezer Developers
var DEEZER_API_ID = '161335';

// Trocar pelo id da playlist desejada
var DEEZER_PLAYLIST_ID = '1299935225';

// Trocar pelo id do álbum desejado
var DEEZER_ALBUM_ID = '10592535';
var DEEZER_CHANNEL_URL = 'http://vladimir.sh/playground/deezer_light/channel.html';

// YOUTUBE
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Youtube, colocar 'YOUTUBE_MODE_PLAYLIST = true;' e 'var YOUTUBE_MODE_VIDEO = false;'
// Caso deseje um VIDEO no YouTube, colocar 'YOUTUBE_MODE_PLAYLIST = false;' e 'var YOUTUBE_MODE_VIDEO = true;'
var YOUTUBE_MODE_PLAYLIST = true;
var YOUTUBE_MODE_VIDEO = false;

// Trocar pelo id da playlist desejada
var YOUTUBE_PLAYLIST_ID = 'PLY-yjaZKAbakfA1DFclJoQxO7G1rE457x';

// Trocar pelo id do video desejado
var YOUTUBE_VIDEO_ID = 'h6ZzhUqeU90';

// Trocar pela API Youtube do novo App criado no Google Developers Console
var YOUTUBE_API_KEY = 'AIzaSyCop4Q0M0elkGysvAyod8P6H0LYhCfJI0Q';

// ITUNES
// Trocar pelo id do artista no iTunes
var ITUNES_USER_ID = '340701347';
var ITUNES_AFFILIATE_CODE = '1l3vuS7';

// Note: Google Play has no API to fetch albums info such as iTunes has.
//       Then we need to build a "iTunes -> Google" relashionship to create links
//       to Google Play on Android devices.
var GOOGLE_PLAY_ALBUMS = {
  '1003793824': 'Bmeodbnjfc6higcw7pprm7ligba',
  '714948971':  'Bee6nolpva5c53xthvtyrqksjpe',
  '690537359':  'Bw64re76iw2eoaq5vphi2tgc4ey',
  '642780173':  'Blv3kaammvx3jppna3kbf7lnln4'
};

// SONGKICK
// Trocar pelo id do artista no Songkick
var SONGKICK_ARTIST_ID = '7756389';

// Trocar pela API Key do novo App criado no Songkick Developers
var SONGKICK_API_KEY = 'GtDq783iP2sZSoy3';

// DEMAND
// Trocar por id do form de mensagens criada no Google Drive para pedir shows
var DEMAND_FORM_URL = 'https://docs.google.com/forms/d/1adW2MzFX4TDdioZaGID-WVukoFWOrrWRd-1IDnwtmPY/formResponse';

// Trocar pelo id do <input> do email
var DEMAND_EMAIL_INPUT_ID = 'entry_1296407525';

// Trocar pelo id do <input> de cidade
var DEMAND_CITY_INPUT_ID = 'entry_1893028624';

// Trocar pelo id do <input> de latitude
var DEMAND_LATITUDE_INPUT_ID = 'entry_1425906170';

// Trocar pelo id do <input> de longitude
var DEMAND_LONGITUDE_INPUT_ID = 'entry_11332549';
var DEMAND_EMPTY_EMAIL_MESSAGE = 'Preencha o campo com seu email';
var DEMAND_EMAIL_FORMAT_MESSAGE = 'Email inválido';
var DEMAND_EMPTY_CITY_MESSAGE = 'Selecione uma cidade';

// LIVESTREAM
// Trocar pelo id do usuário no YouTube
// Como encontrar o id do usuário: https://support.google.com/youtube/answer/3250431?hl=pt
var LIVESTREAM_USER_ID = 'tSZvy4s4FAF5WTp9oskr6g';
var LIVESTREAM_LIVE_STRING = 'AO VIVO';
var LIVESTREAM_COMPLETED_STRING = 'Arquivo';
var LIVESTREAM_PENDING_STRING = 'Aguarde';
var LIVESTREAM_EMPTY_STRING = 'Ainda não há streaming agendado';

// GLOBALS
var MODAL_TIMEOUT = 2000;
var MINUTES = 60 * 1000;
var DAYS = 24 * 60 * MINUTES;
var DEMAND_MINIMUM_INTERVAL = 1 * DAYS;     // Number of Days
var INTERNET_CHECK_INTERVAL = 1 * MINUTES; // Number of Minutes
var ITEM_MARGIN = 2 * 5;
var INITIAL_RESIZE_TIMEOUT = 3000;

var IOS;
var ANDROID;
var VERSION;
var WIDTH;
var HEIGHT;
