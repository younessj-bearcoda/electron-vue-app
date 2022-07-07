import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'

export default async () => {
    console.log('Installing DevTools...')

    for (const devtool of [VUEJS3_DEVTOOLS]) {
        await installExtension(devtool)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err))
    }

    console.log('DevTools Installed...')
}
