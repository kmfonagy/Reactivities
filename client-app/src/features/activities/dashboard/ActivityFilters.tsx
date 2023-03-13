import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";


export default function ActivityFilters() {
    return (
        <>
            <Menu vertical sized='large' style={{width: '100%', marginTop: 27}}>
                <Header icon='filter' attached content='Filters' style={{backgroundColor: '#F3F3F3', color: '#3eb489'}} />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm going" />
                <Menu.Item content="I'm hosting" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}