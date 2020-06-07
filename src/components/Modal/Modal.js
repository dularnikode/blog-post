import React from 'react'
import { Button, Header, Icon, Modal ,Form} from 'semantic-ui-react'

const ModalExampleCloseIcon = () => (
  <Modal trigger={<Button>Create New Post</Button>} closeIcon inverted>
    <Header content='Create Post'/>
    <Modal.Content>
        <Form>
            <Form.Input placeholder="Title" />
            <Form.Input placeholder="Content" />
        </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='cancel' /> Cancel
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Save
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalExampleCloseIcon