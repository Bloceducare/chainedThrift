export const appRoutes = {
    swap: '/swap',
    purses: '/purses',
    purse: '/purse/:id/*', //this is a nested route hence the asterisk character
}

export const purseRoutes = {
    home: '/',
    chat: '/chat',
    actions: '/actions',
    settings: '/settings',
}

export const absoluteRoutes = {
    landing: '/',
    purses: '/app/purses',
    swap: '/app/swap',
    purse: '/app/purse/:id',
    purseChat: '/app/purse/:id/chat',
    purseActions: '/app/purse/actions',
    purseSettings: '/app/purse/settings'
}