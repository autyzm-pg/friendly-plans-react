import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Icon, IconButton, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, getElevation, palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  planItem: PlanItem;
}

interface State {
  modalVisible: boolean;
}

class ImagePicker extends React.PureComponent<Props, State> {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  openModal = () => {
    this.setModalVisible(true);
  };

  closeModal = () => {
    this.setModalVisible(false);
  };

  navigateToImageLibrary = () => {
    const { planItem } = this.props;

    this.setModalVisible(false);
    this.props.navigation.navigate('ImageLibrary', {
      planItem,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal transparent animationType="fade" visible={this.state.modalVisible} onRequestClose={this.closeModal}>
          <View style={styles.modalOutsideView}>
            <View style={styles.modalInsideView}>
              <StyledText style={styles.modalTitle}>{i18n.t('planItemActivity:addImage')}</StyledText>
              <IconButton
                name="close"
                type="material"
                onPress={this.closeModal}
                iconButtonStyle={styles.closeModalIcon}
              />
              <View style={styles.imageActionContainer}>
                <View style={styles.imageAction}>
                  <View style={styles.imageActionIcon}>
                    <IconButton name="photo-camera" type="material" size={24} />
                  </View>
                  <StyledText style={styles.imageActionTitle}>
                    {i18n.t('planItemActivity:imageActionTakePhoto')}
                  </StyledText>
                </View>
                <View style={styles.imageAction}>
                  <View style={styles.imageActionIcon}>
                    <IconButton name="photo-library" type="material" size={24} onPress={this.navigateToImageLibrary} />
                  </View>
                  <StyledText style={styles.imageActionTitle}>
                    {i18n.t('planItemActivity:imageActionLibrary')}
                  </StyledText>
                </View>
                <View style={styles.imageAction}>
                  <View style={styles.imageActionIcon}>
                    <IconButton name="file-download" type="material" size={24} />
                  </View>
                  <StyledText style={styles.imageActionTitle}>
                    {i18n.t('planItemActivity:imageActionBrowse')}
                  </StyledText>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.imagePicker}>
          <Icon
            onPress={this.openModal}
            name="add-a-photo"
            type="material"
            size={82}
            color={palette.textInputPlaceholder}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagePicker: {
    borderRadius: 8,
    borderColor: palette.backgroundSurface,
    borderWidth: 1,
    display: 'flex',
    paddingHorizontal: 91,
    paddingVertical: 67,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOutsideView: {
    backgroundColor: palette.modalBackgroundOverlay,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInsideView: {
    ...getElevation(4),
    backgroundColor: palette.background,
    height: '45%',
    width: '45%',
    borderRadius: 8,
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
  imageActionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: dimensions.spacingLarge,
  },
  imageAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageActionIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderColor: palette.backgroundSurface,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageActionTitle: {
    maxWidth: '60%',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default withNavigation(ImagePicker);
