import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
const {width, height} = Dimensions.get('window');

const banner = [{}, {}, {}, {}];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require(`./src/images/back.png`)}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Post</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require(`./src/images/dots.png`)}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.postItemContainer}>
            <View style={styles.userInfoContainer}>
              <Image
                source={require(`./src/images/dp2.png`)}
                style={styles.userAvatar}
                resizeMode="contain"
              />
              <View>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userName}>Mohammad Mustafa</Text>
                  <View style={styles.userStatusContainer}>
                    <Image
                      source={require(`./src/images/circle.png`)}
                      style={styles.userStatusCircle}
                      resizeMode="contain"
                    />
                    <Image
                      source={require(`./src/images/check.png`)}
                      style={styles.userStatusCheck}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={styles.userLocationContainer}>
                  <Image
                    source={require(`./src/images/dubai.png`)}
                    style={styles.userLocationIcon}
                    resizeMode="contain"
                  />
                  <Image
                    source={require(`./src/images/1hour.png`)}
                    style={styles.userLocationIcon}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.postOptionsContainer}>
              <Image
                source={require(`./src/images/dots.png`)}
                style={styles.postOptionsIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: 14,
              height: 260,
              borderRadius: width * 0.04,
              overflow: 'hidden',
            }}>
            <FlatList
              data={banner}
              horizontal
              scrollEnabled
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={e => {
                const ind = e.nativeEvent.contentOffset.x / width;
                setCurrentIndex(Number(ind.toFixed(0)));
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{width: width * 0.878, backgroundColor: 'white'}}>
                    <Image
                      source={require('./src/images/banner.png')}
                      resizeMode="cover"
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                );
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
                paddingTop: 10,
              }}>
              <TouchableOpacity>
                <Image
                  source={require(`./src/images/user.png`)}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Image
                source={require(`./src/images/progress.png`)}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}>
              {banner.map((x, index) => (
                <View
                  key={index}
                  style={{
                    width: currentIndex === index ? 26 : 13,
                    height: 13,
                    backgroundColor:
                      currentIndex === index ? '#36AFD6' : 'white',
                    borderRadius: 100,
                  }}
                />
              ))}
            </View>

            <BlurView
              style={{
                width: '100%',
                height: 40,
                position: 'absolute',
                bottom: 0,
              }}
              blurType="light"
              blurAmount={100}
              reducedTransparencyFallbackColor="white">
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: width * 0.04,
                  borderTopRightRadius: width * 0.04,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Image
                    source={require('./src/images/heart.png')}
                    resizeMode="contain"
                    style={{width: 18, height: 18}}
                  />
                  <Text
                    style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
                    66
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Image
                    source={require('./src/images/chat.png')}
                    resizeMode="contain"
                    style={{width: 18, height: 18}}
                  />
                  <Text
                    style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
                    66
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Image
                    source={require('./src/images/bookmark.png')}
                    resizeMode="contain"
                    style={{width: 18, height: 18}}
                  />
                  <Text
                    style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
                    66
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Image
                    source={require('./src/images/shuffle.png')}
                    resizeMode="contain"
                    style={{width: 18, height: 18}}
                  />
                  <Text
                    style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
                    66
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Image
                    source={require('./src/images/share.png')}
                    resizeMode="contain"
                    style={{width: 18, height: 18}}
                  />
                  <Text
                    style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
                    66
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                  <Text
                    style={{
                      backgroundColor: '#FE6587',
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 5,
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>

          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              marginTop: 14,
              flexDirection: 'row',
              gap: -8,
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/images/dp.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderRadius: 100,
                borderColor: '#36AFD6',
              }}
            />
            <Image
              source={require('./src/images/dp2.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                borderWidth: 2,
                borderRadius: 100,
                borderColor: '#36AFD6',
              }}
            />
            <Image
              source={require('./src/images/dp.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderRadius: 100,
                borderColor: '#36AFD6',
              }}
            />
            <Text style={{paddingLeft: 18, fontSize: 14}}>Like It</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 12, color: 'black', fontWeight: '300'}}>
              Enjoyed the day with the family 😘😍
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#008FDF',
                fontWeight: '400',
                marginTop: 4,
              }}>
              @Adam_Mohamed & @Haya_Mohamed{' '}
              <Text style={{color: 'black'}}>...More</Text>
            </Text>
            <Text
              style={{
                fontSize: 8,
                color: 'black',
                fontWeight: '600',
                marginTop: 8,
              }}>
              View all 17 comments
            </Text>
          </View>

          <FlatList
            data={banner}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    width: '100%',
                    marginTop: 10,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    borderColor: 'gray',
                    padding: 8,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', gap: 6}}>
                      <Image
                        source={require('./src/images/dp.png')}
                        resizeMode="contain"
                        style={{
                          width: 24,
                          height: 24,
                          borderWidth: 1,
                          borderRadius: 100,
                          borderColor: '#36AFD6',
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          Adam Mohamed
                        </Text>
                        <Text
                          style={{
                            fontSize: 8,
                            fontWeight: '400',
                            color: 'gray',
                          }}>
                          14 Hours Ago{' '}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image
                        source={require('./src/images/fillheart.png')}
                        resizeMode="contain"
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                      <Image
                        source={require('./src/images/chat.png')}
                        resizeMode="contain"
                        style={{
                          width: 16,
                          height: 16,
                          tintColor: 'gray',
                        }}
                      />
                    </View>
                  </View>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                      marginTop: 6,
                      marginLeft: 30,
                    }}>
                    Lovely 😘😍 I’ve enjoyed the day too With{' '}
                    <Text style={{color: '#008FDF'}}>
                      @Haya & @Battamostafffa
                    </Text>
                  </Text>

                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '90%',
                      marginTop: 10,
                      borderLeftWidth: 0.5,
                      borderLeftColor: 'gray',
                      padding: 8,
                      marginLeft: 30,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row', gap: 6}}>
                        <Image
                          source={require('./src/images/dp2.png')}
                          resizeMode="contain"
                          style={{
                            width: 24,
                            height: 24,
                            borderWidth: 1,
                            borderRadius: 100,
                            borderColor: '#36AFD6',
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: 'bold',
                              color: 'black',
                            }}>
                            Daniel Hamilton
                          </Text>
                          <Text
                            style={{
                              fontSize: 8,
                              fontWeight: '400',
                              color: 'gray',
                            }}>
                            14 Hours Ago{' '}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', gap: 10}}>
                        <Image
                          source={require('./src/images/fillheart.png')}
                          resizeMode="contain"
                          style={{
                            width: 14,
                            height: 14,
                          }}
                        />
                        <Image
                          source={require('./src/images/chat.png')}
                          resizeMode="contain"
                          style={{
                            width: 14,
                            height: 14,
                            tintColor: 'gray',
                          }}
                        />
                      </View>
                    </View>

                    <Image
                      source={require('./src/images/voice.png')}
                      style={{
                        width: '70%',
                        height: 40,
                      }}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.bottomBar}>
        <Image
          source={require(`./src/images/dp.png`)}
          style={styles.dpIcon}
          resizeMode="contain"
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Image
              source={require(`./src/images/bin.png`)}
              style={styles.inputIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={require(`./src/images/wave.png`)}
            style={styles.inputWave}
            resizeMode="stretch"
          />
          <TouchableOpacity>
            <Image
              source={require(`./src/images/mic.png`)}
              style={styles.inputIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={require(`./src/images/send.png`)}
            style={styles.sendIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E8EF',
  },
  header: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
  },
  scrollViewContainer: {
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 6,
    paddingBottom: width * 0.5,
  },
  postItemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userAvatar: {
    width: 50,
    height: 50,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  userName: {
    fontWeight: 'bold',
  },
  userStatusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userStatusCircle: {
    width: 16,
    height: 16,
    position: 'absolute',
  },
  userStatusCheck: {
    width: 8,
    height: 8,
  },
  userLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },
  userLocationIcon: {
    width: 50,
    height: 20,
  },
  postOptionsContainer: {},
  postOptionsIcon: {
    width: 18,
    height: 18,
  },
  bottomBar: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#ECECEC',
    height: 100,
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dpIcon: {
    width: 40,
    height: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 10,
    height: 34,
  },
  inputIcon: {
    width: 16,
    height: 16,
  },
  inputWave: {
    width: '70%',
    height: 20,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
