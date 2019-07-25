import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, ListItem, ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

 function TranslateContentMenu({ t }) {
    
    /* Check if your icon is imported and defined on Website.js */
    const menuContent = [
        {
            text: t('home'),
            icon: 'home',
            url: '/'
        },
        {
            text: 'Divider'
        }, 
        {
            text: t('personalInfos'),
            icon: 'venus-mars',
            url: '/about'
        }, 
        {
            text: t('partners'),
            icon: 'star',
            url: '/partners'
        }, 
        {
            text: t('works'),
            icon: 'briefcase',
            url: '/timeline'
        },
        {
            text: 'Portfolio',
            icon: 'project-diagram',
            url: '/portfolio'
        }, 
        {
            text: 'Divider'
        }, 
        {
            text: t('contact'),
            icon: 'envelope',
            url: '/contact'
        }
    ];

    return (
        menuContent.map((content, index) => (
            content.text === 'Divider' ? <Divider key={index} /> : 
                <ListItem button key={content.text} alignItems="center" to={content.url} component={Link}>
                        <ListItemIcon><FontAwesomeIcon icon={content.icon} size="lg" /></ListItemIcon>
                        <ListItemText primary={content.text} />
                </ListItem>
        ))
    );
};

export default withTranslation()(TranslateContentMenu);