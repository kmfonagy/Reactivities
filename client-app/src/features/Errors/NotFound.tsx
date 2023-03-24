import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oops&nbsp;&ndash; we&#39;ve looked everywhere, but could not find what you&#39;re looking for.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' >
                    Return to Activities
                </Button>
            </Segment.Inline>
        </Segment>
    )
}