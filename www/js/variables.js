// TODO: Encapsulate all these variables using Angular's constant.
//       Ex.: angular.module('gotMusicApp').constant('artist_name', 'Far From Alaska')

// ARTIST
// Trocar pelo nome do artista
var ARTIST_NAME = 'Far From Alaska';

// APP
// Trocar por 'gotmusic' + {nome do artista}
var URL_SCHEME = 'gotmusicfarfromalaska://';

// Geolocation
var LATITUDE;
var LONGITUDE;

// PUSH NOTIFICATION
// Trocar por App ID do app criado no Game Thrive
var GAMETHRIVE_APP_ID = '37e5cd9c-1793-11e5-b426-7383d04b8837';

// Trocar pela ID do Projeto do novo App criado no Google Developers Console
var GCM_SENDER_ID = '232610257468';

// MESSAGE
// Trocar por id da planilha de mensagens (respostas) criada no Google Drive
var MESSAGE_FORM_ID = '1bICN53IjdvSvx5VRxbnyR2Bo4v5GOrDniTD6m8On_JM';
var MESSAGE_WORKSHEET_ID;

// FACEBOOK
// Trocar pelo id da página do facebook
// Buscar id pelo usuário: http://findmyfacebookid.com/
var FACEBOOK_PAGE_ID = '349113845174384';

// Trocar por Client ID do App criado no Facebook Developers
var FACEBOOK_CLIENT_ID = '954959894537819';

// Trocar por Client Secret do App criado no Facebook Developers
var FACEBOOK_CLIENT_SECRET = 'fecc2d553b397e1ee952a08a4085a591';

// TWITTER
// Trocar por nome de usuário do artista no Twitter
var TWITTER_USERNAME = 'FarFromAlaska';

// INSTAGRAM
// Trocar por nome de usuário do artista no Instagram
var INSTAGRAM_USERNAME = 'farfromalaska';

// Trocar pelo id do usuário no Instagram
// Buscar id pelo usuário: http://jelled.com/instagram/lookup-user-id
var INSTAGRAM_USER_ID = '313725767';
var INSTAGRAM_SCOPE = 'likes+relationships';

// Trocar pela API Key do novo App criado no Instagram Developers
var INSTAGRAM_API_KEY = 'a98b0124631f4cc2b7724b3c0712d14f';
var INSTAGRAM_REDIRECT_URI = URL_SCHEME + 'instagram/';
var INSTAGRAM_ACCESS_TOKEN;

// DEEZER
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Deezer, colocar 'DEEZER_MODE_PLAYLIST = true;' e 'var DEEZER_MODE_ALBUM = false;'
// Caso deseje uma ALBUM no Deezer, colocar 'DEEZER_MODE_PLAYLIST = false;' e 'var DEEZER_MODE_ALBUM = true;'
var DEEZER_MODE_PLAYLIST = false;
var DEEZER_MODE_ALBUM = true;

// Trocar pela API ID do novo App criado no Deezer Developers
var DEEZER_API_ID = '153981';

// Trocar pelo id da playlist desejada
var DEEZER_PLAYLIST_ID = '1054614051';

// Trocar pelo id do álbum desejado
var DEEZER_ALBUM_ID = '9758022';
var DEEZER_CHANNEL_URL = 'http://vladimir.sh/playground/deezer_light/channel.html';

// YOUTUBE
// [IMPORTANTE] APENAS UMA DAS OPÇÕES PODE SER TRUE
// Caso deseje uma PLAYLIST no Youtube, colocar 'YOUTUBE_MODE_PLAYLIST = true;' e 'var YOUTUBE_MODE_VIDEO = false;'
// Caso deseje um VIDEO no YouTube, colocar 'YOUTUBE_MODE_PLAYLIST = false;' e 'var YOUTUBE_MODE_VIDEO = true;'
var YOUTUBE_MODE_PLAYLIST = false;
var YOUTUBE_MODE_VIDEO = true;

// Trocar pelo id da playlist desejada
var YOUTUBE_PLAYLIST_ID = null;

// Trocar pelo id do video desejado
var YOUTUBE_VIDEO_ID = 'h6ZzhUqeU90';

// Trocar pela API Youtube do novo App criado no Google Developers Console
var YOUTUBE_API_KEY = 'AIzaSyDDSM6JyiBBYbK7Vs0FY10SwZMIhyj2DTY';

// ITUNES
// Trocar pelo id do artista no iTunes
var ITUNES_USER_ID = '591933697';
var ITUNES_AFFILIATE_CODE = '1l3vuS7';

// Note: Google Play has no API to fetch albums info such as iTunes has.
//       Then we need to build a "iTunes -> Google" relashionship to create links
//       to Google Play on Android devices.
var GOOGLE_PLAY_ALBUMS = {
};

// SONGKICK
// Trocar pelo id do artista no Songkick
var SONGKICK_ARTIST_ID = '6054394';

// Trocar pela API Key do novo App criado no Songkick Developers
var SONGKICK_API_KEY = 'LKwWsc81lEc7oDAG';

// DEMAND
// Trocar por id do form de mensagens criada no Google Drive para pedir shows
var DEMAND_FORM_URL = 'https://docs.google.com/forms/d/1HUawFD9klS6nfW64-O-4bkwWsdyxAF98JgqwedZrATc/formResponse';

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
var LIVESTREAM_USER_ID = 'MZt1OqN1YuCMU0nBVMt8tw';
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
