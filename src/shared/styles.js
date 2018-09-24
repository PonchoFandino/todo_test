const colorOne = '#23c3a6';
const colorTwo = '#404040';
const colorThree = '#ffffff';
//background: #23c3a6;
const Style = {
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '2px',
        boxShadow: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexDirection: 'column',
        flexDirection: 'column',
        boxSizing: 'border-box',
        margin: '5px auto',
        padding: '25px',
        minHeight: '550px',
        minWidth: '400px',
    },
    cardM:{
        margin: '30px auto',
        width: '400px'
    },
    titleM: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        lineHeight: '2rem',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        color: colorTwo
    },
    input: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '1rem',
        lineHeight: '1.75rem',
        fontWeight: '400',
        letterSpacing: '.00937em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        MsFlexItemAlign: 'end',
        alignSelf: 'flex-end',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '20px 12px 6px',
        WebkitTransition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        OTransition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        transition: 'opacity .18s cubic-bezier(.4,0,.2,1)',
        border: 'none',
        borderBottom: '1px solid',
        borderRadius: '0',
        background: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none'
    },
    label: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        lineHeight: '2rem',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        color: colorOne
    },
    navRight: {

    },
    button: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '.875rem',
        lineHeight: '2.25rem',
        fontWeight: '500',
        letterSpacing: '.08929em',
        textDecoration: 'none',
        textTransform: 'uppercase',
        MdcRippleFgSize: '0',
        MdcRippleLeft: '0',
        MdcRippleTop: '0',
        MdcRippleFgScale: '1',
        MdcRippleFgTranslateEnd: '0',
        MdcRippleFgTranslateStart: '0',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        willChange: 'transform,opacity',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        position: 'relative',
        MsFlexAlign: 'center',
        alignItems: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        minWidth: '64px',
        height: '36px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        WebkitAppearance: 'none',
        overflow: 'hidden',
        verticalAlign: 'middle',
        borderRadius: '2px',
        float: 'right',
        margin: '10px 5px',
        background: colorOne,
        color: colorThree
    },
    buttonIcon: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '.875rem',
        lineHeight: '2.25rem',
        fontWeight: '500',
        letterSpacing: '.08929em',
        textDecoration: 'none',
        textTransform: 'uppercase',
        MdcRippleFgSize: '0',
        MdcRippleLeft: '0',
        MdcRippleTop: '0',
        MdcRippleFgScale: '1',
        MdcRippleFgTranslateEnd: '0',
        MdcRippleFgTranslateStart: '0',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        willChange: 'transform,opacity',
        padding: '0 8px',
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        position: 'relative',
        MsFlexAlign: 'center',
        alignItems: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        width: '40px',
        height: '40px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        WebkitAppearance: 'none',
        overflow: 'hidden',
        verticalAlign: 'middle',
        borderRadius: '2px',
        float: 'right',
        margin: '10px 5px',
        borderRadius: '50%',
        color: colorThree
    },
    nav: {
        height: '64px',
        width: '100%',
        minWidth: '400px',
        backgroundColor: colorTwo,
        color: colorOne,
        display: '-ms-flexbox',
        display: 'flex',
        MsFlexDirection: 'initial',
        flexDirection: 'initial',
        MsFlexPack: 'justify',
        justifyContent: 'space-between',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        zIndex: '4'
    },
    navSpan: {
        fontFamily: 'Roboto,sans-serif',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '1.25rem',
        lineHeight: '2rem',
        fontWeight: 'bold',
        letterSpacing: '.0125em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        paddingLeft: '20px',
        paddingRight: '0',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        zIndex: '1',
    },
    navHeader: {
        display: '-ms-inline-flexbox',
        display: 'inline-flex',
        MsFlex: '1 1 auto',
        flex: '1 1 auto',
        MsFlexAlign: 'center',
        alignItems: 'center',
        padding: '8px 12px',
        zIndex: '1'
    },
    navStart: {
        MsFlexPack: 'start',
        justifyContent: 'flex-start',
        MsFlexOrder: '1',
        order: '1'
    },
    navEnd: {
        MsFlexPack: 'end',
        justifyContent: 'flex-end',
        MsFlexOrder: '1',
        order: '1'
    },
    avatar: {
        backgroundSize: 'cover',
         height: '40px',
        width: '40px',
        borderRadius: '50%',
        flexShrink: 0,
        margin: 'auto'
    }
}
export default Style;