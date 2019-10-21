import { i18n } from 'locale';
import React, { SFC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { dimensions, getElevation, palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

interface Props {
  children?: JSX.Element;
  modalContent: JSX.Element;
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
          <IconButton name="close" type="material" onPress={onClose} iconButtonStyle={styles.closeModalIcon} />
          {modalContent}
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.modalTriggerContainer}>
      <TouchableOpacity onPress={onOpen}>{children}</TouchableOpacity>
      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  modalTriggerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    paddingHorizontal: dimensions.spacingBig,
    paddingVertical: dimensions.spacingLarge,
  },
  closeModalIcon: {
    position: 'absolute',
    top: dimensions.spacingLarge,
    right: dimensions.spacingBig,
  },
  modalTitle: {
    ...typography.subtitle,
    color: palette.textBody,
  },
});
