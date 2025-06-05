const layouts = [
    'custom-onecol',
    'custom-twocol-50-50',
    'custom-twocol-50-50-brick',
    'custom-threecol-33-34-33',
    'fourcol',
    'special',
]

const giveClass = (className) => {
    const layout = document.querySelector(`.layout--${className}`)
    layout.classList.add('first-of-layout-type')
}

layouts.forEach((layout) => {
    giveClass(layout)
})
