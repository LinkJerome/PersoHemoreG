import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, ListItem, ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import menuContent from './../assets/constants/menuContent';

 function TranslateContentMenu({ t }) {


    return (
        menuContent.map((content, index) => (
            content.text === 'Divider' ? <Divider key={index} /> : 
                <ListItem button key={content.text} alignItems="center" to={content.url} component={Link}>
                        <ListItemIcon><FontAwesomeIcon icon={content.icon} size="2x" /></ListItemIcon>
                        <ListItemText><Trans i18nKey={content.text}/></ListItemText>
                </ListItem>
        ))
    );
};

export default withTranslation()(TranslateContentMenu);