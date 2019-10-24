import { i18n } from 'locale';
import React, { ReactElement, SFC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { dimensions, getElevation, palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

interface Props {
  children?: ReactElement;
  modalContent: ReactElement;
  title: string;
}

export const ModalTrigger: SFC<Props> = ({ children, modalContent, title }) => {
  const [isVisible, setModalVisibility] = useState(false);

  const onOpen = () => setModalVisibility(true);
  const onClose = () => setModalVisibility(false);

  const renderModal = () => (
    <Modal transparent animationType="fade" visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalInsideView}>
          <StyledText style={styles.modalTitle}>{i18n.t('planItemActivity:addImage')}</StyledText>
          <IconButton
            name="close"
            type="material"
            color={palette.textBody}
            onPress={onClose}
            iconButtonStyle={styles.closeModalIcon}
          />
          {React.cloneElement(modalContent, { closeModal: onClose })}
        </View>
      </View>
    </Modal>
  );

  return (
    <>
      <TouchableOpacity onPress={onOpen}>{children}</TouchableOpacity>
      {renderModal()}
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: palette.modalBackgroundOverlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInsideView: {
    ...getElevation(4),
    backgroundColor: palette.background,
    width: 438,
    borderRadius: 16,
    paddingVertical: dimensions.spacingBig,
    paddingHorizontal: dimensions.spacingLarge,
  },
  closeModalIcon: {
    position: 'absolute',
    top: dimensions.spacingBig,
    right: dimensions.spacingLarge,
  },
  modalTitle: {
    ...typography.subtitle,
    color: palette.textBody,
  },
});
