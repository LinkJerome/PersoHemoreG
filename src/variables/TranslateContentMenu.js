import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, ListItem, ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { withTranslation } from 'react-i18next';

 function TranslateContentMenu({ t }) {
    
    /* Check if your icon is imported and defined on Website.js */
    const menuContent = [
        {
            text: t('personalInfos'),
            icon: 'venus-mars'
        }, 
        {
            text: t('partners'),
            icon: 'star'
        }, 
        {
            text: t('works'),
            icon: 'briefcase'
        },
        {
            text: 'Portfolio',
            icon: 'project-diagram'
        }, 
        {
            text: 'Divider'
        }, 
        {
            text: t('contact'),
            icon: 'envelope'
        }
    ];

    return (
        menuContent.map((content, index) => (
            content.text === 'Divider' ? <Divider /> : 
            <ListItem button key={content.text}>
                <ListItemIcon><FontAwesomeIcon icon={content.icon} pull="right" size="lg"/></ListItemIcon>
                <ListItemText primary={content.text} />
            </ListItem>
        ))
    );
};

export default withTranslation()(TranslateContentMenu);