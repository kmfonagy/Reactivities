import { useState } from "react";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {

    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;
    
    const [target] = useState('');

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>
                                Hosted by User
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker'/> {activity.venue}
                </span>
            </Segment>
            <Segment secondary style={{backgroundColor: '#DADADA', color: '#F3F3F3'}}>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    style={{backgroundColor: '#0047AB', color:'#f3f3f3'}}
                    floated="right"
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}