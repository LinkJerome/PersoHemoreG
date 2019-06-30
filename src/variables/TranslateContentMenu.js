import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, ListItem, ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';


const menuContent = [
    {
        text: 'Infos Perso',
        icon: 'venus-mars'
    }, 
    {
        text: 'Starred',
        icon: 'star'
    }, 
    {
        text: 'Works',
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
        text: 'Contact me',
        icon: 'envelope'
    }
];

export default function TranslateContentMenu() {
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