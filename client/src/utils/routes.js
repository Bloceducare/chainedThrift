export const routes = {
    landing: '/',
    swap: '/app/swap',
    purses: '/app/purses',
    purse: '/app/purse/:id/*', //this is a nested route hence the asterisk character
}

export const purseRoutes = {
    home: '/',
    chat: '/chat',
    actions: '/actions',
    settings: '/settings',
}