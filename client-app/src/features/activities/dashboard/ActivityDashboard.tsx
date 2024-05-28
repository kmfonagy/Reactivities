import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    editOrCreate: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity, 
        selectActivity, cancelSelectedActivity, editMode, openForm, closeForm, 
        editOrCreate, deleteActivity, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectedActivity={cancelSelectedActivity}
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm 
                    closeForm={closeForm}
                    activity={selectedActivity}
                    editOrCreate={editOrCreate}
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}