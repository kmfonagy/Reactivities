import { observer } from "mobx-react-lite";
import { Cropper } from "react-cropper";
import 'cropperjs/dist/cropper.css'

interface Props {
    imagePreview: string;
    setCropper: (cropper: Cropper) => void;
}

export default observer(function PhotoWidgetCropper({imagePreview, setCropper}: Props) {

    return (
        <Cropper 
            src={imagePreview}
            style={{height: '14rem', width: '14rem'}}
            initialAspectRatio={1}
            aspectRatio={1}
            preview='.img-preview'
            guides={false}
            viewMode={1}
            autoCropArea={1}
            background={false}
            onInitialized={cropper => setCropper(cropper)}
        />
    )
})