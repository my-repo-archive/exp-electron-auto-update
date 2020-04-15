build:
	electron-builder build --mac
	electron-builder build --linux
	electron-builder build --win
	du -sh release/*
