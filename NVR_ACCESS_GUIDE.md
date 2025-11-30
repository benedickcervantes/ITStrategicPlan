# HIKVISION NVR Dashboard Access & Configuration Guide

## Equipment Information
- **NVR Model:** HIKVISION DS-7616NI-Q2/16P Network Video Recorder
- **IP Cameras:** 8 x HIKVISION IP Cameras
- **Monitor:** Philips 223V5LHSV2/71 21.5" 1920x1080 LCD Monitor

---

## 1. Accessing the NVR Dashboard

### Method 1: Direct Connection via Monitor
1. Connect to the NVR using the Philips monitor (if available)
2. Use the NVR's built-in interface or connect a mouse/keyboard directly
3. Access the menu system directly on the NVR

### Method 2: Web Browser Access
1. **Find the NVR's IP Address:**
   - Check your network router's DHCP client list
   - Look for device name "HIKVISION" or "DS-7616NI"
   - Or use network scanning tools (Advanced IP Scanner, Angry IP Scanner)

2. **Access via Web Browser:**
   - Open web browser (Chrome, Firefox, Edge)
   - Type: `http://[NVR_IP_ADDRESS]` (e.g., `http://192.168.1.100`)
   - Or try: `http://[NVR_IP_ADDRESS]:80`

3. **Login Credentials:**
   - **Default Username:** `admin`
   - **Default Password:** `12345` (most common default)
   - **Alternative Default Passwords to Try:**
     - `admin123`
     - `123456`
     - `admin`
     - `password`
     - (blank/empty)

### Method 3: Using HIKVISION iVMS-4200 Software
1. Download HIKVISION iVMS-4200 from HIKVISION website
2. Install on your computer
3. Add device using IP address
4. Use same credentials as web access

---

## 2. If Password is Unknown/Forgotten

### Option A: Check with Previous IT Personnel
- Contact the person who originally set up the system
- Check any documentation or password managers used by IT team
- Look for physical notes or labels near the NVR

### Option B: Factory Reset (⚠️ WARNING: This will erase all settings)
1. **Physical Reset:**
   - Locate the reset button on the NVR (usually small button on back panel)
   - Power off the NVR
   - Hold reset button while powering on
   - Keep holding for 10-15 seconds until you see reset confirmation
   - NVR will reboot with default credentials

2. **After Reset:**
   - Username: `admin`
   - Password: `12345`
   - **IMPORTANT:** You will need to reconfigure:
     - Network settings
     - Camera connections
     - Recording schedules
     - User accounts

### Option C: Use SADP Tool (HIKVISION Device Search Tool)
1. Download HIKVISION SADP (Search Active Device Protocol) tool
2. Install and run on a computer on the same network
3. It will scan and show all HIKVISION devices
4. May show device info and allow password reset (if device supports it)

---

## 3. Checking Storage Status

### Via Web Interface:
1. Login to NVR web interface
2. Navigate to: **Configuration → Storage → Storage Management**
3. Check:
   - **Total Storage Capacity**
   - **Used Storage**
   - **Available Storage**
   - **Storage Health Status**
   - **HDD Status** (if internal HDD installed)

### Via Local Interface (Monitor):
1. Right-click on live view screen
2. Go to: **Main Menu → Storage → Storage Management**
3. View storage information and HDD status

### What to Check:
- ✅ **Storage Usage:** Should be less than 80% full
- ✅ **HDD Health:** Check for any warnings or errors
- ✅ **Recording Status:** Verify cameras are recording properly
- ✅ **Storage Allocation:** Ensure proper distribution across channels

### Storage Recommendations:
- **Minimum Free Space:** Keep at least 20% free for optimal performance
- **Recording Duration:** Check how many days of footage are stored
- **If Storage is Full:**
  - Review and delete old footage if needed
  - Adjust recording quality/settings
  - Add additional storage if required

---

## 4. Enabling Cloud-Based Monitoring (Mobile/Web Access)

### Method 1: HIKVISION Hik-Connect (Recommended)

#### Step 1: Enable Platform Access on NVR
1. Login to NVR web interface
2. Navigate to: **Configuration → Network → Advanced Settings → Platform Access**
3. Enable: **Enable Hik-Connect**
4. Note the **Verification Code** displayed (you'll need this)

#### Step 2: Register/Login to Hik-Connect
1. Download **Hik-Connect** mobile app:
   - iOS: App Store
   - Android: Google Play Store
2. Create account or login to Hik-Connect
3. Tap **"Add Device"** or **"+"** button
4. Scan the QR code from NVR or enter:
   - **Serial Number** (found on NVR label or in device info)
   - **Verification Code** (from Step 1)

#### Step 3: Access via Mobile App
- View live cameras
- Playback recorded footage
- Receive motion detection alerts
- Control PTZ cameras (if applicable)

#### Step 4: Web Access via Hik-Connect Portal
1. Visit: https://www.hik-connect.com
2. Login with same Hik-Connect account
3. Access cameras via web browser

### Method 2: Port Forwarding (Advanced - Direct Access)

⚠️ **Security Warning:** Only use if you understand network security implications

1. **Configure Port Forwarding on Router:**
   - Login to your router (Ruijie Reyee RG-EG310GH-E)
   - Forward ports:
     - **HTTP Port:** 80 (or custom port like 8080)
     - **RTSP Port:** 554
     - **Server Port:** 8000
   - Forward to NVR's local IP address

2. **Get Public IP Address:**
   - Check router WAN IP or use DDNS service
   - Consider using Dynamic DNS (DDNS) for easier access

3. **Access Remotely:**
   - Via web: `http://[PUBLIC_IP]:[PORT]`
   - Via mobile app: Enter public IP and port

4. **Security Recommendations:**
   - Change default ports
   - Use strong passwords
   - Enable HTTPS if available
   - Consider VPN instead of port forwarding

### Method 3: VPN Access (Most Secure)
1. Set up VPN on your network router
2. Connect to VPN from mobile/web
3. Access NVR using local IP address as if on-site

---

## 5. Network Configuration Checklist

### Current Network Setup (From Audit):
- **Load Balancer:** Ruijie Reyee RG-EG310GH-E
- **PoE Switch:** Ruijie Reyee RG-NBS3100-8GT2SFP-P-V2
- **Non-PoE Switch:** Ruijie Reyee RG-NBS5100-24GT4SFP

### Recommended NVR Network Settings:
- **IP Address:** Static IP (recommended) - e.g., 192.168.1.100
- **Subnet Mask:** 255.255.255.0 (typically)
- **Gateway:** Router IP (e.g., 192.168.1.1)
- **DNS:** 8.8.8.8, 8.8.4.4 (Google DNS) or router DNS

### To Configure Network:
1. Login to NVR
2. Go to: **Configuration → Network → Basic Settings**
3. Set static IP or ensure DHCP reservation on router
4. Save and restart if needed

---

## 6. Troubleshooting Common Issues

### Cannot Access NVR:
- ✅ Check network cable connection
- ✅ Verify NVR is powered on
- ✅ Check IP address is correct
- ✅ Try different web browser
- ✅ Clear browser cache
- ✅ Check firewall settings

### Cameras Not Showing:
- ✅ Verify cameras are connected to PoE switch
- ✅ Check camera IP addresses in NVR
- ✅ Ensure cameras are added to NVR channels
- ✅ Check camera firmware compatibility

### Cloud Access Not Working:
- ✅ Verify internet connection on NVR network
- ✅ Check Hik-Connect verification code is correct
- ✅ Ensure platform access is enabled on NVR
- ✅ Verify router allows outbound connections
- ✅ Check if firewall is blocking connections

### Storage Issues:
- ✅ Check HDD is properly installed
- ✅ Verify HDD is formatted
- ✅ Check recording schedule is active
- ✅ Review storage allocation settings

---

## 7. Security Best Practices

1. **Change Default Password Immediately**
   - Use strong password (min 8 characters, mix of letters, numbers, symbols)
   - Store password securely (password manager)

2. **Create Additional User Accounts**
   - Create limited-access users for viewing only
   - Don't share admin credentials

3. **Enable HTTPS** (if available)
   - More secure than HTTP

4. **Regular Firmware Updates**
   - Check HIKVISION website for firmware updates
   - Update NVR firmware to latest version

5. **Network Security**
   - Isolate NVR on separate VLAN if possible
   - Use VPN for remote access instead of port forwarding
   - Enable firewall rules

---

## 8. Quick Reference

### Default Login Info:
- **URL:** `http://[NVR_IP]` or `http://[NVR_IP]:80`
- **Username:** `admin`
- **Password:** `12345` (default) or check with IT team

### Important Menu Locations:
- **Storage Check:** Configuration → Storage → Storage Management
- **Network Settings:** Configuration → Network → Basic Settings
- **Platform Access:** Configuration → Network → Advanced Settings → Platform Access
- **Camera Management:** Configuration → Camera → Camera

### Mobile App:
- **App Name:** Hik-Connect
- **Download:** App Store / Google Play Store
- **Web Portal:** https://www.hik-connect.com

---

## 9. Contact Information & Resources

### HIKVISION Support:
- **Website:** https://www.hikvision.com
- **Support:** Check local HIKVISION distributor
- **Documentation:** Download from HIKVISION website

### Useful Tools:
- **SADP Tool:** Device discovery and management
- **iVMS-4200:** Desktop client software
- **Hik-Connect:** Mobile and web access

---

## Notes:
- ⚠️ **IMPORTANT:** If you perform a factory reset, you will lose all camera configurations and need to set up everything again
- 📝 **Documentation:** After accessing the NVR, document the actual password and IP address for future reference
- 🔒 **Security:** Never share admin credentials publicly or store them in insecure locations

---

**Last Updated:** Based on IT Strategic Plan 2026 Audit
**Prepared for:** Federal Pioneer Development Corp

