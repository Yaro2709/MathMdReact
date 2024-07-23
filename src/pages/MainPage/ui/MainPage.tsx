import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Button theme={ThemeButton.CLEAR}>test</Button>
        </div>
    );
};

export default MainPage;
