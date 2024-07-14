import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react';

interface Props {
    setFiles: (files: any) => void;
}

export default observer(function PhotoWidgetDropzone({ setFiles }: Props) {
    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        color: '#00b5ad',
        paddingTop: '30px',
        textAlign: 'center' as 'center',
        height: '14rem',
        width: '14rem'
    }

    const dzActive = {
        borderColor: '#00b5ad'
    }

    const onDrop = useCallback((acceptedFiles: any) => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} style={isDragActive ? {...dzStyles, ...dzActive} : dzStyles}>
            <input {...getInputProps()} />
            <Icon name='upload' size='huge' />
            <Header content='Drag Image Here' color='teal' />
        </div>
    )
})