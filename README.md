# RPG Ambience
RPG Ambience allows you to play sounds and display visuals during your tabletop RPG sessions using your computer's keyboard. It reads audiovisuals from an adventure file that you define beforehand. There are two types of audiovisuals: scenes and effects. Both consist of an image and/or a sound, but scenes loop their sound while effects play it only once.

Note: RPG Ambience only works on Windows computers.

## How to use
1. Create an adventure file in a text editor. (There is a sample adventure file below.)
2. Open Ambience.exe and choose the adventure file when prompted.
3. Double-click inside the newly opened Ambience window to put it in fullscreen mode.
4. Use the keyboard to control your audiovisuals and bring your adventure to life!

## Playing audiovisuals
- If your audiovisual has a Key attribute, you play it by simply pressing the defined key.
- If your audiovisual has a Name attribute, you play it by typing in the name and then pressing Enter.
    - You can save time by just typing in the first few letters of the name, but this is unreliable if there are scenes with similar names.
    - Names are case insensitive.
    - You can use backspace to remove letters as usual.

## Keyboard commands
- Enter: End the currently playing effect if there is one. Otherwise, end the currently playing scene.
- Escape: Leave fullscreen mode.

## Sample adventure
	<Adventure xmlns="clr-namespace:Ambience;assembly=Ambience">
		<Adventure.Scenes>
			<!-- Scene with key. -->
			<AudioVisual
				Key="F1"
				Sound="C:\Music\Forest.mp3"
				Image="C:\Images\Forest.jpg"/>
			<!-- Scene with name. -->
			<AudioVisual
				Name="Cave"
				Sound="C:\Music\Cave.mp3"
				Image="C:\Images\Cave.mp3"/>
		</Adventure.Scenes>
		<Adventure.Effects>
			<!-- Effect with image and white background. -->
			<AudioVisual
				Key="F2"
				Image="C:\Images\Ogre.jpg"
				Background="White"/>
			<!-- Sound effect. -->
			<AudioVisual
				Key="F3"
				Sound="C:\Sounds\Dragon.mp3"/>
		</Adventure.Effects>
	</Adventure>

## Experimental features
- Adding text to audiovisuals.
- Sequencing audiovisuals using the "Next" property.
- Fading effects.

## Troubleshooting
This version of RPG Ambience doesn't offer much in the way of error messages when something is wrong. Below is some general advice:

- If an audiovisual doesn't play as expected, make sure that all the files referenced actually exist.
- If an image or a sound doesn't play as expected, it might be of an unsupported format.
- If sound doesn't work under Windows XP, try updating Windows Media Player to version 10 or higher.