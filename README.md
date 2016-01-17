# Projeto Ionic Sample




## Build

- mup deploy
- meteor build .build/local/ --server=http://ec2-52-24-217-152.us-west-2.compute.amazonaws.com/
- cd .build/local/android/
- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-unsigned.apk ionic-sample
- rm production.apk
- ~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 release-unsigned.apk production.apk


## ICONES E SPLASHS
- http://apetools.webprofusion.com/tools/imagegorilla

## DEPLOY INICIAL USANDO MUP
- http://sergelobatch.com/slog/2015/4/10/using-mup/