import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.backgroundHome,
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  drawerMenu: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  searchBar: {
    height: 50,
    width: '75%',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  horizontalViewContainer: {
    height: 280,
    width: 190,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  horizontalWrapper: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionHoriWrapper: {
    left: 10,
    marginVertical: 10,
  },
  txtTitleHori: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconStarHoriWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  txtPriceHori: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconEvent: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  verticalViewContainer: {
    height: 130,
    width: '100%',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginTop: 15,
    borderRadius: 14,
    flexDirection: 'row',
  },
  verticalWrapper: {
    height: 130,
    width: 130,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageVerticalView: {
    height: 100,
    width: 90,
  },
  descriptionVertiWrapper: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txtTitleVerti: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconStarVertiWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  txtPriceVerti: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconFavorite: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default styles;
