/* default */
import './App.css';
/* react */
import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import { HomePage } from './Page/HomePage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}
/*
                <Route path="/" element={<RoutingPage />} />

                <Route exact path="/jp" element={<JpHome />} />
                <Route exact path='/jp/About' element={<JpAbout />} />
                <Route exact path='/jp/Blog' element={<JpBlog />} />
                <Route exact path='/jp/CommercialDisclosure' element={<JpCommercialDisclosure />} />
                <Route exact path='/jp/Company' element={<JpCompany />} />
                <Route exact path='/jp/FAQ' element={<JpFAQ />} />
                <Route exact path='/jp/Feature' element={<JpFeature />} />
                <Route exact path="/jp/Home" element={<Navigate replace to="/jp/" />} />
                <Route exact path='/jp/News' element={<JpNews />} />

                <Route exact path="/en" element={<EnHome />} />
                <Route exact path='/en/About' element={<EnAbout />} />
                <Route exact path='/en/Blog' element={<EnBlog />} />
                <Route exact path='/en/CommercialDisclosure' element={<EnCommercialDisclosure />} />
                <Route exact path='/en/Company' element={<EnCompany />} />
                <Route exact path='/en/FAQ' element={<EnFAQ />} />
                <Route exact path='/en/Feature' element={<EnFeature />} />
                <Route exact path="/en/Home" element={<Navigate replace to="/jp/" />} />
                <Route exact path='/en/News' element={<EnNews />} />

                <Route exact path='/AfterLogin' element={<AfterLoginPage />} />

                <Route exact path="/browse" element={<BrowsePage />} />
                <Route exact path="/browse/profile" element={<ProfilePage />} />
                <Route exact path="/browse/assignment" element={<AssignmentPage />} />
                <Route exact path="/browse/friend" element={<FriendPage />} />
                <Route exact path="/browse/map" element={<MapPage />} />
                <Route exact path="/browse/analytics" element={<AnalyticsPage />} />
                <Route exact path="/browse/log" element={<LogPage />} />
                <Route exact path="/browse/accountsetting" element={<AccountSettingPage />} />
                <Route exact path="/browse/setting" element={<SettingPage />} />
                <Route exact path="/browse/document" element={<DocumentPage />} />
                <Route exact path="/browse/purchase" element={<PurchasePage />} />

*/
export default App;