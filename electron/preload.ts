// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge } from 'electron'
import { BrowserWindow } from '@electron/remote'
import { ElectronApi } from '@/api/electron-api'

// @ts-ignore
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        // @ts-ignore
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

contextBridge.exposeInMainWorld('electronApi', {
    closeWindow: async () => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow !== null) focusedWindow.close()
    },
    minimizeWindow: async () => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow !== null) focusedWindow.minimize()
    },
    maximizeWindow: async () => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow !== null) focusedWindow.maximize()
    },
} as ElectronApi)
