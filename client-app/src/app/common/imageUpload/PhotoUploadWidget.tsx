import { observer } from "mobx-react-lite";
import { Button, Grid, Header } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import { useEffect, useState } from "react";
import PhotoWidgetCropper from "./PhotoWidgetCropper";

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default observer(function PhotoUploadWidget({loading, uploadPhoto}: Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            for (let i = 0; i < files.length; i++) {
                (file: object & {preview?: string}) => URL.revokeObjectURL(file.preview!)
            }
        }
    }, [files])

    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color="teal" content='Step 1 - Add Photo' />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color="teal" content='Step 2 - Resize Image' />
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                )}
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color="teal" content='Step 3 - Preview &amp; Upload' />
                {files && files.length > 0 && (
                    <>
                        <div className='img-preview' style={{ minHeight: '13rem', minWidth: '13rem', overflow: 'hidden' }} />
                        <Button.Group widths={2}>
                            <Button 
                                loading={loading} 
                                onClick={onCrop} 
                                positive 
                                icon='check' 
                                style={{borderTopLeftRadius: 0, backgroundColor:'#00b5ad'}}
                            />
                            <Button 
                                disabled={loading} 
                                onClick={() => setFiles([])} icon='close' 
                                style={{borderTopRightRadius: 0, color: 'red'}}
                            />
                        </Button.Group>
                    </>
                )}
            </Grid.Column>
        </Grid>
    )
})