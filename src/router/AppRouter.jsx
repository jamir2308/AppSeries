import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../pages/mainLayout/MainLayout'
import Gallery from 'simpsons/Gallery';
import CharacterList from 'rickandmorty/CharacterList';
import { FormattedMessage } from 'react-intl';

function AppRouter() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Gallery FormattedMessage={FormattedMessage} />} />
                    <Route path='/simpsons' element={<Gallery FormattedMessage={FormattedMessage} />} />
                    <Route path='/rickandmorty' element={<CharacterList FormattedMessage={FormattedMessage} />} />
                </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default AppRouter