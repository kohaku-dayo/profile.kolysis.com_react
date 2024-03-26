import * as React from "react";
import { SnowFall } from "../Component/union/particleBackground";
import { CenterElements, HalfWidthVerticalWidthAdjustment, HoverLightContainer, SkillTag, VerticalContainer, VerticalScrollContainer, VerticalWidthAdjustment } from "../Component/union/frameUnion";
import { VerticalBigSpace } from "../Component/parts/emptySpace";
import './HomePage.css';
import { MuiWrapper } from "../Component/factory/muifactory";
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IronmanBackground } from "../Component/union/imageBackground";
import { RaderChart } from '../Component/parts/reactchart';
import { TitlePlate } from "../Component/union/sizingUnion";
import { KofiPopup } from "../Component/union/patronPopup";

export function HomePage() {
    return (
        <>
            <SnowFall />
            <IronmanBackground />
            <KofiPopup />
            <CenterElements>
                <div style={{ flex: 2.2 }}>
                    <HalfWidthVerticalWidthAdjustment>
                        <VerticalContainer>
                            <VerticalBigSpace />
                            <p className="my-name">Kohaku-dayo</p>
                            <p className="sub-title">職種：フルスタックニート</p>
                            <p className="about-me">
                                WEB開発をメインに活動しています。
                                自身の経験から得たReactやAWSなどの知識をDiscordで時々教えています。
                            </p>

                            <p className="kohaku-status">こはくステータス</p>
                            <div className="kohaku-chart">
                                <RaderChart />
                            </div>

                            <div style={{ display: "flex" }}>
                                <Link to="https://www.instagram.com/kay_englishjouzu_nt/">
                                    <MuiWrapper style={{ width: "35px", height: "35px", "margin-right": "10px" }}>
                                        <InstagramIcon/>
                                    </MuiWrapper>
                                </Link>
                                <Link to="https://discordapp.com/users/832869740695126047">
                                    <MuiWrapper style={{ width: "35px", height: "35px" }}>
                                        <FaDiscord/>
                                    </MuiWrapper>
                                </Link>
                            </div>
                        </VerticalContainer>
                    </HalfWidthVerticalWidthAdjustment>
                </div>
                <div className="hp-middle-space">
                </div>
                <div style={{ flex: 4.5 }}>
                    <VerticalScrollContainer>
                        <VerticalWidthAdjustment>
                            <VerticalBigSpace />
                            <p className="hp-about">ABOUT</p>
                            <p className="description1">
                            　    2008年、私はその頃
                                {<Link to="https://marvel.disney.co.jp/movie/avengers-iw/character/ironman" className="description-link">アイアンマン</Link>}
                                という映画にハマりこの映画の主人公であるトニースタークに憧れを持ちました。
                                私が憧れたトニースタークというキャラクターには私が夢見る最先端のAI開発とロボット技術を簡単に行えてしまう
                                才能と知識がありました。私は彼に憧れてITの学習を始めました。
                            </p>
                            <p className="description2">
                            　    今となってはWEBサービスで一儲けしたい、金銭的に余裕のある人生が送りたいという気持ちで"お金"の為の開発で日々が精一杯ですが、
                                また、心に余裕が持てるくらいに収益が安定したら今度こそトニースタークに憧れたあの時や、
                                アイアンスーツを纏ったトニースタークがただただかっこよくて自分もそうなりたいと思いながらプログラミングをしていたあの頃みたいに
                                また心からプログラミングを楽しむことができる生活が送れることを祈り今日もWEB開発を進めています。
                            </p>
                            <p className="description3">
                            　    もし{<Link to="https://discordapp.com/users/832869740695126047" className="description-link">Discord</Link>}
                                やTwitterでこはくと出会ったら、トニースタークの話やお互いの夢を語れるととても喜びます！よければ話しかけてね☆
                            </p>
                        </VerticalWidthAdjustment>

                        <Link to="https://ansaikuropedia.org/wiki/%E5%AE%8C%E5%85%A8%E3%81%AB%E7%90%86%E8%A7%A3%E3%81%97%E3%81%9F" style={{ all:"unset" }}>
                            <HoverLightContainer>
                                <TitlePlate
                                    title="完全に理解した　スキル一覧"
                                    subTitle="完全に理解したの定義はこのパネルをクリックして必ずご確認ください。"
                                >
                                    <div style={{ display: "flex", "flex-wrap": "wrap" }}>
                                        <SkillTag title="HTML"/>
                                        <SkillTag title="CSS"/>
                                        <SkillTag title="JavaScript"/>
                                        <SkillTag title="React"/>
                                        <SkillTag title="MUI"/>
                                        <SkillTag title="C"/>
                                        <SkillTag title="C++"/>
                                        <SkillTag title="C#"/>
                                        <SkillTag title=".NET"/>
                                        <SkillTag title="Python"/>
                                        <SkillTag title="Powershell"/>
                                        <SkillTag title="DOS Command"/>
                                        <SkillTag title="Linux"/>
                                        <SkillTag title="Unity" />
                                        <SkillTag title="UE4"/>
                                        <SkillTag title="Postman"/>
                                        <SkillTag title="Apidog"/>
                                        <SkillTag title="ActiveDirectory"/>
                                        <SkillTag title="Visual Studio"/>
                                        <SkillTag title="Microsoft365"/>
                                        <SkillTag title="Apidog"/>
                                        <SkillTag title="Lightsail"/>
                                        <SkillTag title="Lambda"/>
                                        <SkillTag title="API Gateway"/>
                                        <SkillTag title="Amazon Route 53"/>
                                        <SkillTag title="Amazon EC2"/>
                                        <SkillTag title="Amazon S3"/>
                                        <SkillTag title="AWS Glue"/>
                                        <SkillTag title="Amazon RDS"/>
                                        <SkillTag title="Amazon Redshift"/>
                                        <SkillTag title="VMware Horizon"/>
                                        <SkillTag title="PostgreSQL"/>
                                        <SkillTag title="Tera Term"/>
                                        <SkillTag title="JSON"/>
                                        <SkillTag title="TopoJSON"/>
                                        <SkillTag title="GeoJSON"/>
                                        <SkillTag title="Swagger"/>
                                        <SkillTag title="npm"/>
                                        <SkillTag title="Faker"/>
                                        <SkillTag title="Discord.py"/>
                                        <SkillTag title="WSUS"/>
                                        <SkillTag title="SmartSESAME"/>
                                        <SkillTag title="SkyseaClientView"/>
                                        <SkillTag title="Blender" />
                                    </div>
                                </TitlePlate>
                            </HoverLightContainer>
                        </Link>

                        <VerticalBigSpace />
                    </VerticalScrollContainer>
                </div>
            </CenterElements>
        </>
    );
}