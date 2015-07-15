# Requisitos

* Node.js
* Cordova (`sudo npm install -g cordova`)
* PhoneGap (`sudo npm install -g phonegap`)
* Android SDK Tools (Android Studio)
* XCode
* [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [splashicon-generator 0.2.4](https://github.com/eberlitz/splashicon-generator) (splash/icons generation, `npm install -g splashicon-generator@0.2.4`)


# Development

* Update the `PATH`
```
# ~/.bash_profile
PATH=$PATH:$HOME/Library/Android/sdk/platform-tools
PATH=$PATH:$HOME/Library/Android/sdk/tools
PATH=$PATH:$HOME/Library/Android/sdk/build-tools/21.1.2
```

* To run the project on devices, execute:
```
cordova run ios
cordova run android
```

Lembrando que para iOS, o provisioning profile de desenvolvimento tem que ter sido baixado, instalado (basta clicar) e o device que deseja instalar deve ter sido cadastrado no itunes developer.

# Instructions to create another app

* Update `id="com.gotmusic.<artist>"` at `config.xml`
* Update `<variable name="URL_SCHEME" value="gotmusic<artist>" />` at `config.xml`
* Update `<title>` tag at `www/index.html`
* Update variables at `www/js/variables.js`
* Update `@artist-color` at `www/less/variables.less`
* Update artist's name at `www/templates/modal.html`
* Update `www/img/profile_picture.png` - 100x100px
* Update livestream images at `www/img/livestream/`
* Update `var twitter_timeline = ...` at `news_ctrl.js`


## Build and Release

* Compile the CSS with `lessc www/less/styles.less > www/css/styles.css`


### Android

#### Generate a keystore

    keytool -genkey -v -keystore <artista>.keystore -alias <artista> -keyalg RSA -keysize 2048 -validity 10000

Save the __generated file__, __password__ and __alias__.

#### Sign the APK

    cordova build android --release

    export unsigned_apk=platforms/android/ant-build/MainActivity-release-unsigned.apk

    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <key-gerada> $unsigned_apk <alias>

    jarsigner -verify -verbose -certs $unsigned_apk

    zipalign -v 4 $unsigned_apk <artista>.apk

The `<artista>.apk` should be sent to Google Play.


### iOS

* No [iTunes Developer](https://developer.apple.com/account/ios/identifiers/bundle/bundleList.action), é preciso, primeiro criar um identifier "App ID" `com.gotmusic.<artista>`.
* Criar um Certificate para Push, seguindo o passo a passo da Apple.
* Criar Provisioning Profile, selecionando o identificador criado para o app.
* `cordova build ios --release`
* No XCode, abrir o projeto de xcode gerado pelo comando anterior, localizado em `<projeto>/platforms/ios/*.xcodeproj`.
* `Product → Clean`
* Na esquerda superior, selecionar o device "iOS Device"
* `Product → Archive`
* Criar um novo app no iTunes Connect (Site), selecionando o identificador criado.
* Validade
* Desmarcar o checkbox "include app symbols [...]"
* Sendo validado, "Submit" seguindo os mesmos passos.
* Gerar `.p12` para notificação iOS
    * No programa Key Chain Access, achar o certificado gerado de notificação e clicar com o direito do mouse para exportar e gerar o `.p12`. Lembrando que é preciso gerar um diferente para teste e outro para produção.
